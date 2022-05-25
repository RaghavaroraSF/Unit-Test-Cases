import { Filter } from '@loopback/repository';
import { User } from '../models';
import { CustomerRepository } from '../repositories';
export declare class CustomerUserController {
    protected customerRepository: CustomerRepository;
    constructor(customerRepository: CustomerRepository);
    find(id: number, filter?: Filter<User>): Promise<User[]>;
}
