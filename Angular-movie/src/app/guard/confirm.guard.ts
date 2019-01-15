import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { movieformComponent } from '../movie/movieform/movieform.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<movieformComponent> {
  canDeactivate(component:movieformComponent) {
    if(component.saved) {
      return true;
    } else {
      return window.confirm("Are your sure you wanna leave?")
    }
  }
}
