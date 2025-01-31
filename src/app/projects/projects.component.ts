import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: false,
  
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [
    trigger('hoverEffect', [
      state('normal', style({
        transform: 'scale(1)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      })),
      state('hovered', style({
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
      })),
      transition('normal <=> hovered', animate('300ms ease-in-out'))
    ])
  ]
})
export class ProjectsComponent {
  hoverState = 'normal';

  setProjectDescription(content: string): string {
    return content.length >= 60 ? content : content.padEnd(60, ' ');
  }
  cards = [
    {
      title: 'Quick Heal',
      content: this.setProjectDescription('Developed custom modules for subscriptions, order processing, and renewals. Enhanced SEO with W3 Speedster and added lead capture features. Built reactive forms for validation and designed interfaces with Bootstrap & Material Design. Utilized MySQL for data storage and deployed on AWS S3.'),
      image: 'assets/images/quickheal.png',
      link: "https://www.quickheal.co.in/",
      technology: ['Magento2', 'PHP', 'Mysql', 'Angular', 'TypeScript', 'Material Design', 'Rest Api']
    },
    {
      title: 'Maripak USA',
      content: this.setProjectDescription('Managed data migration for Magento 2 with multi-store functionality. Developed REST/SOAP APIs and shared collections with clients. Implemented form validation with JavaScript and layouts via XML. Designed interfaces using Bootstrap and migrated data with MySQL.'),
      image: 'assets/images/maripak.png',
      link: "https://www.maripakusa.com/",
      technology: ['Magento2', 'PHP', 'Mysql', 'Bootstrap', 'Soap Api', 'Rest Api', 'Data Migration']
    },
    {
      title: 'Machine Parts Toolbox',
      content: this.setProjectDescription('Managed data migration for Magento 2 with multi-store functionality. Developed REST/SOAP APIs and shared collections with clients. Implemented form validation with JavaScript and layouts via XML. Designed interfaces using Bootstrap and migrated data with MySQL.'),
      image: 'assets/images/machineparts.png',
      link: "https://www.machinepartstoolbox.com/",
      technology: ['Magento2', 'PHP', 'Mysql', 'Bootstrap', 'Soap Api', 'Rest Api', 'Data Migration']
    },   
    {
      title: 'Machine Gorilla',
      content: this.setProjectDescription('Managed data migration for Magento 2 with multi-store functionality. Developed REST/SOAP APIs and shared collections with clients. Implemented form validation with JavaScript and layouts via XML. Designed interfaces using Bootstrap and migrated data with MySQL.'),
      image: 'assets/images/machinegorila.png',
      link: "https://www.machinegorilla.com/",
      technology: ['Magento2', 'PHP', 'Mysql', 'Bootstrap', 'Soap Api', 'Rest Api', 'Data Migration'],
    },
    {
      title: 'Packaging Chimp',
      content: this.setProjectDescription('Focused on client-specific requirements and developed modules for various projects. Created REST APIs and shared API collections with clients.'),
      image: 'assets/images/chimpack.png',
      link: "https://www.packagingchimp.co.uk/",
      technology: ['Magento2', 'PHP', 'Mysql', 'Angular', 'Typescript']
    },
    {
      title: 'Sawai Foods',
      content: this.setProjectDescription('Worked on form validation using reactive forms and implemented components, services, pipes, and directives. Designed front-end interfaces using Bootstrap.'),
      image: 'assets/images/swaifoods.png',
      link: "https://sawaifoods.com/",
      technology: ['Magento2', 'PHP', 'Mysql', 'Angular', 'Typescript']
    }
  ];
}
