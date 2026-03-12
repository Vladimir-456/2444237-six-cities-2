import { Amenity, City, HousingType } from '../../../types/offer.js';

export class CreateOfferDto {
  title!: string;
  description!: string;
  date!: Date;
  city!: City;
  imagePreview!: string;
  images!: string[];
  isPremium!: boolean;
  isFavorite!: boolean;
  rating!: number;
  type!: HousingType;
  bedrooms!: number;
  maxAdults!: number;
  price!: number;
  goods!: Amenity[];
  host!: string;
  commentsCount!: number;
  location!: { latitude: number; longitude: number };
}
