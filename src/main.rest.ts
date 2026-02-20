import { RestApplication } from './rest/index.js';
import { Logger, PinoLogger } from './shared/libs/logger/index.js';
import { Config, RestConfig, RestSchema } from './shared/libs/config/index.js';
import { Container } from 'inversify';
import { Component } from './shared/types/container.js';

async function bootstrap () {
  const container = new Container();
  container.bind<RestApplication>(Component.RestApplication).to(RestApplication);
  container.bind<Logger>(Component.Logger).to(PinoLogger);
  container.bind<Config<RestSchema>>(Component.Config).to(RestConfig);
  // const logger = new PinoLogger();
  // const config = new RestConfig(logger);
  const app = container.get<RestApplication>(Component.RestApplication);

  // const app = new RestApplication(logger, config);
  await app.init();
}

bootstrap();
