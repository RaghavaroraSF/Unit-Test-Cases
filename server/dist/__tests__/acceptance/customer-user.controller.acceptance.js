"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const repositories_1 = require("../../repositories");
const controllers_1 = require("../../controllers");
describe('Role controller', () => {
    let repository;
    let controller;
    beforeEach(() => {
        repository = (0, testlab_1.createStubInstance)(repositories_1.CustomerRepository);
        controller = new controllers_1.CustomerUserController(repository);
    });
    
});
//# sourceMappingURL=customer-user.controller.acceptance.js.map