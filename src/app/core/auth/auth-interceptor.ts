import { HttpInterceptorFn } from '@angular/common/http';
import { JWT_TOKEN_KEY } from '../constants/app.constants';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(JWT_TOKEN_KEY);

  if (!token) {
    return next(req);
  }

  const clonedRequest = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });

  return next(clonedRequest);
};
