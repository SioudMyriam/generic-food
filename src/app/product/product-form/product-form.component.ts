import { ProductService } from '../../core/services/product.service'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import * as _ from 'lodash'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup
  isEditMode = false
  lastDeletedProductName: string

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.lastDeletedProductName = localStorage.getItem('deletedProduct')
    this.setProjectFormControls()
    this.isEditMode = this.router.url.includes('edit')
    if (this.isEditMode) this.getProduct(this.route.snapshot.params.productId)

  }

  setProjectFormControls() {
    this.productForm = this.formBuilder.group({
      name: [this.lastDeletedProductName, Validators.required],
      scientificName: ['', Validators.required],
      groupId: ['', Validators.required],
      subGroupId: ['', Validators.required]
    })
  }

  getProduct(productId: number) {
    this.productService.getProductById(productId).subscribe(product => {
      this.productForm.setValue({
        name: product.name,
        scientificName: product.scientificName,
        groupId: product.groupId,
        subGroupId: product.subGroupId
      })
    })
  }

  addNewProduct() {
    this.productService.addNewProduct(this.productForm.value).subscribe(() => {
      this.router.navigate(['/products'])
    })
  }

  editProduct() {
    this.productService.updateProduct(this.productForm.value).subscribe(() => {
      this.router.navigate(['/products'])
    })
  }
}
