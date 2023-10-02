import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecsItemComponent } from './specs-item.component';
import { SpecsItemRoutingModule } from './specs-item-routing.module';

@NgModule({
  declarations: [SpecsItemComponent],
  imports: [CommonModule, SpecsItemRoutingModule],
})
export class SpecsItemModule {}
