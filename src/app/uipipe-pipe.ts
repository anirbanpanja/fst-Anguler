import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uipipe',
})
export class UipipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
