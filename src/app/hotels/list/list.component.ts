import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHotel } from '../models/Hotel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() public hotelsList: IHotel[];
  @Output() public selectedHotel: EventEmitter < number > = new EventEmitter < number > ();

  public selectHotel(selectedHotelId: number): void {
    this.selectedHotel.emit(selectedHotelId);
  }

}
