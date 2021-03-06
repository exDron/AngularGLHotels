import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import  { IHotel } from '../models/Hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  public hotels: IHotel[] = [
    {
      id: 0,
      title: 'Universal Cabana',
      address: 'Orlando',
      description: 'Best one!',
      phone: '+3242353434',
      picture: 'assets/images/1.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: 12,
        wind: 11,
        icon: 'sun'
      },
      profile: {
        followers: 112,
        following: 11,
        photo: 'assets/images/b1.jpg'
      },
      stars: 3
    },
    {
      id: 1,
      title: 'Kharkov plaza',
      address: 'Kharkov',
      description: 'Five Stars',
      phone: '+3242353434',
      picture: 'assets/images/2.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: 5,
        wind: 4,
        icon: 'rain'
      },
      profile: {
        followers: 12,
        following: 111,
        photo: 'assets/images/b2.jpg'
      },
      stars: 4
    },
    {
      id: 2,
      title: 'Hotel name',
      address: 'Orlando',
      description: 'Lorem ipson0',
      phone: '+3242353434',
      picture: 'assets/images/3.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: -2,
        wind: 2,
        icon: 'cloud'
      },
      profile: {
        followers: 45,
        following: 78,
        photo: 'assets/images/b3.jpg'
      },
      stars: 5
    }
  ];

  public selectedHotel: IHotel;

  public searchHotel: string;

  public stars: number[];

  public constructor(private cd: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    this.selectedHotel = this.hotels[0];
  }

  public selectHotel(selectedHostelId: number): void {
      const selectedHotel: IHotel = this.hotels.filter((hostel: IHotel) => {
        return hostel.id === selectedHostelId;
      })[0];

      this.selectedHotel = selectedHotel;
  }

  public searchChanged(event: KeyboardEvent): void {
    this.searchHotel = (event.target as HTMLInputElement).value;
  }

  public starsChanged(event: number[]): void {
    this.stars = event.slice(0);
  }
}
