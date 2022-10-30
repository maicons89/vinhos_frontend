import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './containers/catalogo/catalogo.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CatalogoComponent],
  imports: [
    CatalogoRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
  ],
})
export class CatalogoModule {}
