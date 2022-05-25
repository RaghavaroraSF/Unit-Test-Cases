import { Filter, FilterExcludingWhere } from '@loopback/repository';
import { Role } from '../models';
import { RoleRepository } from '../repositories';
export declare class RoleController {
    roleRepository: RoleRepository;
    constructor(roleRepository: RoleRepository);
    find(filter?: Filter<Role>): Promise<Role[]>;
    findById(id: string, filter?: FilterExcludingWhere<Role>): Promise<Role>;
}
