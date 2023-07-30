import { model, Schema } from 'mongoose';

const heroBannerSchema = new Schema({
    title: { type: String, default: 'Default Title' },
    description: { type: String, default: 'Default Description' },
});

const HeroBanner = model('HeroBanner', heroBannerSchema);

export default HeroBanner;
