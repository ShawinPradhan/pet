import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pet';

  constructor(private router: Router){}

  donatePage()
  {
    this.router.navigate(['/donate']);
  }
}
