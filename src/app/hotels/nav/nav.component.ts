import { Component, EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Output() public stars: EventEmitter<number[]> = new EventEmitter<number[]>();
  public rating: number[] = [];

  public filterRating(stars: number): void {
    if (stars === 0) {
      this.rating = [];
      this.stars.emit(this.rating);
      return;
    }
    const index: number = this.rating.indexOf(stars);
    if (index > -1) {
      this.rating.splice(index, 1);
    } else {
      this.rating.push(stars);
    }
    this.stars.emit(this.rating);
  }
}
