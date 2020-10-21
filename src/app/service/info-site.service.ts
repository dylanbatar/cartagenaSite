import { Injectable } from '@angular/core';
import { ISite } from '../interfaces/ISite';
import { sitesData } from '../data/sites';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoSiteService {
  private $site: Subject<ISite> = new Subject();

  setSelectedSite(site: ISite): void {
    const [siteR] = sitesData.filter((_site) => _site.id === site.id);
    this.$site.next(siteR);
  }

  getSelectedSite(): Subject<ISite> {
    return this.$site;
  }
}
