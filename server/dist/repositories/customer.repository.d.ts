import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { PgDataSource } from '../datasources';
import { Customer, CustomerRelations, User } from '../models';
import { UserRepository } from './user.repository';
export declare class CustomerRepository extends DefaultCrudRepository<Customer, typeof Customer.prototype.id, CustomerRelations> {
    protected userRepositoryGetter: Getter<UserRepository>;
    readonly users: HasManyRepositoryFactory<User, typeof Customer.prototype.id>;
    readonly customerUsers: HasManyRepositoryFactory<User, typeof Customer.prototype.id>;
    constructor(dataSource: PgDataSource, /* @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, */ userRepositoryGetter: Getter<UserRepository>);
}
