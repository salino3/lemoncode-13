import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MemberEntity } from 'src/app/model/member-entity';
import { MembersService } from 'src/app/services/members.service';

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

  members: MemberEntity[] = [];

  constructor(service: MembersService) {
    // setTimeout(() => {
    //   this.name = 'Maria';
    // }, 3000);

    service
      .getAll()
      .subscribe((membersResponse) => (this.members = membersResponse));
  }

  ngOnInit(): void {}

  changeName() {
    this.name = 'Francisco';
    this.clickEnLupa.emit(this.name);
  }


}
