"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const input_json_1 = __importDefault(require("./input.json"));
const output_json_1 = __importDefault(require("./output.json"));
const todo_1 = require("./todo");
describe('Todo', () => {
    // TODO: make sure this test passes
    it('Should be able to convert the input (flat lists) to the output (nested) structure', () => {
        const output = (0, todo_1.convertInput)(input_json_1.default);
        //(0, chai_1.expect)(output.documents.length).to.equal(1);
        (0, chai_1.expect)(output.documents[0].entities.length).to.equal(14);
        //(0, chai_1.expect)(output.documents[0].annotations.length).to.equal(9);
        //(0, chai_1.expect)(output).to.deep.equal(output_json_1.default);
    });
    // BONUS: Write tests that validates the output json. Use the function you have written in "src/todo.ts".
});
