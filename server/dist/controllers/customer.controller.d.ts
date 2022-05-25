import { Filter, FilterExcludingWhere } from '@loopback/repository';
import { Customer } from '../models';
import { CustomerRepository } from '../repositories';
export declare class CustomerController {
    customerRepository: CustomerRepository;
    constructor(customerRepository: CustomerRepository);
    create(customer: Omit<Customer, 'id'>): Promise<Customer>;
    find(filter?: Filter<Customer>): Promise<Customer[]>;
    findById(id: number, filter?: FilterExcludingWhere<Customer>): Promise<Customer>;
    replaceById(id: number, customer: Customer): Promise<void>;
    deleteById(id: number): Promise<void>;
}
