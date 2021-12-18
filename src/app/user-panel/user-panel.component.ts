import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { UserStatus } from '../shared/models/userStatus.model';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  isLoading = true;
  userStatus!: UserStatus;
  showPopup = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.userStatus().pipe(take(1)).subscribe((status) => {
      this.userStatus = status;
      this.isLoading = false;
    });
  }

  onReset(mode: 'username' | 'password') {
    this.isLoading = true;
    this.authService.reset(mode, this.userStatus.username).pipe(take(1)).subscribe(() => {
      this.isLoading = false;
      this.showPopup = true;
    });
  }

  onClose() {
    this.router.navigate(['/auth/login']);
  }

}
