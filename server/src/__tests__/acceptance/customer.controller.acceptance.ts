import {} from "mocha";
import {expect,createStubInstance, StubbedInstanceWithSinonAccessor, sinon} from '@loopback/testlab';
import { CustomerRepository } from '../../repositories';
import { CustomerController } from '../../controllers';
import Sinon from "sinon";
import { Customer } from "../../models";

describe('Customer Controller',()=>{

    let repository: StubbedInstanceWithSinonAccessor<CustomerRepository>;
    let controller: CustomerController;

    beforeEach(()=>{
        repository = createStubInstance(CustomerRepository);
        controller = new CustomerController(repository);
    })

    it('should get list of customers',async()=>{
        const findStub = repository.stubs.find as sinon.SinonStub;
        const arr = [
        {
          "name": "Harry",
          "website": "xyz.com",
          "address": "New York",
          "id": 2,
          "created_on": "2022-03-18T17:10:18.000Z",
          "modified_on": "2022-05-14T18:16:48.000Z"
        },
        {
          "name": "Ram",
          "website": "defg.com",
          "address": "India",
          "id": 7,
          "created_on": "2022-05-14T18:03:03.454Z",
          "modified_on": "2022-05-14T20:20:03.000Z"
        }
      ];

      findStub.resolves(arr);
      const customerList = await controller.find();
      expect(customerList).to.deepEqual(customerList);
      sinon.assert.calledOnce;
    });

    it('should get Customer by id',async()=>{
        const findByIdStub = repository.stubs.findById as Sinon.SinonStub;
        const customer = {
            "name": "Ram",
            "website": "defg.com",
            "address": "India",
            "id": 7,
            "created_on": "2022-05-14T18:03:03.454Z",
            "modified_on": "2022-05-14T20:20:03.000Z"
        };

        findByIdStub.resolves(customer);
        const customerById = await controller.findById(7);
        expect(customerById).to.deepEqual(customer);
        sinon.assert.calledWithMatch(findByIdStub,7);
    });

    it('should create customer',async()=>{
        const createStub = repository.stubs.create as sinon.SinonStub;
        const newCustomer = {
            "name": "Ram",
            "website": "defg.com",
            "address": "India",
            "id": 7,
            "created_on": "2022-05-14T18:03:03.454Z",
            "modified_on": "2022-05-14T20:20:03.000Z"
        };

        createStub.resolves(newCustomer);
        const addedCustomer = await controller.create(newCustomer);

        expect(addedCustomer).to.equal(newCustomer);
        sinon.assert.calledWithMatch(createStub,newCustomer);
    });

    it('should delete the customer by id',async()=>{
        const deleteStub = repository.stubs.deleteById as sinon.SinonStub;
        await controller.deleteById(2);

        sinon.assert.calledWithMatch(deleteStub,2);
    });

    it('should update customer by Id',async()=>{
        const updateStub = repository.stubs.replaceById as sinon.SinonStub;
        const body:Customer = {
            "name": "Ram",
            "website": "abcdef.com",
            "address": "India",
            "id": 7,
            "created_on": "2022-05-14T18:03:03.454Z",
            "modified_on": "2022-05-14T20:20:03.000Z",
            customerUsers: [],
            getId: function () {
                throw new Error("Function not implemented.");
            },
            getIdObject: function (): Object {
                throw new Error("Function not implemented.");
            },
            toJSON: function (): Object {
                throw new Error("Function not implemented.");
            },
            toObject: function (options?: Object): Object {
                throw new Error("Function not implemented.");
            }
        };
        await controller.replaceById(2,body);
        sinon.assert.calledWithMatch(updateStub,2);
    })
});