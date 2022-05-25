import {sinon,expect,createStubInstance, StubbedInstanceWithSinonAccessor} from '@loopback/testlab';
import Sinon, { SinonStub } from 'sinon';
import { UserController } from '../../controllers';
import { User } from '../../models';
import { UserRepository } from '../../repositories';

describe('UserController', () => {

    let repository: StubbedInstanceWithSinonAccessor<UserRepository>;
    let controller: UserController;

    beforeEach(() => {
      repository = createStubInstance(UserRepository) ;
      controller = new UserController(repository);
    });
  
    it('should get users properly', async () => {
      
      const arr = [
        {
          "id": 34,
          "firstname": "Neil",
          "middlename": "-",
          "lastname": "Irani",
          "email": "neil.irani@gmail.com",
          "phone": "408-10000",
          "address": "Australia",
          "created_on": "2022-12-05T11:59:24.000Z",
          "modified_on": "2022-05-14T18:20:28.000Z",
          "role": "superadmin",
          "customerId": 1
        }
      ];
      const findStub = repository.stubs.find as SinonStub;
      
      findStub.resolves(arr);
      const details = await controller.find();
 
      expect(details).to.deepEqual(arr);
      sinon.assert.calledOnce;
      
    });
 
    it('should delete users properly', async () => {
      
        const deleteStub = repository.stubs.deleteById as Sinon.SinonStub;
      
        await controller.deleteById(34);
        sinon.assert.calledWithMatch(deleteStub,34);
        
      });

    it('should create new user', async () => {
      
        const createStub = repository.stubs.create as Sinon.SinonStub;
        const body = {
          "firstname": "Neil",
          "middlename": "-",
          "lastname": "Irani",
          "email": "neil.irani@gmail.com",
          "phone": "408-10000",
          "address": "Australia",
          "created_on": "2022-12-05T11:59:24.000Z",
          "modified_on": "2022-05-14T18:20:28.000Z",
          "role": "superadmin",
          "customerId": 1
        };

        createStub.resolves(body);
        const details = await controller.create(body);

        expect(details).to.deepEqual(body);
        sinon.assert.calledWithMatch(createStub,body);
        
      });


    it('should update users',async ()=>{

      const updateStub = repository.stubs.replaceById as Sinon.SinonStub;
      const body:User = {
        "id": 34,
        "firstname": "Neil",
        "middlename": "-",
        "lastname": "Irani",
        "email": "neil4541.irani@gmail.com",
        "phone": "408-10000",
        "address": "Australia",
        "created_on": "2022-12-05T11:59:24.000Z",
        "modified_on": "2022-05-14T18:20:28.000Z",
        "role": "admin",
        "customerId": 1,
        getId: function () {
          throw new Error('Function not implemented.');
        },
        getIdObject: function (): Object {
          throw new Error('Function not implemented.');
        },
        toJSON: function (): Object {
          throw new Error('Function not implemented.');
        },
        toObject: function (options?: Object): Object {
          throw new Error('Function not implemented.');
        }
      }
    
      const details = await controller.replaceById(34,body);
      sinon.assert.calledWithMatch(updateStub,34);
      
    });
});
  