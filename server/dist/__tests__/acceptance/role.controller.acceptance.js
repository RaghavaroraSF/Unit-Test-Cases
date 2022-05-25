"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const repositories_1 = require("../../repositories");
const controllers_1 = require("../../controllers");
describe('Role controller', () => {
    let repository;
    let controller;
    beforeEach(() => {
        repository = (0, testlab_1.createStubInstance)(repositories_1.RoleRepository);
        controller = new controllers_1.RoleController(repository);
    });
    it('should get all roles', async () => {
        const findStub = repository.stubs.find;
        const arr = [
            {
                "key": "superadmin",
                "name": "Super Admin",
                "description": "Supervises admin and his activities.",
                "created_on": "2022-03-18T16:42:59.000Z",
                "modified_on": "2022-03-18T16:44:17.000Z"
            },
            {
                "key": "admin",
                "name": "Admin",
                "description": "Manages all work.",
                "created_on": "2022-03-18T16:42:59.000Z",
                "modified_on": "2022-03-18T16:57:17.000Z"
            }
        ];
        findStub.resolves(arr);
        const details = await controller.find();
        (0, testlab_1.expect)(details).to.deepEqual(arr);
        (0, testlab_1.expect)(findStub).calledOnce;
    });
    it('should get role by key', async () => {
        const getByKeyStub = repository.stubs.findById;
        const role = {
            "key": "admin",
            "name": "Admin",
            "description": "Manages all work.",
            "created_on": "2022-03-18T16:42:59.000Z",
            "modified_on": "2022-03-18T16:57:17.000Z"
        };
        getByKeyStub.resolves(role);
        const details = await controller.findById("admin");
        (0, testlab_1.expect)(details).to.deepEqual(role);
        testlab_1.sinon.assert.calledWithMatch(getByKeyStub, "admin");
    });
});
//# sourceMappingURL=role.controller.acceptance.js.map