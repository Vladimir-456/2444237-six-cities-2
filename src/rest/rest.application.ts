
import { inject, injectable } from 'inversify';
import { Config, RestSchema } from '../shared/libs/config/index.js';
import { Logger } from '../shared/libs/logger/logger.interface.js';
import { Component } from '../shared/types/container.js';
import { DatabaseClient } from '../shared/libs/database-client/index.js';
import { getMongoUri } from '../shared/helpers/database-client.js';
import { UserServiceInterface } from '../shared/modules/user/user-service.interface.js';

@injectable()
export class RestApplication {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<RestSchema>,
    @inject(Component.DatabaseClient) private readonly databaseClient: DatabaseClient,
    @inject(Component.UserService) private readonly userService: UserServiceInterface
  ) {}

  private async _initDB() {
    const mongoURI = getMongoUri(this.config.get('DB_USER'), this.config.get('DB_PASSWORD'), this.config.get('DB_HOST'), this.config.get('DB_PORT'), this.config.get('DB_NAME'));

    return this.databaseClient.connect(mongoURI);
  }

  public async init () {
    this.logger.info('Application initialization');
    this.logger.info(`GET value from env $PORT: ${this.config.get('PORT')}`);

    this.logger.info('Database initialization');
    await this._initDB();
    this.logger.info('Init database completed');

    const newUser = await this.userService.register({
      name: 'Anna de Vries',
      email: 'anna.de.vries@example.com',
      avatar: 'https://example.com/avatars/anna.webp',
      password: 'secret123',
      isPro: true
    }, 'salt');

    // const user = await UserModel.create({
    //   name: 'Sophie Martin',
    //   email: 'sophie.martin@example.com',
    //   avatar: 'https://example.com/avatars/sophie.webp',
    //   password: 'password123',
    //   isPro: true,
    // });
    // const offer = await OfferModel.create({
    //   title: 'Modern loft near Cologne Cathedral',
    //   description: 'Spacious loft with industrial design and fast Wi-Fi, ideal for digital nomads.',
    //   date: new Date('2026-03-01'),
    //   city: 'Cologne',
    //   imagePreview: 'https://example.com/images/cologne-preview.webp',
    //   images: [
    //     'https://example.com/images/cologne1.webp',
    //     'https://example.com/images/cologne2.webp'
    //   ],
    //   isPremium: false,
    //   isFavorite: false,
    //   rating: 4.3,
    //   type: 'apartment',
    //   bedrooms: 1,
    //   maxAdults: 2,
    //   price: 120,
    //   goods: ['Laptop friendly workspace', 'Washer', 'Towels'],
    //   host: user.id,
    //   commentsCount: 9,
    //   location: {
    //     latitude: 50.9375,
    //     longitude: 6.9603
    //   }
    // });

    console.log(newUser);
  }
}
