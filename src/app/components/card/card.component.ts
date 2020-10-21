import { Component, Input, OnInit } from '@angular/core';
import { ISite } from 'src/app/interfaces/ISite';
import { InfoSiteService } from 'src/app/service/info-site.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() site: ISite;
  constructor(private _siteS: InfoSiteService) {}

  ngOnInit(): void {}

  focusMarket(site: ISite): void {
    this._siteS.setSelectedSite(site);
  }
}
