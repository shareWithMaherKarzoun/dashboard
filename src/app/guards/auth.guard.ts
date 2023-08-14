import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) => {
        const svc: UserService  =   inject(UserService);
       
        if(!svc.isLoggedIn){
            const router  =   inject(Router);
            router.navigate(['login']);
            return false;
         };

         return true;
}