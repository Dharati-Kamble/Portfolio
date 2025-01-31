import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  standalone: false,  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit{
 // Get a reference to the MatSidenav component
 @ViewChild('sidenav') sidenav!: MatSidenav;

 ngAfterViewInit() {
   console.log('Sidenav initialized:', this.sidenav);
 }

 toggleSidenav() {
   if (this.sidenav) {
     this.sidenav.toggle(); // Correctly toggles the sidenav
   } else {
     console.error('Sidenav is not initialized!');
   }
 }

 onSidenavClose() {
   console.log('Sidenav closed');
 }
 scrollToWork(): void {
  const workSection = document.getElementById('work-section');
  if (workSection) {
    workSection.scrollIntoView({ behavior: 'smooth' });
  }
}
scrollToAbout(): void {
  const aboutSection = document.getElementById('aboutus');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
}

}
