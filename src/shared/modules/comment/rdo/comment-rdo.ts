import { Expose } from 'class-transformer';

export class CommentRDO {
  @Expose()
    text: string;

  @Expose()
    offerId!: string;

  @Expose()
    author!: string;

  @Expose()
    rating!: number;

  @Expose()
    date!: Date;
}
