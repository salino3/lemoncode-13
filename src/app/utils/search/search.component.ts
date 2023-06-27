import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() label: string = 'Buscar';
  @Input() plH: string = 'Search...';

  name: string = 'Carlos';
  @Output() clickEnLupa: EventEmitter<string> = new EventEmitter();
  //  @Output() myEvent = new EventEmitter();

  constructor() {
    // setTimeout(() => {
    //   this.name = 'Maria';
    // }, 3000);
  }

  ngOnInit(): void {}

  changeName() {
    this.name = 'Francisco';
    this.clickEnLupa.emit(this.name)
  }
}
