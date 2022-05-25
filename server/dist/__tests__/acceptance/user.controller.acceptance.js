"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const controllers_1 = require("../../controllers");
const repositories_1 = require("../../repositories");
describe('UserController', () => {
    let repository;
    let controller;
    beforeEach(() => {
        repository = (0, testlab_1.createStubInstance)(repositories_1.UserRepository);
        controller = new controllers_1.UserController(repository);
    });
    it('should get users properly', async () => {
        const arr = [
            {
                "id": 34,
                "firstname": "Neil",
                "middlename": "-",
                "lastname": "Irani",
                "email": "neil.irani@gmail.com",
                "phone": "408-10000",
                "address": "Australia",
                "created_on": "2022-12-05T11:59:24.000Z",
                "modified_on": "2022-05-14T18:20:28.000Z",
                "role": "superadmin",
                "customerId": 1
            }
        ];
        const findStub = repository.stubs.find;
        findStub.resolves(arr);
        const details = await controller.find();
        (0, testlab_1.expect)(details).to.deepEqual(arr);
        testlab_1.sinon.assert.calledOnce;
    });
    it('should delete users properly', async () => {
        const deleteStub = repository.stubs.deleteById;
        await controller.deleteById(34);
        testlab_1.sinon.assert.calledWithMatch(deleteStub, 34);
    });
    it('should create new user', async () => {
        const createStub = repository.stubs.create;
        const body = {
            "firstname": "Neil",
            "middlename": "-",
            "lastname": "Irani",
            "email": "neil.irani@gmail.com",
            "phone": "408-10000",
            "address": "Australia",
            "created_on": "2022-12-05T11:59:24.000Z",
            "modified_on": "2022-05-14T18:20:28.000Z",
            "role": "superadmin",
            "customerId": 1
        };
        createStub.resolves(body);
        const details = await controller.create(body);
        (0, testlab_1.expect)(details).to.deepEqual(body);
        testlab_1.sinon.assert.calledWithMatch(createStub, body);
    });
    it('should update users', async () => {
        const updateStub = repository.stubs.replaceById;
        const body = {
            "id": 34,
            "firstname": "Neil",
            "middlename": "-",
            "lastname": "Irani",
            "email": "neil4541.irani@gmail.com",
            "phone": "408-10000",
            "address": "Australia",
            "created_on": "2022-12-05T11:59:24.000Z",
            "modified_on": "2022-05-14T18:20:28.000Z",
            "role": "admin",
            "customerId": 1,
            getId: function () {
                throw new Error('Function not implemented.');
            },
            getIdObject: function () {
                throw new Error('Function not implemented.');
            },
            toJSON: function () {
                throw new Error('Function not implemented.');
            },
            toObject: function (options) {
                throw new Error('Function not implemented.');
            }
        };
        const details = await controller.replaceById(34, body);
        testlab_1.sinon.assert.calledWithMatch(updateStub, 34);
    });
});
//# sourceMappingURL=user.controller.acceptance.js.map