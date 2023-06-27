import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { MemberEntity } from 'src/app/model/member-entity';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  members: MemberEntity[] = [];

  constructor(service: MembersService) {
    //* mala practica ->   const service = new MembersService();
    service.getAll().then((membersReponse) => (this.members = membersReponse));
  }

  ngOnInit(): void {}
}
