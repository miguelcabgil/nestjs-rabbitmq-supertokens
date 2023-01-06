import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Error as STError } from 'supertokens-node';
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { errorHandler } from 'supertokens-node/framework/express';

@Catch(STError)
export class SupertokensFilter implements ExceptionFilter {
  handler: ErrorRequestHandler;

  constructor() {
    this.handler = errorHandler();
  }

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const res = ctx.getResponse<Response>();
    if (res.headersSent) {
      return;
    }

    this.handler(
      exception,
      ctx.getRequest<Request>(),
      res,
      ctx.getNext<NextFunction>(),
    );
  }
}
