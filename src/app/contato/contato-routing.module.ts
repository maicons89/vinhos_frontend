import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from '../contato/containers/contato.component';

const routes: Routes = [{ path: '', component: ContatoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatoRoutingModule {}
