import { Pipe, PipeTransform } from '@angular/core';
import { SharedService } from './shared.service';

@Pipe({
  name: 'userNameFromId'
})
export class UserNameFromIdPipe implements PipeTransform {

  constructor(private shared: SharedService) {

  }

  transform(id: string): any {
    // const w = this.shared.users.map((users: any[]) => {
    //   if (users) {
    //     console.log(users);
    //     const user = users.find((user, i, a) => {
    //       return user.$key === id;
    //     });
    //     console.log('my user:');
    //     console.log(user);
    //     return user.displayName;
    //   }
    //   // return '';
    // })
    const w = this.shared.userByID(id).map((user: any) => {
      if (user) {
        return user.displayName;
      }
      // return '';
    });
    return w;
  }

}
