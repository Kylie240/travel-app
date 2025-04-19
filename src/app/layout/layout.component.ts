import { Component } from '@angular/core';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { NavbarComponent } from "../components/navbar/navbar/navbar.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-layout',
  imports: [HomepageComponent, NavbarComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
