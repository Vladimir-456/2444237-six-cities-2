import { config } from 'dotenv';
import { Logger } from '../logger/index.js';
import { Config } from './rest.config.interface.js';
import { restSchema, RestSchema } from './rest.config.schema.js';
import { inject, injectable } from 'inversify';
import { Component } from '../../types/container.js';

@injectable()
export class RestConfig implements Config<RestSchema> {
  private readonly config: RestSchema;

  constructor(
    @inject(Component.Logger) private readonly logger: Logger
  ) {
    const parsedOutput = config();

    if (parsedOutput.error) {
      throw new Error('Can\'t read .env file. Perhaps the file does not exists.');
    }

    restSchema.load({});
    restSchema.validate({allowed: 'strict'});

    this.config = restSchema.getProperties();
    this.logger.info('.env file found and successfully parsed!');
  }

  public get<T extends keyof RestSchema>(key: T): RestSchema[T] {
    return this.config[key];
  }
}
