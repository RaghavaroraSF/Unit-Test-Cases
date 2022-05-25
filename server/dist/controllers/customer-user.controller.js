"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUserController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CustomerUserController = class CustomerUserController {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async find(id, filter) {
        return this.customerRepository.customerUsers(id).find(filter);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/customers/{id}/users', {
        responses: {
            '200': {
                description: 'Array of Customer has many User',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.User) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerUserController.prototype, "find", null);
CustomerUserController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CustomerRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CustomerRepository])
], CustomerUserController);
exports.CustomerUserController = CustomerUserController;
//# sourceMappingURL=customer-user.controller.js.map