import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { MapComponent } from './map/map.component';
import { MaterialModule } from '../material/material.module';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CardListComponent } from './card-list/card-list.component';
import { SitesComponent } from './sites/sites.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    MapComponent,
    SearchbarComponent,
    CardListComponent,
    SitesComponent,
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    MapComponent,
    SearchbarComponent,
    SitesComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, FlexLayoutModule],
})
export class ComponentModule {}
