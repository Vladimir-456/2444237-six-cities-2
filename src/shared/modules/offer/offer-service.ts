import { inject, injectable } from 'inversify';
import { CreateOfferDto } from './dto/offer-dto.js';
import { OfferServiceInterface } from './offer-service.interface.js';
import { OfferEntity, OfferModel } from './offer.entity.js';
import { Component } from '../../types/container.js';
import { Logger } from '../../libs/logger/index.js';

@injectable()
export class OfferService implements OfferServiceInterface {
  constructor(
    @inject (Component.Logger) private readonly logger: Logger
  ) {}

  async createOffer(dto: CreateOfferDto): Promise<OfferEntity> {
    const result = await OfferModel.create(dto);
    this.logger.info(`Offer created: ${dto.title}`);
    return result;
  }

  async findOfferById(id: number): Promise<OfferEntity | null> {
    const result = await OfferModel.findById(id);
    this.logger.info(`Find offer by id: ${id}`);
    return result;
  }
}
