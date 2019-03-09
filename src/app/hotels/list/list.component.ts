import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Hotel from '../models/Hotel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() hotelsList: Hotel[];
  @Output() selectedHotel = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  selectHotel(selectedHotelId: number) {
    this.selectedHotel.emit(selectedHotelId);
  }

}
