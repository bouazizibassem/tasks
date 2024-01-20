import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsRoutingModule } from './cards-routing.module';
import { ListeCardComponent } from './components/liste-card/liste-card.component';
import { ListeAccordionComponent } from './components/liste-accordion/liste-accordion.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ListeCardComponent,
    ListeAccordionComponent,
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class CardsModule { }
