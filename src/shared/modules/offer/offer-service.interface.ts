import { CreateOfferDto } from './dto/offer-dto.js';
import { OfferEntity } from './offer.entity.js';

export interface OfferServiceInterface {
  createOffer (dto: CreateOfferDto): Promise<OfferEntity>
  findOfferById (id: number): Promise<OfferEntity | null>
}
