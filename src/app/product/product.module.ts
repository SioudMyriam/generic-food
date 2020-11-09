import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CommonComponentsModule } from './../common/components/common-components.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductsListComponent } from './products-list/products-list.component'
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


export const COMPONENTS = [
  ProductsListComponent,
  ProductFormComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    CommonComponentsModule,
    ProductsRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: COMPONENTS
})
export class ProductModule { }
