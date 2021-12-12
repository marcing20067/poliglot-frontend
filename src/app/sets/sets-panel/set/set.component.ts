import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Set } from 'src/app/shared/models/set.model';
@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent {
  @Input() set!: Set;
  @Output() selectSet = new EventEmitter<Set>();
  @Output() deleteSet = new EventEmitter<Set>();

  onSelectSet(set: Set) {
    this.selectSet.emit(set);
  }

  onDeleteSet(set: Set) {
    this.deleteSet.emit(set);
  }

}
