/**
 * Pure client-side PDF Generator for Sunny Solar Buying & Vetting Checklist
 * Generates an official, clean 1-page vector PDF containing ONLY this page's data:
 * - Customer form details (Name, Email, Postcode, Date)
 * - Page title & subtitle
 * - Interactive vetting progress & score
 * - Master Electrician Guarantee note
 * - All checklist criteria with verified / pending status
 */

export interface ChecklistFormData {
  name: string;
  email: string;
  postcode: string;
}

export interface ChecklistItemData {
  id: string;
  category: string;
  title: string;
  description: string;
}

export interface ChecklistPdfOptions {
  formData: ChecklistFormData;
  items: ChecklistItemData[];
  checkedMap: Record<string, boolean>;
}

// Helper to escape PDF text
function escapePdf(str: string): string {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/—/g, ' - ')
    .replace(/–/g, '-')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[•·]/g, '*')
    .replace(/[^\x20-\x7E]/g, ' ');
}

// Helper to wrap text into lines based on character budget
function wrapText(text: string, maxChars: number): string[] {
  if (!text) return [];
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    if ((current ? current + ' ' + word : word).length <= maxChars) {
      current = current ? current + ' ' + word : word;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

class PdfPage {
  private commands: string[] = [];
  public readonly width = 595.28;
  public readonly height = 841.89;

  private toPdfY(topY: number): number {
    return this.height - topY;
  }

  setFillColor(r: number, g: number, b: number) {
    this.commands.push(`${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg`);
  }

  setStrokeColor(r: number, g: number, b: number) {
    this.commands.push(`${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} RG`);
  }

  setLineWidth(w: number) {
    this.commands.push(`${w.toFixed(2)} w`);
  }

  drawRect(x: number, topY: number, w: number, h: number, fill = true, stroke = false) {
    const pdfY = this.toPdfY(topY + h);
    const op = fill && stroke ? 'B' : fill ? 'f' : 'S';
    this.commands.push(`${x.toFixed(2)} ${pdfY.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re ${op}`);
  }

  drawLine(x1: number, y1: number, x2: number, y2: number) {
    const py1 = this.toPdfY(y1);
    const py2 = this.toPdfY(y2);
    this.commands.push(`${x1.toFixed(2)} ${py1.toFixed(2)} m ${x2.toFixed(2)} ${py2.toFixed(2)} l S`);
  }

  drawCheckmark(x: number, topY: number, size: number, r: number, g: number, b: number) {
    const scale = size / 16;
    this.commands.push('q');
    this.setStrokeColor(r, g, b);
    this.setLineWidth(1.8 * scale);
    const py1 = this.toPdfY(topY + 9 * scale);
    const py2 = this.toPdfY(topY + 13 * scale);
    const py3 = this.toPdfY(topY + 3.5 * scale);
    this.commands.push(
      `${(x + 3 * scale).toFixed(2)} ${py1.toFixed(2)} m ` +
      `${(x + 6.5 * scale).toFixed(2)} ${py2.toFixed(2)} l ` +
      `${(x + 13 * scale).toFixed(2)} ${py3.toFixed(2)} l S`
    );
    this.commands.push('Q');
  }

  drawText(
    text: string,
    x: number,
    topY: number,
    font: '/F1' | '/F2' | '/F3',
    size: number,
    r: number,
    g: number,
    b: number
  ) {
    const pdfY = this.toPdfY(topY + size * 0.85);
    this.commands.push('BT');
    this.commands.push(`${font} ${size.toFixed(1)} Tf`);
    this.commands.push(`${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg`);
    this.commands.push(`1 0 0 1 ${x.toFixed(2)} ${pdfY.toFixed(2)} Tm`);
    this.commands.push(`(${escapePdf(text)}) Tj`);
    this.commands.push('ET');
  }

  drawWrappedText(
    text: string,
    x: number,
    topY: number,
    font: '/F1' | '/F2' | '/F3',
    size: number,
    lineHeight: number,
    maxChars: number,
    r: number,
    g: number,
    b: number
  ): number {
    const lines = wrapText(text, maxChars);
    let curY = topY;
    for (const line of lines) {
      this.drawText(line, x, curY, font, size, r, g, b);
      curY += lineHeight;
    }
    return curY;
  }

  getStreamContent(): string {
    return this.commands.join('\n');
  }
}

export class ChecklistPdfDocument {
  private pages: PdfPage[] = [];

  addPage(): PdfPage {
    const page = new PdfPage();
    this.pages.push(page);
    return page;
  }

  buildBlob(): Blob {
    const totalPages = this.pages.length;
    const pageObjStartId = 6;
    const contentObjStartId = pageObjStartId + totalPages;

    const objects: { id: number; content: string }[] = [];

    // 1: Catalog
    objects.push({
      id: 1,
      content: '<< /Type /Catalog /Pages 2 0 R >>',
    });

    // 2: Pages
    const pageKids = this.pages.map((_, i) => `${pageObjStartId + i} 0 R`).join(' ');
    objects.push({
      id: 2,
      content: `<< /Type /Pages /Kids [ ${pageKids} ] /Count ${totalPages} >>`,
    });

    // Fonts
    objects.push({
      id: 3,
      content: '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
    });
    objects.push({
      id: 4,
      content: '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>',
    });
    objects.push({
      id: 5,
      content: '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>',
    });

    // Pages & Contents
    for (let i = 0; i < totalPages; i++) {
      const pageObjId = pageObjStartId + i;
      const contentObjId = contentObjStartId + i;
      const streamData = this.pages[i].getStreamContent();
      const streamLen = streamData.length;

      objects.push({
        id: pageObjId,
        content: `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents ${contentObjId} 0 R /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> >>`,
      });

      objects.push({
        id: contentObjId,
        content: `<< /Length ${streamLen} >>\nstream\n${streamData}\nendstream`,
      });
    }

    objects.sort((a, b) => a.id - b.id);

    let body = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n';
    const offsets: number[] = [0];

    for (const obj of objects) {
      offsets.push(body.length);
      body += `${obj.id} 0 obj\n${obj.content}\nendobj\n`;
    }

    const startXref = body.length;
    const totalObjs = objects.length + 1;

    let xref = `xref\n0 ${totalObjs}\n0000000000 65535 f \r\n`;
    for (let i = 1; i <= objects.length; i++) {
      const off = offsets[i].toString().padStart(10, '0');
      xref += `${off} 00000 n \r\n`;
    }

    const trailer = `trailer\n<< /Size ${totalObjs} /Root 1 0 R >>\nstartxref\n${startXref}\n%%EOF\n`;

    const fullPdf = body + xref + trailer;
    return new Blob([fullPdf], { type: 'application/pdf' });
  }
}

/**
 * Builds and triggers immediate browser download for the 1-page PDF
 * containing strictly this page's data.
 */
export function generateBuyingChecklistPdf(options: ChecklistPdfOptions): { blob: Blob; url: string; filename: string } {
  const { formData, items, checkedMap } = options;
  const doc = new ChecklistPdfDocument();

  const customerName = formData.name.trim() || 'Valued Homeowner';
  const customerEmail = formData.email.trim() || 'Not Provided';
  const customerPostcode = formData.postcode.trim() || 'Australia';
  const currentDate = new Date().toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const checkedCount = Object.values(checkedMap).filter(Boolean).length;
  const totalCount = items.length;
  const percent = Math.round((checkedCount / totalCount) * 100);

  const page = doc.addPage();

  // Top Dark Header Banner
  page.setFillColor(0.06, 0.09, 0.16); // Slate-950
  page.drawRect(35, 28, 525, 52, true, false);

  // Solar Orange brand accent bar
  page.setFillColor(0.93, 0.31, 0.0); // Brand Solar Orange #ed5001
  page.drawRect(35, 80, 525, 3, true, false);

  // Logo & Header text
  page.drawText('SUNNY SOLAR SOLUTIONS', 46, 42, '/F2', 14, 1, 1, 1);
  page.drawText('SOLAR QUOTE BUYING & VETTING CHECKLIST', 46, 60, '/F1', 8.5, 0.96, 0.64, 0.02);
  page.drawText('OFFICIAL AUDIT COPY', 438, 44, '/F2', 8, 0.75, 0.8, 0.9);
  page.drawText(currentDate, 438, 60, '/F1', 8, 0.96, 0.64, 0.02);

  // Page Header (from this page)
  page.drawText('Critical Questions to Vet Any Solar Quote', 35, 96, '/F2', 15, 0.08, 0.12, 0.2);
  page.drawText(
    'Engineered by master electricians to give you an unfair advantage before signing any solar contract.',
    35,
    113,
    '/F1',
    8.5,
    0.35,
    0.4,
    0.45
  );

  // Customer Form Details Box (Right Side Form Data)
  page.setFillColor(0.97, 0.98, 1.0);
  page.setStrokeColor(0.82, 0.86, 0.92);
  page.setLineWidth(1);
  page.drawRect(35, 126, 525, 56, true, true);

  // Left column: Form Details
  page.drawText('CUSTOMER DETAILS', 46, 137, '/F2', 8, 0.18, 0.4, 0.8);
  page.drawText('Full Name:', 46, 150, '/F2', 8.5, 0.25, 0.3, 0.35);
  page.drawText(customerName, 125, 150, '/F1', 8.5, 0.08, 0.12, 0.2);

  page.drawText('Email Address:', 46, 163, '/F2', 8.5, 0.25, 0.3, 0.35);
  page.drawText(customerEmail, 125, 163, '/F1', 8.5, 0.08, 0.12, 0.2);

  page.drawText('Suburb / Postcode:', 46, 175, '/F2', 8.5, 0.25, 0.3, 0.35);
  page.drawText(customerPostcode, 125, 175, '/F1', 8.5, 0.08, 0.12, 0.2);

  // Right column: Progress Scorecard (from left side)
  page.drawText('INTERACTIVE VETTING PROGRESS', 335, 137, '/F2', 8, 0.93, 0.31, 0.0);
  page.drawText('Criteria Verified:', 335, 150, '/F2', 8.5, 0.25, 0.3, 0.35);
  page.drawText(`${checkedCount} of ${totalCount} Verified (${percent}%)`, 418, 150, '/F2', 8.5, 0.15, 0.37, 0.07);

  page.drawText('Status:', 335, 163, '/F2', 8.5, 0.25, 0.3, 0.35);
  page.drawText(percent === 100 ? 'Audit Complete' : 'In Progress', 418, 163, '/F1', 8.5, 0.25, 0.3, 0.35);

  // Progress Bar
  page.setFillColor(0.88, 0.9, 0.94);
  page.drawRect(335, 173, 210, 6, true, false);
  if (percent > 0) {
    page.setFillColor(0.93, 0.31, 0.0);
    page.drawRect(335, 173, Math.min(210, (210 * percent) / 100), 6, true, false);
  }

  // Master Electrician Guarantee (from bottom left of page)
  page.setFillColor(0.94, 0.98, 0.95);
  page.setStrokeColor(0.65, 0.85, 0.7);
  page.setLineWidth(1);
  page.drawRect(35, 190, 525, 30, true, true);

  page.drawText('MASTER ELECTRICIAN GUARANTEE', 46, 199, '/F2', 7.5, 0.15, 0.37, 0.07);
  page.drawText(
    'Never sign a contract on the spot. Legitimate Australian installers give you 7-14 days to review engineering drawings and DNSP connection offers.',
    46,
    211,
    '/F1',
    7.5,
    0.15,
    0.3,
    0.2
  );

  // Section Header: Checklist Items
  page.drawText('INSPECTION CRITERIA & VETTING STATUS', 35, 230, '/F2', 9.5, 0.08, 0.12, 0.2);

  // Render Checklist Items
  let currentY = 244;

  items.forEach((item, index) => {
    const isChecked = !!checkedMap[item.id];

    // Card background
    page.setFillColor(isChecked ? 0.99 : 1.0, isChecked ? 0.98 : 1.0, isChecked ? 0.95 : 1.0);
    page.setStrokeColor(isChecked ? 0.93 : 0.88, isChecked ? 0.5 : 0.88, isChecked ? 0.2 : 0.88);
    page.setLineWidth(0.8);
    page.drawRect(35, currentY, 525, 78, true, true);

    // Checkbox Box
    const boxX = 46;
    const boxY = currentY + 12;
    if (isChecked) {
      page.setFillColor(0.93, 0.31, 0.0);
      page.setStrokeColor(0.93, 0.31, 0.0);
      page.drawRect(boxX, boxY, 14, 14, true, true);
      page.drawCheckmark(boxX, boxY, 14, 1, 1, 1);
    } else {
      page.setFillColor(1, 1, 1);
      page.setStrokeColor(0.7, 0.75, 0.8);
      page.drawRect(boxX, boxY, 14, 14, true, true);
    }

    // Category Tag
    page.setFillColor(0.93, 0.94, 0.96);
    page.drawRect(68, currentY + 10, 110, 13, true, false);
    page.drawText(item.category.toUpperCase(), 72, currentY + 13, '/F2', 6.5, 0.35, 0.4, 0.45);

    // Question number
    page.drawText(`#${index + 1}`, 185, currentY + 13, '/F2', 7.5, 0.5, 0.55, 0.6);

    // Status Badge
    if (isChecked) {
      page.setFillColor(0.9, 0.96, 0.92);
      page.drawRect(470, currentY + 10, 80, 13, true, false);
      page.drawText('VERIFIED', 490, currentY + 13, '/F2', 7, 0.08, 0.5, 0.25);
    } else {
      page.setFillColor(0.98, 0.93, 0.93);
      page.drawRect(470, currentY + 10, 80, 13, true, false);
      page.drawText('PENDING', 490, currentY + 13, '/F2', 7, 0.75, 0.2, 0.15);
    }

    // Question Title
    page.drawText(item.title, 68, currentY + 29, '/F2', 9, 0.1, 0.14, 0.2);

    // Question Description (wrapped)
    page.drawWrappedText(
      item.description,
      68,
      currentY + 44,
      '/F1',
      8,
      11.5,
      98,
      0.35,
      0.4,
      0.45
    );

    currentY += 84;
  });

  // Bottom Summary Box
  page.setFillColor(0.97, 0.98, 1.0);
  page.setStrokeColor(0.85, 0.88, 0.92);
  page.setLineWidth(1);
  page.drawRect(35, currentY + 10, 525, 46, true, true);

  page.drawText('OFFICIAL VETTING SUMMARY', 46, currentY + 20, '/F2', 8, 0.18, 0.4, 0.8);
  page.drawText(
    `Prepared for ${customerName} (${customerEmail}, ${customerPostcode}) • ${checkedCount} of ${totalCount} criteria verified (${percent}%).`,
    46,
    currentY + 34,
    '/F1',
    8,
    0.2,
    0.25,
    0.3
  );
  page.drawText(
    'Engineered under Clean Energy Council & Master Electricians Australia guidelines.',
    46,
    currentY + 46,
    '/F3',
    7.5,
    0.5,
    0.55,
    0.6
  );

  // Footer
  page.setStrokeColor(0.85, 0.88, 0.92);
  page.drawLine(35, 805, 560, 805);
  page.drawText('Sunny Solar • 10A Burralong Dr, Wondunna QLD 4655 • 1300 030 479 • www.sunnysolar.com.au', 35, 814, '/F1', 8, 0.5, 0.55, 0.6);
  page.drawText(`Prepared for ${customerName} • Page 1 of 1`, 420, 814, '/F1', 8, 0.5, 0.55, 0.6);

  // Build blob and trigger download
  const blob = doc.buildBlob();
  const url = URL.createObjectURL(blob);

  const safeName = customerName.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `Sunny_Solar_Buying_Checklist_${safeName}.pdf`;

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  return { blob, url, filename };
}
