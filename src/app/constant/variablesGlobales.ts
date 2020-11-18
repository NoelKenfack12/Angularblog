import { Injectable } from '@angular/core';
export const GlobalVariable = Object.freeze({
     BASE_API_URL: 'apropos',
     //... more of your variables
 });

@Injectable()
export class VariablesGlobales {
  apropos: string = 'toto';
}
