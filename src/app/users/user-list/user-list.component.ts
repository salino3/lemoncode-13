import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { MemberEntity } from 'src/app/model/member-entity';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  members: MemberEntity[] = [];
  newMember: MemberEntity;
  selectedMember: MemberEntity | null = null;

  editForm: FormGroup;
  idControl: FormControl;
  loginControl: FormControl;
  avatarControl: FormControl;

  constructor(service: MembersService) {
    //* mala practica ->   const service = new MembersService();
    service
      .getAll()
      .subscribe((membersReponse) => (this.members = membersReponse));

    this.newMember = {
      id: '',
      login: '',
      avatar_url: '',
    };

    const member = {
      id: '11',
      login: 'Carlos',
      avatar_url: 'http...',
    };

    this.idControl = new FormControl(member.id, Validators.required);
    this.loginControl = new FormControl(member.login, [
      Validators.required,
      Validators.minLength(6),
    ]);
    this.avatarControl = new FormControl(member.avatar_url);

    this.editForm = new FormGroup({});
    this.editForm.addControl('id', this.idControl);
    this.editForm.addControl('login', this.loginControl);
    this.editForm.addControl('avatar_url', this.avatarControl);


    this.loginControl.valueChanges.subscribe(
      value => console.log(value)
    )
    // this.editForm.valid
    // this.editForm.errors
    // this.editForm.setValue(member2)
  }

  ngOnInit(): void {}

  sendData() {
    console.log(this.newMember);

    this.members = [...this.members];
    this.members.push(this.newMember);

    this.newMember = {
      id: '',
      login: '',
      avatar_url: '',
    };
  }

  // toCapitalLetters(text: string): string {
  //   return text.toUpperCase();
  // };

  select(member: MemberEntity) {
    this.selectedMember = member;
    this.editForm.patchValue(this.selectedMember);
  }
}
