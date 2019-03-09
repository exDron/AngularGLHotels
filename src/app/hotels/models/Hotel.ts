import Weather from './Weather';
import Profile from './Profile';

export default class Hotel {
    public id: number;
    public title: string;
    public address: string;
    public description: string;
    public phone: string;
    public picture: string;
    public photos: string[];
    public weather: Weather;
    public profile: Profile;
    public stars: number;
}