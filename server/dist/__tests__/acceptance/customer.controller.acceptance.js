"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const repositories_1 = require("../../repositories");
const controllers_1 = require("../../controllers");
describe('Customer Controller', () => {
    let repository;
    let controller;
    beforeEach(() => {
        repository = (0, testlab_1.createStubInstance)(repositories_1.CustomerRepository);
        controller = new controllers_1.CustomerController(repository);
    });
    it('should get list of customers', async () => {
        const findStub = repository.stubs.find;
        const arr = [
            {
                "name": "Harry",
                "website": "xyz.com",
                "address": "New York",
                "id": 2,
                "created_on": "2022-03-18T17:10:18.000Z",
                "modified_on": "2022-05-14T18:16:48.000Z"
            },
            {
                "name": "Ram",
                "website": "defg.com",
                "address": "India",
                "id": 7,
                "created_on": "2022-05-14T18:03:03.454Z",
                "modified_on": "2022-05-14T20:20:03.000Z"
            }
        ];
        findStub.resolves(arr);
        const customerList = await controller.find();
        (0, testlab_1.expect)(customerList).to.deepEqual(customerList);
        testlab_1.sinon.assert.calledOnce;
    });
    it('should get Customer by id', async () => {
        const findByIdStub = repository.stubs.findById;
        const customer = {
            "name": "Ram",
            "website": "defg.com",
            "address": "India",
            "id": 7,
            "created_on": "2022-05-14T18:03:03.454Z",
            "modified_on": "2022-05-14T20:20:03.000Z"
        };
        findByIdStub.resolves(customer);
        const customerById = await controller.findById(7);
        (0, testlab_1.expect)(customerById).to.deepEqual(customer);
        testlab_1.sinon.assert.calledWithMatch(findByIdStub, 7);
    });
    it('should create customer', async () => {
        const createStub = repository.stubs.create;
        const newCustomer = {
            "name": "Ram",
            "website": "defg.com",
            "address": "India",
            "id": 7,
            "created_on": "2022-05-14T18:03:03.454Z",
            "modified_on": "2022-05-14T20:20:03.000Z"
        };
        createStub.resolves(newCustomer);
        const addedCustomer = await controller.create(newCustomer);
        (0, testlab_1.expect)(addedCustomer).to.equal(newCustomer);
        testlab_1.sinon.assert.calledWithMatch(createStub, newCustomer);
    });
    it('should delete the customer by id', async () => {
        const deleteStub = repository.stubs.deleteById;
        await controller.deleteById(2);
        testlab_1.sinon.assert.calledWithMatch(deleteStub, 2);
    });
    it('should update customer by Id', async () => {
        const updateStub = repository.stubs.replaceById;
        const body = {
            "name": "Ram",
            "website": "abcdef.com",
            "address": "India",
            "id": 7,
            "created_on": "2022-05-14T18:03:03.454Z",
            "modified_on": "2022-05-14T20:20:03.000Z",
            customerUsers: [],
            getId: function () {
                throw new Error("Function not implemented.");
            },
            getIdObject: function () {
                throw new Error("Function not implemented.");
            },
            toJSON: function () {
                throw new Error("Function not implemented.");
            },
            toObject: function (options) {
                throw new Error("Function not implemented.");
            }
        };
        await controller.replaceById(2, body);
        testlab_1.sinon.assert.calledWithMatch(updateStub, 2);
    });
});
//# sourceMappingURL=customer.controller.acceptance.js.map