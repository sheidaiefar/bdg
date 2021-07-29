import {Component} from '@angular/core';
import {IconService} from './core/base-services/services/icon.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'nicico-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public visibility = false
  title = 'budget';

  constructor(private translate: TranslateService,
              private iconService: IconService) {
    this.iconService.registerIcons().subscribe(res => {
      this.visibility = true;
    });
    this.translate.addLangs(['fa']);
    this.translate.setDefaultLang('fa');
    const browserLang = translate.getBrowserLang();
    this.translate.use(browserLang.match(/fa/) ? browserLang : 'fa');
  }
}
