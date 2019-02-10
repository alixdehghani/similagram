import {MatToolbarModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatInputModule} from '@angular/material'; 
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialModule { }
