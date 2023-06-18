import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit{
  products: any[] = [];
  currentPage = 1;
  totalPages = 5; 
  pages: number[] = [];

  constructor() {
    this.generatePages();
  }

  generatePages() {
    this.pages = [];
    let startPage = 1;
    let endPage = this.totalPages;
  
    if (this.totalPages > 5) {
      if (this.currentPage <= 3) {
        endPage = 5;
      } else if (this.currentPage + 1 >= this.totalPages) {
        startPage = this.totalPages - 4;
      } else {
        startPage = this.currentPage - 2;
        endPage = this.currentPage + 2;
      }
    }
  
    for (let i = startPage; i <= endPage; i++) {
      this.pages.push(i);
    }
  }
  

  goToPage(page: number) {
    this.currentPage = page;
    this.fetchProducts();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchProducts();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchProducts();
    }
  }

  ngOnInit() {
    this.fetchProducts();
  }

  roundDiscountPercentage(discountPercentage: number): number {
    return Math.floor(discountPercentage);
  }

  discountPrice(discountPercentage: number, originalPrice: number): number {
    const discountAmount = (discountPercentage / 100) * originalPrice;
    const discountedPrice = originalPrice - discountAmount;
    return Math.floor(discountedPrice);
  }

  fetchProducts() {
    axios.get(`http://localhost:8080/product/all-products?limit=12&page=${this.currentPage}`)
      .then(response => {
        this.products = response.data.products;
        this.totalPages = response.data.totalPages;
        this.generatePages();
      })
      .catch(error => {
        console.log(error);
      });
  }
}
