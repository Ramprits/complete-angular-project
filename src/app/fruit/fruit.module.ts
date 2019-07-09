import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitService } from './fruit.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule,
    RouterModule.forChild([
      { path: '', component: FruitListComponent }
    ])
  ],
  declarations: [FruitListComponent],
  providers: [FruitService]
})
export class FruitModule { }