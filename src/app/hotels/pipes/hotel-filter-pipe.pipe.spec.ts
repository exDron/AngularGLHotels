import { HotelFilterPipe } from './hotel-filter-pipe.pipe';

describe('HotelFilterPipePipe', () => {
  it('create an instance', () => {
    const pipe: HotelFilterPipe = new HotelFilterPipe('test');
    expect(pipe).toBeTruthy();
  });
});
