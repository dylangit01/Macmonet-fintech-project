import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageComponent} from "./shared/components/message/message.component";
import {MessageService} from "./shared/services/message.service";

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MessageComponent
  ]
})

export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        MessageService
      ]
    }
  }
}

