import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonicModule]
})
export class HomePage {
  constructor(private router: Router) {}

  // Navega a la página de lista
  navigateTopage1(): void {
    this.router.navigate(['/page1']);
  }

 
}
