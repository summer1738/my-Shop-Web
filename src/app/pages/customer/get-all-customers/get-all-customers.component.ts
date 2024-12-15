import { Component } from '@angular/core';
import { CustomerServiceService } from '../../../services/customer-service.service';
import {NzTableModule} from 'ng-zorro-antd/table'
import { CommonModule } from '@angular/common';
import {NzGridModule} from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-get-all-customers',
  standalone: true,
  imports: [
    NzTableModule,
    CommonModule,
    NzGridModule,
    NzDividerModule,
    NzIconModule,
    NzButtonModule
  ],
  templateUrl: './get-all-customers.component.html',
  styleUrl: './get-all-customers.component.scss'
})
export class GetAllCustomersComponent {

  customers: any = [];
  

  constructor(private customerService: CustomerServiceService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllCustomers()
  }

  getAllCustomers(){
    this.customerService.getAllCustomers().subscribe((result) => {
      console.log(result);
      this.customers = result;
    })
  }
  deleteCustomer(id:number){
    this.customerService.deleteCustomer(id).subscribe((result) => {
      console.log(result);
      this.getAllCustomers();
    })
  }
}
