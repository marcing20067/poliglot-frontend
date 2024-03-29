import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetsRoutingModule } from './sets-routing.module';
import { SetsCreateComponent } from './sets-create/sets-create.component';
import { SetsLearnComponent } from './sets-learn/sets-learn.component';
import { SetsPanelComponent } from './sets-panel/sets-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SetComponent } from './sets-panel/set/set.component';
import { SetViewComponent } from './sets-panel/set-view/set-view.component';
import { CardComponent } from './sets-learn/card/card.component';
import { StatsComponent } from './sets-learn/stats/stats.component';
import { CardsComponent } from './sets-learn/cards/cards.component';
import { InstructionComponent } from './sets-learn/instrucion/instruction.component';
import { SetsCreateFormComponent } from './sets-create/sets-create-form/sets-create-form.component';

@NgModule({
  declarations: [
    SetsCreateComponent,
    SetsCreateFormComponent,
    SetsLearnComponent,
    SetsPanelComponent,
    SetComponent,
    SetViewComponent,
    CardComponent,
    StatsComponent,
    CardsComponent,
    InstructionComponent,
  ],
  imports: [CommonModule, SetsRoutingModule, ReactiveFormsModule, SharedModule],
})
export class SetsModule {}
