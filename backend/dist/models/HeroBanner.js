"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const heroBannerSchema = new mongoose_1.Schema({
    title: { type: String, default: 'Default Title' },
    description: { type: String, default: 'Default Description' },
});
const HeroBanner = (0, mongoose_1.model)('HeroBanner', heroBannerSchema);
exports.default = HeroBanner;
