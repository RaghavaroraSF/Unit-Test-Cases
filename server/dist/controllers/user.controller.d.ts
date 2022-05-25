import { Filter } from '@loopback/repository';
import { User } from '../models';
import { UserRepository } from '../repositories';
export declare class UserController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    create(user: Omit<User, 'id'>): Promise<User>;
    find(filter?: Filter<User>): Promise<User[]>;
    replaceById(id: number, user: User): Promise<void>;
    deleteById(id: number): Promise<void>;
}
