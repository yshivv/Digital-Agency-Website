"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contentSchema = new mongoose_1.Schema({
    title: { type: String, default: 'Default Content Title' },
    text: { type: String, default: 'Default Content Text' },
});
const Content = (0, mongoose_1.model)('Content', contentSchema);
exports.default = Content;
