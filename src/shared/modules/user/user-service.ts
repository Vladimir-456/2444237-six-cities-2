import { DocumentType } from '@typegoose/typegoose';
import { CreateUserDto } from './dto/user-dto.js';
import { UserServiceInterface } from './user-service.interface.js';
import { UserEntity, UserModel } from './user.entity.js';
import { inject, injectable } from 'inversify';
import { Component } from '../../types/container.js';
import { Logger } from '../../libs/logger/index.js';

@injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger
  ) {}

  async register(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>> {
    const user = new UserEntity(dto);
    user.setPassword(dto.password, salt);

    const result = await UserModel.create(user);
    this.logger.info(`User created: ${user.email}`);

    return result;
  }

  async findByEmail(email: string): Promise<DocumentType<UserEntity> | null> {
    const result = await UserModel.findOne({ email });
    this.logger.info(`Find user by email: ${email}`);
    return result;
  }

  async findById(id: number): Promise<DocumentType<UserEntity> | null> {
    const result = await UserModel.findById(id);
    this.logger.info(`Find user by id: ${id}`);
    return result;
  }
}
