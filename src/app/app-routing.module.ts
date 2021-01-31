import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    // for keeping template-driven form as home
    path: '',
    component: TemplateDrivenFormComponent,
  },
  {
    path: 'templateform',
    component: TemplateDrivenFormComponent,
  },
  {
    path: 'reactiveform',
    component: ReactiveFormComponent,
  },
  {
    path: 'products/:name',
    component: ProductDetailsComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
