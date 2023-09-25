import express from 'express';
import { saveImage } from '../../controller/imageController';

const resize_route = express.Router();
const asset_dir = 'asset/images/';
resize_route.get('/',async (req: express.Request, res: express.Response): Promise<void> => {
    const {inputPath, outputPath, width, height} = req.query as {
        inputPath: string;
        outputPath: string;
        width: string;
        height: string;
    };
    try {
        const directory = process.cwd();
        console.log(directory) ;
        await saveImage(`${asset_dir}${inputPath}`, `${asset_dir}${outputPath}`, parseInt(width), parseInt(height));
        res.status(200).send('Image resized ans save successfully');
    } catch (error) {
        console.log(error)
        res.status(500).send('Error resizing and saving image');
    }
});

export default resize_route;