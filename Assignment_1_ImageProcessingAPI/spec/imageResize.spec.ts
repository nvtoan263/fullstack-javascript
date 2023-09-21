import request from 'supertest';
import app from '../src/index';
import fs from 'fs';

const testParams = {
    inputPath: '1.jpg',
    outputPath: 'output-1.jpg',
    width: 300,
    height: 200    
};
const testImageFilePath = '../asset/images/output.jpg';
describe ('Test Image Resizing API', () => {
    it('call API which resize an image', async () => {
        const response = await request(app)
            .get('/apt/images/resize')
            .query(testParams);
        
        expect(response.status).toBe(200);
        expect(fs.existsSync(testImageFilePath)).toBe(true);
    })
})