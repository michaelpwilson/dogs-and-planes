import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatTabsModule, MatGridListModule, MatIconModule} from '@angular/material';

const modules = [
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class CustomMaterialModule { }