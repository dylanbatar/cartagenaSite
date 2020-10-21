import { Component, Input, OnInit } from '@angular/core';
import { ISite } from 'src/app/interfaces/ISite';
import { sitesData } from '../../data/sites';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
})
export class SitesComponent implements OnInit {
  _sitesData: ISite[];

  @Input() set filter(str: string) {
    this._sitesData = sitesData.filter((item: ISite) =>
      item.name.toLowerCase().includes(str.toLowerCase())
    );
  }

  ngOnInit(): void {
    this._sitesData = sitesData;
  }
}
