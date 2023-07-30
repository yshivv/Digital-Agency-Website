"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContentSectionData = exports.getContentSectionData = void 0;
const Content_1 = __importDefault(require("../models/Content"));
const getContentSectionData = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Assuming you have a MongoDB model named Content
        const data = yield Content_1.default.findOne();
        res.status(200).json(data);
    }
    catch (error) {
        console.error('Error fetching content section data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getContentSectionData = getContentSectionData;
const updateContentSectionData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, text } = req.body;
        const updatedData = { title, text };
        // Assuming you have a MongoDB model named Content
        yield Content_1.default.findOneAndUpdate({}, updatedData, { upsert: true });
        res.status(200).json({ message: 'Content section data updated successfully' });
    }
    catch (error) {
        console.error('Error updating content section data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.updateContentSectionData = updateContentSectionData;
