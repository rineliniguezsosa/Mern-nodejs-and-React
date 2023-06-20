"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("../routes");
require("dotenv/config");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', routes_1.router);
app.listen("".concat(process.env.PORTSERVER), function () {
    console.log("Server runing in the port http://localhost:".concat(process.env.PORTSERVER));
});
