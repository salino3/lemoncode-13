import { Component } from '@angular/core';
import { MemberEntity } from './model/member-entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lemoncode-13';

  labelText: string = 'Search: ';

  members: MemberEntity[] = [];



  muestraAlert(name: string) {
    alert('El nombre es: ' + name);
  }

  escribeAlert(name: string) {
    console.log('El nombre es: ' + name);
  }
}
