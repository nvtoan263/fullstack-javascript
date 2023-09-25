import express from 'express';
import { saveImage } from '../../controller/imageController';
import fs from 'fs';

const resize_route = express.Router();
const asset_dir = 'asset/images/';

resize_route.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const { inputPath, outputPath, width, height } = req.query as {
      inputPath: string;
      outputPath: string;
      width: string;
      height: string;
    };

    try {
      const directory = process.cwd();
      console.log(directory);

      // Check if inputPath file exists
      const inputFileExists = fs.existsSync(`${asset_dir}${inputPath}`);
      if (!inputFileExists) {
        throw new Error('Input file not exist');
      }

      // Check if outputPath is a valid filename
      if (!/^[a-zA-Z0-9_.-]+$/.test(outputPath)) {
        throw new Error('Output file name not valid');
      }

      // Check if width and height are positive integers
      const parsedWidth = parseInt(width);
      const parsedHeight = parseInt(height);
      if (isNaN(parsedWidth) || isNaN(parsedHeight) || parsedWidth <= 0 || parsedHeight <= 0) {
        throw new Error('Width and height must be positive integers');
      }

      await saveImage(
        `${asset_dir}${inputPath}`,
        `${asset_dir}${outputPath}`,
        parsedWidth,
        parsedHeight,
      );

      res.status(200).send('Image resized and saved successfully');
    } catch (error) {
      console.error((<Error>error).message);
      res.status(500).send((<Error>error).message);
    }
  },
);

export default resize_route;
