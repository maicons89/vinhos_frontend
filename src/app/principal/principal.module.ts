import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [CommonModule, PrincipalRoutingModule, ReactiveFormsModule],
})
export class PrincipalModule {}
