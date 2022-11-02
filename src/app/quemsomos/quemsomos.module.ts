import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { QuemsomosRoutingModule } from './quemsomos-routing.module';
import { QuemsomosComponent } from './containers/quemsomos.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [QuemsomosComponent],
  imports: [
    QuemsomosRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
  ],
})
export class QuemsomosModule {}
