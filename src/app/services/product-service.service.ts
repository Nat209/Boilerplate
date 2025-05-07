// src/app/core/services/product.service.ts
import { Injectable } from '@angular/core';
import { ProductModule } from '@/models/product/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // 1) Declara tu array de productos como propiedad
  private products: ProductModule[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    // …más productos
  ];

  constructor() { }

  // 2) Método público para obtener los productos
  getProducts(): ProductModule[] {
    return this.products;
  }

  // 3) (Opcional) otros métodos: addProduct, updateQuantity, etc.
}
