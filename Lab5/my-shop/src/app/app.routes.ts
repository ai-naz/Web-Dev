import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: ProductCategoryComponent }, 
  { path: 'category/:name', component: ProductListComponent },
  { path: 'product/:id', component: ProductItemComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
