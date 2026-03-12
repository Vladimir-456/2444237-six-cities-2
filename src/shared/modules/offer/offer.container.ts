import { Container } from 'inversify';
import { Component } from '../../types/container.js';
import { OfferServiceInterface } from './offer-service.interface.js';
import { OfferService } from './offer-service.js';
import { OfferEntity, OfferModel } from './offer.entity.js';
import { types } from '@typegoose/typegoose';

export function createOfferContainer () {
  const offerContainer = new Container();

  offerContainer.bind<OfferServiceInterface>(Component.OfferService).to(OfferService).inSingletonScope();
  offerContainer.bind<types.ModelType<OfferEntity>>(Component.OfferModel).toConstantValue(OfferModel);

  return offerContainer;
}
