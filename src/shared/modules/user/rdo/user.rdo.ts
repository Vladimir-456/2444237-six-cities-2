import { Expose } from 'class-transformer';

export class UserRDO {
  @Expose()
    name: string;

  @Expose()
    email: string;

  @Expose()
    avatar: string;

  @Expose()
    isPro: boolean;

  @Expose()
    favorites: string[];
}

export class UserFavoriteOfferRDO {
  @Expose()
    title: string;

  @Expose()
    date: Date;

  @Expose()
    city: string;

  @Expose()
    type: string;

  @Expose()
    price: number;

  @Expose()
    isFavorite: boolean;

  @Expose()
    imagePreview: string;

  @Expose()
    isPremium: boolean;

  @Expose()
    rating: number;

  @Expose()
    commentsCount: number;
}

export class LoggedUserRDO {
  @Expose()
  public email: string;

  @Expose()
  public token: string;
}
