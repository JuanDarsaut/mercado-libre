import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecsItemComponent } from './specs-item.component';

const routes: Routes = [
  {
    path: '',
    component: SpecsItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecsItemRoutingModule {}
