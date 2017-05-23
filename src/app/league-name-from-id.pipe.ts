import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leagueNameFromId'
})
export class LeagueNameFromIdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
