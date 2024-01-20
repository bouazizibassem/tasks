import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeAccordionComponent } from './components/liste-accordion/liste-accordion.component';
import { ListeCardComponent } from './components/liste-card/liste-card.component';

const routes: Routes = [
   { path: 'liste-card', component: ListeCardComponent },
   { path: 'liste-accordion', component: ListeAccordionComponent },
  
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class CardsRoutingModule { }