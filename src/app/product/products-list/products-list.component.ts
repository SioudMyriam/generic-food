import { Router } from '@angular/router'
import { ProductService } from 'src/app/core/services/product.service'
import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/core/models/product.model'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = []
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products.hits
    })
  }

  deleteProduct(productId: number, productName: string) {
    this.productService.deleteProductById(productId).subscribe(() => {
      localStorage.setItem('deletedProduct', productName)
    })
    this.getProducts()
  }

  editProduct(productId: Product) {
    this.router.navigate(['/editProduct', productId])

  }
}
