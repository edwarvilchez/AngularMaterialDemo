import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { MatIconModule } from '@angular/material';



//declaramos una constante para usar los componentes de material
const MaterialComponents = [
	MatButtonModule,
	MatDividerModule,
	MatIconModule
]


@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
