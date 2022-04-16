import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed',
})
export class TimePassedPipe implements PipeTransform {
  transform(value: any): string {
    let dateCount: string = '';
    let today: any = new Date();
    let difference = Math.abs(value - today) / 1000;
    let days = Math.floor(difference / 86400); //60secs*60mins *24hrs in a day
    if (days > 0) {
      dateCount += Math.floor(days) + ' days';
      return dateCount;
    } else {
      Math.floor(days) == 0;
      return dateCount + '0 days';
    }
  }
}
