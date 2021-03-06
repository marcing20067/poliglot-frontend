import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Form } from '../../shared/util/form';
import { SignupData } from './signup-data.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent extends Form<SignupData> implements OnDestroy {
  private formSub!: Subscription;
  constructor() {
    super();
  }

  ngOnInit() {
    this.formSub = this.form.valueChanges
      .pipe(
        distinctUntilChanged((prev, next) => {
          return (
            prev.repeatPassword === next.repeatPassword &&
            prev.password === next.password
          );
        })
      )
      .subscribe((value) => {
        const isSimilar = value.password === value.repeatPassword;
        this.form
          .get('repeatPassword')!
          .setErrors(isSimilar ? null : { similar: 'false' });
      });
  }

  ngOnDestroy() {
    this.formSub.unsubscribe();
  }
}
