"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageResizingRoute_1 = __importDefault(require("./routes/imageResizingRoute"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const test = 1;
app.use('/api/images', imageResizingRoute_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
