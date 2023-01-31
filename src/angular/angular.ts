import { NgModule } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { DIRECTIVES } from './angular-directives';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class LiquidOxygenModule {}

export { DIRECTIVES };
