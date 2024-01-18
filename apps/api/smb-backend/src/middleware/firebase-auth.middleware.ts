import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).send('Unauthorized');
    } else {
      admin
        .auth()
        .verifyIdToken(token)
        .then((decodedToken) => {
          req['user'] = decodedToken;
          req['userId'] = decodedToken.uid;
          next();
        })
        .catch(() => {
          return this.respondUnauthorized(res);
        });
    }
  }

  private respondUnauthorized(res: Response) {
    return res.status(401).json({
      statusCode: 401,
      message: 'Unauthorized',
    });
  }
}
