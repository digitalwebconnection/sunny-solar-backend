import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Blog from '../models/Blog.js';
import Knowledge from '../models/Knowledge.js';

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const blogs = await Blog.find({}, 'title slug views');
    console.log('--- BLOGS ---');
    blogs.forEach(b => console.log(`${b.title} (${b.slug}): ${b.views} views`));

    const guides = await Knowledge.find({}, 'title slug views');
    console.log('--- KNOWLEDGE GUIDES ---');
    guides.forEach(g => console.log(`${g.title} (${g.slug}): ${g.views} views`));

    // Also reset any views that were at 2 due to strict mode double-firing down to 1
    for (const b of blogs) {
      if (b.views === 2) {
        await Blog.updateOne({ _id: b._id }, { $set: { views: 1 } });
        console.log(`Reset ${b.title} from 2 -> 1 views`);
      }
    }
    for (const g of guides) {
      if (g.views === 2) {
        await Knowledge.updateOne({ _id: g._id }, { $set: { views: 1 } });
        console.log(`Reset ${g.title} from 2 -> 1 views`);
      }
    }

    await mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
};
run();
