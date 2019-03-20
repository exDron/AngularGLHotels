import {
  Pipe,
  PipeTransform
} from '@angular/core';
import {
  IHotel
} from '../models/Hotel';
import { FilterService } from '../services/filter.service';

@Pipe({
  name: 'hotelFilterPipe'
})
export class HotelFilterPipe implements PipeTransform {

  public constructor(private filterService: FilterService) {

  }

  public transform(hotels: IHotel[], search ?: string, stars?: number[]): IHotel[] | [] {
    if (search) {
      hotels = this.filterBySearch(hotels, search);
    }
    if (stars !== undefined && stars.length !== 0) {
      hotels = this.filterByRating(hotels, stars);
    }

    return hotels;
  }

  private filterBySearch(hotels: IHotel[], search: string): IHotel[] {
    return  hotels.filter((hotel: IHotel) => {
      return hotel.title.toLowerCase().includes(search.toLowerCase()) ||
        hotel.description.toLocaleLowerCase().includes(search.toLowerCase());
    });
  }

  private filterByRating(hotels: IHotel[], rating: number[]): IHotel[] {
    hotels = hotels.filter((hotel: IHotel) => {
      return rating.includes(hotel.stars);
    });

    return hotels;
  }

}
