import { model, Schema } from 'mongoose';

const contentSchema = new Schema({
    title: { type: String, default: 'Default Content Title' },
    text: { type: String, default: 'Default Content Text' },
});

const Content = model('Content', contentSchema);

export default Content;
