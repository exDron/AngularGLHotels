import {
  Pipe,
  PipeTransform
} from '@angular/core';
import {
  IHotel
} from '../models/Hotel';

@Pipe({
  name: 'hotelFilterPipe'
})
export class HotelFilterPipe implements PipeTransform {

  public transform(hotels: IHotel[], search ?: string): IHotel[] | [] {
    if (search) {
      hotels = hotels.filter((hotel: IHotel) => {
        return hotel.title.toLowerCase().includes(search.toLowerCase()) ||
          hotel.description.toLocaleLowerCase().includes(search.toLowerCase());
      });
    }
    return hotels;
  }

}
