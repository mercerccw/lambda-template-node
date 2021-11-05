"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const place = 'person';
function anotherHello(world = place) {
    const now = (0, moment_1.default)();
    console.log(now.toISOString());
    console.log(`Hello ${world}! `);
}
exports.default = anotherHello;
