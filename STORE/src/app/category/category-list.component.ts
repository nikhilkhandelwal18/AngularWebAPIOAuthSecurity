import { AppUserAuth } from './../security/app-user-auth';
import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { SecurityService } from '../security/security.service';

@Component({
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  securityObject: AppUserAuth = null;

  constructor(private categoryService: CategoryService,
              private securityService: SecurityService) {
                this.securityObject = securityService.securityObject;
               }

  ngOnInit() {
    this.getCategories();
  }

  private getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
