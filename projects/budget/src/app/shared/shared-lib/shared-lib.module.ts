import {NgModule} from '@angular/core';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule]
})
export class SharedLibModule {
}
