import request from 'supertest';
import app from '../src/index';
import fs from 'fs';

const testParams = {
    inputPath: '1.jpg',
    outputPath: 'output-1.jpg',
    width: 300,
    height: 200    
};
const invalidParams = {
    inputPath: '1.jpg',
    outputPath: 'output-1.jpg',
    width: -1,
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
})

describe ('Test parameter', () => {
    it ('test invalid height', async () => {
        const response = await request(app)
        .get('/api/resize')
        .query(invalidParams);
    
        expect(response.status).toBe(500);
        expect(response.text).toBe('Width and height must be positive integers');
        //console.log(response);
    })
    it ('Produce a failure test case ', async () => {
        const response = await request(app)
        .get('/api/resize')
        .query(invalidParams);
    
        expect(response.status).toBe(200);
        //console.log(response);
    })
})

describe ('Test Image processing', () => {
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