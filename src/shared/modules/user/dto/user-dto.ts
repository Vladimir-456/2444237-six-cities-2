import {
  IsBoolean,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserDTOValidationMessage } from './user-dto.messages.js';

export class CreateUserDto {
  @MinLength(1, { message: UserDTOValidationMessage.name.min })
  @MaxLength(15, { message: UserDTOValidationMessage.name.max })
  public name: string;

  @IsEmail({}, { message: UserDTOValidationMessage.email.isEmail })
  public email: string;

  @IsString({ message: UserDTOValidationMessage.avatar.isString })
  public avatar: string;

  @MinLength(6, { message: UserDTOValidationMessage.password.min })
  @MaxLength(12, { message: UserDTOValidationMessage.password.max })
  public password: string;

  @IsBoolean({ message: UserDTOValidationMessage.isPro.isBoolean })
  public isPro: boolean;
}

export class LoginUserDTO {
  @IsEmail({}, { message: UserDTOValidationMessage.email.isEmail })
  public email: string;

  @MinLength(6, { message: UserDTOValidationMessage.password.min })
  @MaxLength(12, { message: UserDTOValidationMessage.password.max })
  public password: string;
}
