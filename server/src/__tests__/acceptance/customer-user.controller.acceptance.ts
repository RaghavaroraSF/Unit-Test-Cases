import {} from "mocha";
import {expect,createStubInstance, StubbedInstanceWithSinonAccessor, sinon} from '@loopback/testlab';
import { CustomerRepository} from '../../repositories';
import { CustomerUserController} from '../../controllers';
import { HasManyRepositoryFactory } from "@loopback/repository";
import { User } from "../../models";

describe('Role controller',()=>{
    let repository: StubbedInstanceWithSinonAccessor<CustomerRepository>;
    let controller: CustomerUserController;

    beforeEach(() => {
        repository = createStubInstance(CustomerRepository);
        controller = new CustomerUserController(repository);
    });
