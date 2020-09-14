import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';



//declaramos una constante para usar los componentes de material
const MaterialComponents = [
	MatButtonModule
]


@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
