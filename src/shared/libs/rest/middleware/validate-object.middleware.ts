import { Request, Response, NextFunction } from 'express';
import { Middleware } from './middleware.interface.js';
import { validate } from 'class-validator';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { StatusCodes } from 'http-status-codes';

export class ValidateDTOMiddleware implements Middleware {
  constructor(private dto: ClassConstructor<object>) {}

  public async execute(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const dtoInstance = plainToInstance(this.dto, req.body);
    const errors = await validate(dtoInstance);

    if (errors.length > 0) {
      res.status(StatusCodes.BAD_REQUEST).send(errors);
      return;
    }

    next();
  }
}
