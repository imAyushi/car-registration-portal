import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string,) {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const cars = []
    for (const car of value) {
      if (car.brand.trim().toLowerCase() === filterString.toLowerCase() || car.model.trim().toLowerCase() === filterString.toLowerCase() || car.color.trim().toLowerCase() === filterString.toLowerCase() || car.shift.trim().toLowerCase() === filterString.toLowerCase() || car.year.trim().toLowerCase() === filterString.toLowerCase()) {
        cars.push(car)
      }
    }
    return cars
  }

}
