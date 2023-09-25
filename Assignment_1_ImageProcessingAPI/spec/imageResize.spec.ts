import request from 'supertest';
import app from '../src/index';
import fs from 'fs';

const testParams = {
    inputPath: '1.jpg',
    outputPath: 'output-1.jpg',
    width: 300,
    height: 200    
};
const testImageFilePath = 'asset/images/output-1.jpg';
describe ('Test End Point API', () => {
    it('call API which resize an image', async () => {
        const response = await request(app)
            .get('/api/')
            .query(testParams);
        
        expect(response.status).toBe(200);
    })

    it('Test API which resize an image', async () => {
        const response = await request(app)
            .get('/api/resize/')
            .query(testParams);
        
        expect(response.status).toBe(200);

        const directory = process.cwd();
        console.log("Current dir is: " + directory); 

        expect(fs.existsSync(testImageFilePath)).toBe(true);
    })
})