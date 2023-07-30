import { Request, Response } from 'express';
import HeroBanner from '../models/HeroBanner';

export const getHeroBannerContent = async (_req: Request, res: Response) => {
    try {
        // Assuming you have a MongoDB model named HeroBanner
        const content = await HeroBanner.findOne();
        res.status(200).json(content);
    } catch (error) {
        console.error('Error fetching hero banner content:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateHeroBannerContent = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        const updatedContent = { title, description };

        // Assuming you have a MongoDB model named HeroBanner
        await HeroBanner.findOneAndUpdate({}, updatedContent, { upsert: true });

        res.status(200).json({ message: 'Hero banner content updated successfully' });
    } catch (error) {
        console.error('Error updating hero banner content:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
