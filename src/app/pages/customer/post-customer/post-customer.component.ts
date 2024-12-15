import {NzNotificationService} from 'ng-zorro-antd/notification';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerServiceService } from '../../../services/customer-service.service';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzCardModule} from 'ng-zorro-antd/card';
import { RouterOutlet } from '@angular/router';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzInputModule} from 'ng-zorro-antd/input'

@Component({
  selector: 'app-post-customer',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NzFormModule,
    NzCardModule,
    RouterOutlet,
    NzButtonModule,
    NzCheckboxModule,
    NzInputModule
  ],
  templateUrl: './post-customer.component.html',
  styleUrl: './post-customer.component.scss'
})
export class PostCustomerComponent {

  constructor(
    private customerService: CustomerServiceService,
    private fb: FormBuilder,
    private notificationService: NzNotificationService  
  ){}

  customerForm = this.fb.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, [Validators.required]]
  })

  postCustomer(){
    this.customerService.postCustomer(this.customerForm.value).subscribe((result) => {
      console.log(result)
      this.notification()
    })
  }

  notification(): void{
    this.notificationService.blank(
      'success',
      'customer added successfully'
    )
  }

}
