import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapName'
})
export class MapNamePipe implements PipeTransform {

  transform(array: Array<Record<string, any>>, property: string = 'name'): Array<string> {
    return array.map((item)=>item[property]);
  }

}
