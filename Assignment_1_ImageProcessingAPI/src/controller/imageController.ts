import sharp from 'sharp';
import * as fs from 'fs';

const cache = new Map<string, Buffer>();

export const resizeImage = async (
    inputPath: string,
    width: number,
    height: number
): Promise<Buffer> => {
    const cacheKey = '${inputPath}-${widtg}-${height}';

    if (cache.has(cacheKey)) {
        return cache.get(cacheKey) as Buffer;
    }

    const resizeImage = await sharp(inputPath).resize(width,height).toBuffer();

    return resizeImage;
}

export const saveImage = async (
    inputPath: string,
    outputPath: string,
    width: number,
    height: number
): Promise<void> => {
    const resizedImage = await resizeImage(inputPath, width, height);
    fs.writeFileSync(outputPath, resizedImage);
}