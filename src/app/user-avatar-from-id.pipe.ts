import { Pipe, PipeTransform } from '@angular/core';
import { SharedService } from './shared.service';

@Pipe({
  name: 'userAvatarFromId'
})
export class UserAvatarFromIdPipe implements PipeTransform {

  constructor(private shared: SharedService) {

  }

  transform(id: string): any {

    const w = this.shared.userByID(id).map((user: any) => {
      if (user) {
        return user.photoURL;
      }
      // return 'http://i.imgur.com/7unwhF0.jpg'; 
    });
    return w;
  }

}
