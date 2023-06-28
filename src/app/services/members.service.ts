import { Injectable } from '@angular/core';
import { MemberEntity } from '../model/member-entity';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})

export class MembersService {

  members: MemberEntity[] | null = null;

  constructor() { }


  async getAll (): Promise<MemberEntity[]> {

    if(this.members !== null) {
    return await Promise.resolve(this.members)
    }


  return fetch(`https://api.github.com/orgs/lemoncode/members`)
        .then((response) => response.json())
        .then((response) => {
          this.members = response;
          return response;
        });

  }
}
