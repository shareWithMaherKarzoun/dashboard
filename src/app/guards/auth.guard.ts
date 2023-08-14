import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../services/user.service';

export const UserLoggedInGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const svc: UserService = inject(UserService);

  if (!svc.isLoggedIn) {
    const router = inject(Router);
    router.navigate(['login']);
    return false;
  }

  return true;
};

export const UserLoggedOutGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const svc: UserService = inject(UserService);

  if (svc.isLoggedIn) {
    const router = inject(Router);
    router.navigate(['auth']);
    return false;
  }

  return true;
};
