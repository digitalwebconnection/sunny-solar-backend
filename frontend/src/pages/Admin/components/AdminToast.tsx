import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { ToastInfo } from '../types';

interface AdminToastProps {
  toast: ToastInfo | null;
}

export const AdminToast: React.FC<AdminToastProps> = ({ toast }) => {
  if (!toast) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl text-xs font-bold border transition-all ${
        toast.type === 'success'
          ? 'bg-emerald-600 text-white border-emerald-500'
          : 'bg-rose-600 text-white border-rose-500'
      }`}
    >
      {toast.type === 'success' ? (
        <Check className="w-4 h-4" />
      ) : (
        <AlertCircle className="w-4 h-4" />
      )}
      <span>{toast.message}</span>
    </div>
  );
};
