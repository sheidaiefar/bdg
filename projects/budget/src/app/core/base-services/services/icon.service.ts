import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Icon} from '@app/core/base-services/contracts/icon.interface';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class IconService {
  private url = 'assets/icons/icon-list.json';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private http: HttpClient
  ) {
  }

  public registerIcons(): Observable<Icon[]> {
    return this.http.get<Icon[]>(this.url).pipe(
      tap((icons: Icon[]) => {
        icons.map((icon: Icon) => {
          this.matIconRegistry.addSvgIcon(
            icon.name,
            this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
          );
        });
      })
    );
  }
}
