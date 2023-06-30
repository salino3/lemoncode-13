import { Pipe, PipeTransform } from '@angular/core';
import { MemberEntity } from '../model/member-entity';
import { MembersService } from '../services/members.service';

@Pipe({
  name: 'filterByLogin',
  // pure: false
})
export class FilterByLoginPipe implements PipeTransform {

  // constructor(private authService: AuthService) {}

  transform(items: MemberEntity[], value: string): MemberEntity[] {

    return items.filter((member: MemberEntity) => member.login.includes(value));
  }
}
