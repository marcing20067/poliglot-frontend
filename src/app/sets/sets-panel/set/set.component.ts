import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Set } from '../../shared/models/set.model';
@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss'],
})
export class SetComponent {
  @Input() set!: Set;
  @Output() private selectSet = new EventEmitter<Set>();
  @Output() private deleteSet = new EventEmitter<Set>();

  onSelectSet(set: Set) {
    this.selectSet.emit(set);
  }

  onDeleteSet(set: Set) {
    this.deleteSet.emit(set);
  }
}
