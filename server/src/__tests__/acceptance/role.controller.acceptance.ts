import {} from "mocha";
import {expect,createStubInstance, StubbedInstanceWithSinonAccessor, sinon} from '@loopback/testlab';
import { RoleRepository } from '../../repositories';
import { RoleController } from '../../controllers';
import Sinon from "sinon";

describe('Role controller',()=>{
    let repository: StubbedInstanceWithSinonAccessor<RoleRepository>;
    let controller: RoleController;

    beforeEach(() => {
        repository = createStubInstance(RoleRepository);
        controller = new RoleController(repository);
    });

    it('should get all roles',async()=>{
        const findStub = repository.stubs.find as Sinon.SinonStub;
        const arr = [
            {
              "key": "superadmin",
              "name": "Super Admin",
              "description": "Supervises admin and his activities.",
              "created_on": "2022-03-18T16:42:59.000Z",
              "modified_on": "2022-03-18T16:44:17.000Z"
            },
            {
              "key": "admin",
              "name": "Admin",
              "description": "Manages all work.",
              "created_on": "2022-03-18T16:42:59.000Z",
              "modified_on": "2022-03-18T16:57:17.000Z"
            }
          ];
        
        findStub.resolves(arr);
        const details = await controller.find();
        expect(details).to.deepEqual(arr);
        expect(findStub).calledOnce;
    });

    it('should get role by key',async()=>{

        const getByKeyStub = repository.stubs.findById as Sinon.SinonStub;
        const role = {
            "key": "admin",
            "name": "Admin",
            "description": "Manages all work.",
            "created_on": "2022-03-18T16:42:59.000Z",
            "modified_on": "2022-03-18T16:57:17.000Z"
        };

        getByKeyStub.resolves(role);
        const details = await controller.findById("admin");
        expect(details).to.deepEqual(role);
        sinon.assert.calledWithMatch(getByKeyStub,"admin");
    })
}) 