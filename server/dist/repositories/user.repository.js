"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UserRepository = class UserRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, customerRepositoryGetter, roleRepositoryGetter) {
        super(models_1.User, dataSource);
        this.customerRepositoryGetter = customerRepositoryGetter;
        this.roleRepositoryGetter = roleRepositoryGetter;
        this.roles = this.createBelongsToAccessorFor('roles', roleRepositoryGetter);
        this.registerInclusionResolver('roles', this.roles.inclusionResolver);
        this.customer = this.createBelongsToAccessorFor('customer', customerRepositoryGetter);
        this.registerInclusionResolver('customer', this.customer.inclusionResolver);
    }
};
UserRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.pg')),
    tslib_1.__param(1, repository_1.repository.getter('CustomerRepository')),
    tslib_1.__param(2, repository_1.repository.getter('RoleRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PgDataSource, Function, Function])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map