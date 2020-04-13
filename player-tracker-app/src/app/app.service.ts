import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Injectable()

export class AppService {
constructor(private injector: Injector) {}
initializeApp(): Promise<any> {
        return new Promise(((resolve, reject) => {
            this.injector.get(AuthService).isLogged()
                .toPromise()
                .then(res => {
                    resolve();
                })
        }))
    }
}
