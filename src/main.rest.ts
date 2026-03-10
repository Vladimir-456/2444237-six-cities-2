import { RestApplication } from './rest/index.js';
import { Container } from 'inversify';
import 'reflect-metadata';
import { Component } from './shared/types/container.js';
import { createRestContainer } from './rest/rest.container.js';
import { createUserContainer } from './shared/modules/user/user.container.js';
import { createOfferContainer } from './shared/modules/offer/offer.container.js';

async function bootstrap () {
  const appContainer = Container.merge(
    createRestContainer(),
    createUserContainer(),
    createOfferContainer()
  );

  const application = appContainer.get<RestApplication>(Component.RestApplication);
  await application.init();
}

bootstrap();
