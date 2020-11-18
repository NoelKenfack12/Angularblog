import { Component } from '@angular/core';
import { GlobalVariable } from './constant/variablesGlobales';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstprojet';
  aproposvar: string = GlobalVariable.BASE_API_URL;
}
