import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SimpleForm } from 'src/app/shared/util/simple-form';
import { ResetPasswordForm } from '../shared/reset-password-form';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
})
export class ResetPasswordFormComponent
  extends SimpleForm<ResetPasswordForm>
  implements OnInit, OnDestroy
{
  private formSub!: Subscription;

  constructor() {
    super();
  }

  ngOnInit() {
    this.formSub = this.form.valueChanges.subscribe((value) => {
      const isSimilar = value.newPassword === value.repeatNewPassword;
      this.form.controls.repeatNewPassword.setErrors(
        isSimilar ? null : { similar: 'false' }
      );
    });
  }

  ngOnDestroy() {
    this.formSub.unsubscribe();
  }
}
