"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CustomerController = class CustomerController {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async create(customer) {
        return this.customerRepository.create(customer);
    }
    /* @get('/customers/count')
    @response(200, {
      description: 'Customer model count',
      content: {'application/json': {schema: CountSchema}},
    })
    async count(
      @param.where(Customer) where?: Where<Customer>,
    ): Promise<Count> {
      return this.customerRepository.count(where);
    } */
    async find(filter) {
        return this.customerRepository.find(filter);
    }
    /*  @patch('/customers')
     @response(200, {
       description: 'Customer PATCH success count',
       content: {'application/json': {schema: CountSchema}},
     })
     async updateAll(
       @requestBody({
         content: {
           'application/json': {
             schema: getModelSchemaRef(Customer, {partial: true}),
           },
         },
       })
       customer: Customer,
       @param.where(Customer) where?: Where<Customer>,
     ): Promise<Count> {
       return this.customerRepository.updateAll(customer, where);
     }
    */
    async findById(id, filter) {
        return this.customerRepository.findById(id, filter);
    }
    /*   @patch('/customers/{id}')
      @response(204, {
        description: 'Customer PATCH success',
      })
      async updateById(
        @param.path.number('id') id: number,
        @requestBody({
          content: {
            'application/json': {
              schema: getModelSchemaRef(Customer, {partial: true}),
            },
          },
        })
        customer: Customer,
      ): Promise<void> {
        await this.customerRepository.updateById(id, customer);
      } */
    async replaceById(id, customer) {
        await this.customerRepository.replaceById(id, customer);
    }
    async deleteById(id) {
        await this.customerRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/customers'),
    (0, rest_1.response)(200, {
        description: 'Customer model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Customer) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Customer, {
                    title: 'NewCustomer',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/customers'),
    (0, rest_1.response)(200, {
        description: 'Array of Customer model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Customer, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Customer)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.get)('/customers/{id}'),
    (0, rest_1.response)(200, {
        description: 'Customer model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Customer, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Customer, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/customers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Customer PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Customer]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/customers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Customer DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "deleteById", null);
CustomerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CustomerRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CustomerRepository])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map