<details open>
  
<summary> Assigment 1. Image Resize Processing</summary>

# Assigment 1. Image Resize Processing
### Scripts
- Change directory to /Assignment_1_ImageProcessingAPI
- run "npm run start" to start application
- run "npm install" to install neccessary packages
- run "npm run build" to build project
- run "npm run lint" to check source code grammer
- run "npm run test" to run unit test
### Note: 
- This project convert pre-papared image in "asset/images" folder only
- If being converted image not available or missing input params, there will heave error prompt "Error resizing and saving image"
- Project endpoint: http://localhost:3000/api/resize

```http
  GET /api/resize/?inputPath={filename}&outputPath={outpuFilename}&width={width}&height={height}
```

| Parameter  | Type     | Description                                               |
| :--------- | :------- | :-------------------------------------------------------- |
| `inputPath` | `string` | **Required**. inputPath of the desired image to be resized |
| `outputPath` | `string` | **Required**. outputPath of the desired output file name |
| `width`   | `number` | **Required**. desired width                              |
| `height`    | `number` | **Required**. desired height                               |
- Sample request with parameters: http://localhost:3000/api/resize?inputPath=1.jpg&outputPath=output.jpg&width=300&height=200

</details>

