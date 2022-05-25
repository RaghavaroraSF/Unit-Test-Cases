import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Customer, CustomerRelations, User} from '../models';
import {UserRepository} from './user.repository';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {

  public readonly users: HasManyRepositoryFactory<User, typeof Customer.prototype.id>;

  public readonly customerUsers: HasManyRepositoryFactory<User, typeof Customer.prototype.id>;

  constructor(
    @inject('datasources.pg') dataSource: PgDataSource, /* @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, */ @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, /* @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, */
  ) {
    super(Customer, dataSource);
    this.customerUsers = this.createHasManyRepositoryFactoryFor('customerUsers', userRepositoryGetter,);
    // this.users = this.createHasManyRepositoryFactoryFor('users', userRepositoryGetter,);
    // this.registerInclusionResolver('users', this.users.inclusionResolver);
  }
}
