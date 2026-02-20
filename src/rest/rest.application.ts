
import { inject, injectable } from 'inversify';
import { Config, RestSchema } from '../shared/libs/config/index.js';
import { Logger } from '../shared/libs/logger/logger.interface.js';
import { Component } from '../shared/types/container.js';

@injectable()
export class RestApplication {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<RestSchema>
  ) {}

  public async init () {
    this.logger.info('Application initialization');
    this.logger.info(`GET value from env $PORT: ${this.config.get('PORT')}`);
  }
}
