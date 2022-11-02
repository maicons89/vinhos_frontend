import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './containers/contato.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ContatoComponent],
  imports: [
    ContatoRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
  ],
})
export class ContatoModule {}
