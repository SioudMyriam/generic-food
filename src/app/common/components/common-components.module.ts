import { HeaderComponent } from './header/header.component'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    HeaderComponent
  ],
})
export class CommonComponentsModule {
  static forRoot(): ModuleWithProviders<CommonComponentsModule> {
    return {
      ngModule: CommonComponentsModule
    }
  }
}
