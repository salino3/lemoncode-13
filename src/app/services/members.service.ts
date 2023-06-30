import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemberEntity } from '../model/member-entity';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MembersService {

  members: MemberEntity[] | null = null;

  constructor(private http: HttpClient) { }


   getAll (): Observable<MemberEntity[]> {

    if(this.members !== null) {
    return  of(this.members)
    }

   return this.http.get<MemberEntity[]>(`https://api.github.com/orgs/lemoncode/members`);

  // return fetch(`https://api.github.com/orgs/lemoncode/members`)
  //       .then((response) => response.json())
  //       .then((response) => {
  //         this.members = response;
  //         return response;
  //       });

  }
}
