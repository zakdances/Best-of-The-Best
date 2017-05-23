import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leagueAvatarFromId'
})
export class LeagueAvatarFromIdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
