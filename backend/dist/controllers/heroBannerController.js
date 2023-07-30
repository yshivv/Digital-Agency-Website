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
exports.updateHeroBannerContent = exports.getHeroBannerContent = void 0;
const HeroBanner_1 = __importDefault(require("../models/HeroBanner"));
const getHeroBannerContent = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Assuming you have a MongoDB model named HeroBanner
        const content = yield HeroBanner_1.default.findOne();
        res.status(200).json(content);
    }
    catch (error) {
        console.error('Error fetching hero banner content:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getHeroBannerContent = getHeroBannerContent;
const updateHeroBannerContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        const updatedContent = { title, description };
        // Assuming you have a MongoDB model named HeroBanner
        yield HeroBanner_1.default.findOneAndUpdate({}, updatedContent, { upsert: true });
        res.status(200).json({ message: 'Hero banner content updated successfully' });
    }
    catch (error) {
        console.error('Error updating hero banner content:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.updateHeroBannerContent = updateHeroBannerContent;
