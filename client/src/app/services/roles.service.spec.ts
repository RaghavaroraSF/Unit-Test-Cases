import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { RolesService } from "./roles.service"
import {my_URL, role} from '../globals';
import { TestBed } from "@angular/core/testing";
import { mockRoleByKey, mockRoles } from "src/mocks/mockRoles";

describe('roles Service',()=>{
    let service: RolesService;
    let httpController: HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule(
          {
              imports: [HttpClientTestingModule],
              providers: [RolesService]
          }
        )
        service = TestBed.inject(RolesService);
        httpController = TestBed.inject(HttpTestingController);
    });

    it('retrieves list of roles',()=>{
        service.getRoleList().then((res)=> {expect(res).toEqual(mockRoles)});

        const req = httpController.expectOne(
            {
                url: `${my_URL}/roles`,
                method: 'get'
            }
        );
        req.flush(mockRoles);

    });

    it('retrieves role by key',()=>{

        let key = 'admin';

        service.getRoleByKey(key).then((res)=> {
            expect(res).toEqual(mockRoleByKey);
        });

        const req = httpController.expectOne(
            {
                url: `${my_URL}/roles/${key}`,
                method: 'get'
            }
        );
        req.flush(mockRoleByKey);

    })
    
})
