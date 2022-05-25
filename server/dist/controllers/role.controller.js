"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RoleController = class RoleController {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    /* @post('/roles')
    @response(200, {
      description: 'Role model instance',
      content: {'application/json': {schema: getModelSchemaRef(Role)}},
    })
    async create(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Role, {
              title: 'NewRole',
              exclude: ['id'],
            }),
          },
        },
      })
      role: Omit<Role, 'id'>,
    ): Promise<Role> {
      return this.roleRepository.create(role);
    }
  
    @get('/roles/count')
    @response(200, {
      description: 'Role model count',
      content: {'application/json': {schema: CountSchema}},
    })
    async count(
      @param.where(Role) where?: Where<Role>,
    ): Promise<Count> {
      return this.roleRepository.count(where);
    }
  
  */
    async find(filter) {
        return this.roleRepository.find(filter);
    }
    async findById(id, filter) {
        return this.roleRepository.findById(id, filter);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/roles'),
    (0, rest_1.response)(200, {
        description: 'Array of Role model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Role, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Role)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.get)('/roles/{id}'),
    (0, rest_1.response)(200, {
        description: 'Role model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Role, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Role, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "findById", null);
RoleController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RoleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RoleRepository])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map