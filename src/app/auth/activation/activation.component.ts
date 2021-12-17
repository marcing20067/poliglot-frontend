import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss'],
})
export class ActivationComponent implements OnInit {
  isLoading = true;
  activationSuccessfully = false;
  activationToken = '';
  
  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.activationToken = this.route.snapshot.params.activationToken;
  }

  ngOnInit(): void {
    this.authService
      .activation(this.activationToken)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.activationSuccessfully = true;
        },
        error: () => {
          this.isLoading = false;
        },
      });
  }
}
