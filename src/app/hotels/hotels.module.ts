import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NavComponent } from './nav/nav.component';
import { HotelFilterPipe } from './pipes/hotel-filter-pipe.pipe';

@NgModule({
  declarations: [
    ListComponent,
    WeatherComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    HotelsComponent,
    NavComponent,
    HotelFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [HotelsComponent]
})
export class HotelsModule { }
