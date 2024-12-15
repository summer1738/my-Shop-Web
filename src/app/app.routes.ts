import { Routes } from '@angular/router';
import { GetAllCustomersComponent } from './pages/customer/get-all-customers/get-all-customers.component';
import { GetAllProductsComponent } from './pages/product/get-all-products/get-all-products.component';
import { PostCustomerComponent } from './pages/customer/post-customer/post-customer.component';
import { UpdateCustomerComponent } from './pages/customer/update-customer/update-customer.component';
import { UpdateProductComponent } from './pages/product/update-product/update-product.component';
import { PostProductComponent } from './pages/product/post-product/post-product.component';

export const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    redirectTo: '/welcome' 
  },
  { 
    path: 'welcome', 
    loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) 
  },
  {
    path: 'get-all-customers',
    component: GetAllCustomersComponent,
    data: {
      title: 'Get all customers'
    }
  },
  {
    path: 'get-all-products',
    component: GetAllProductsComponent,
    data: {
      title: 'Get all product'
    }
  },
  {
    path: 'post-customer',
    component: PostCustomerComponent,
    data: {
      title: 'Post customer'
    }
  },
  {
    path: 'post-product',
    component: PostProductComponent,
    data: {
      title: 'Post product'
    }
  },
  {
    path: 'update-customer',
    component: UpdateCustomerComponent,
    data: {
      title: 'update customer'
    }
  },
  {
    path: 'update-product',
    component: UpdateProductComponent,
    data: {
      title: 'update product'
    }
  }
];
