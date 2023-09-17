import express from 'express';
import { saveImage } from '../controller/imageController';

const router = express.Router();

router.get('/resize',async (req, res) => {
    const {inputPath, outputPath, width, height} = req.query as {
        inputPath: string;
        outputPath: string;
        width: string;
        height: string;
    };
    
    try {
        await saveImage(inputPath, outputPath, parseInt(width), parseInt(height));
        res.status(200).send('Image resized ans save successfully');
    } catch (error) {
        res.status(500).send('Error resizing and saving image');
    }
});

export default router;