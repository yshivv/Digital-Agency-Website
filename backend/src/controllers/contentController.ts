import { Request, Response } from 'express';
import Content from '../models/Content';

export const getContentSectionData = async (_req: Request, res: Response) => {
    try {
        // Assuming you have a MongoDB model named Content
        const data = await Content.findOne();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching content section data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateContentSectionData = async (req: Request, res: Response) => {
    try {
        const { title, text } = req.body;
        const updatedData = { title, text };

        // Assuming you have a MongoDB model named Content
        await Content.findOneAndUpdate({}, updatedData, { upsert: true });

        res.status(200).json({ message: 'Content section data updated successfully' });
    } catch (error) {
        console.error('Error updating content section data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
