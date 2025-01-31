import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main',
  standalone: false,  
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class MainComponent {
  isLoaded = false;

  setProjectDescription(description: string): string {
    return description.length >= 10 ? description : description.padEnd(10, ' ');
  }
  projects = [
    {
      title: 'Quick Heal',
      description: this.setProjectDescription('Developed custom modules for subscription services, order processing, and renewals.'),
      image: 'assets/images/quickheal.png',
      link: "https://www.quickheal.co.in/",
    },
    {
      title: 'Maripak USA',
      description: this.setProjectDescription('Shrink Wrapping & Packaging Machines and Equipment For Sale'),
      image: 'assets/images/maripak.png',
      link: "https://www.maripakusa.com/",
    },
    {
      title: 'Machine Parts Toolbox',
      description: this.setProjectDescription('Packaging Machines Parts E-commerce'),
      image: 'assets/images/machineparts.png',
      link: "https://www.machinepartstoolbox.com/",
    },   
    {
      title: 'Machine Gorilla',
      description: 'Machine Gorilla is laser focused on best in class packaging machinery and equipment.',
      image: 'assets/images/machinegorila.png',
      link: "https://www.machinegorilla.com/",
    },
    {
      title: 'Packaging Chimp',
      description: this.setProjectDescription('Wholesale Packaging Material Supplier - Packaging Chimp'),
      image: 'assets/images/chimpack.png',
      link: "https://www.packagingchimp.co.uk/",
    },
    {
      title: 'Sawai Foods',
      description: this.setProjectDescription('Designed front-end interfaces using Bootstrap'),
      image: 'assets/images/swaifoods.png',
      link: "https://sawaifoods.com/",
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }

  scrollToWork(): void {
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  onContactUsClick() {
    // You can route to the contact section or open a contact form
    alert("Redirecting to the contact page...");
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume/Dharati_Kamble_Resume.pdf'; // Path to the resume file
    link.download = 'Dharati_Kamble_Resume.pdf'; // File name for the downloaded file
    link.click();
  }
}
