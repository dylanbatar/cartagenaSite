import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { ISite } from 'src/app/interfaces/ISite';
import { InfoSiteService } from 'src/app/service/info-site.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterContentInit {
  iconMap: L.Icon;
  lastMarker: L.Marker;
  myMap: L.Map;
  popup: L.Popup;

  constructor(private _siteS: InfoSiteService) {}

  ngAfterContentInit() {
    this.myMap = L.map('map-container', {
      center: [10.419441, -75.525695],
      zoom: 13,
    });
    this.myMap.invalidateSize();
    this.configMap();
    this._siteS.getSelectedSite().subscribe((site) => {
      this.createMarker(site);
      this.createPopup(site);
    });
  }

  configMap(): void {
    L.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${environment.mapApi}`,
      {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: environment.mapApi,
      }
    ).addTo(this.myMap);
    this.iconMap = L.icon({
      iconUrl: 'assets/icon-location.svg',
      iconSize: [40, 50],
    });
  }

  createMarker({ lat, lng }: ISite): void {
    this.deleteMarker();
    this.lastMarker = L.marker([lat, lng], { icon: this.iconMap });
    this.lastMarker.addTo(this.myMap);
    this.myMap.panTo([lat, lng]);
  }

  createPopup(site: ISite): void {
    this.popup = L.popup({ className: 'thumb', maxWidth: 330 })
      .setLatLng([site.lat, site.lng])
      .setContent(this.templatePopup(site))
      .openOn(this.myMap);
  }

  deleteMarker(): void {
    if (!this.lastMarker) return;
    console.log(this.lastMarker.remove());
  }

  templatePopup({ desc, image }: ISite): string {
    return `
      <p>${desc}</p>
      <div class="thumb">
        ${image.map((img) => `<img src=${img.image}>`)} 
      </div>
    `;
  }
}
