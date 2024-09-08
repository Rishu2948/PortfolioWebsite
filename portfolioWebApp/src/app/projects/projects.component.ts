
import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Access Management System For Operations team\'s Dashboard',
      description: 'Implemented an Access Management System allowing administrators to search, edit, create, and delete dashboard users and their permissions directly through the interface, eliminating reliance on manual database updates by the engineering team.'
    },
    {
      name: 'Face Recognition Fraud Detection system',
      description: 'Pioneered a cutting-edge Face Recognition fraud detection system using Amazon Rekognition, significantly boosting fraud detection accuracy and reducing NPA losses by up to 25 lakhs per month.'
    },
    {
      name: 'Automated Loan Distribution System for Operations Team',
      description: 'Streamlined the loan distribution process by automating loan request allocation among reviewer/agents from various teams. This strategic allocation ensures equitable distribution of loan types (Likely to be approved, Likely to be rejected), resulting in a remarkable 15-20% efficiency improvement per staff member and substantial time savings, eliminating 2.5 to 3.0 hours of manual allocation daily.'
    },
    {
      name: 'Mandate Presentation Improvisation',
      description: 'Revamped the mandate presentation system, drastically reducing the time required for presenting mandates (Automatic collection of EMI\'s) from 12-16 hours to under 1 hour.'
    },
    {
      name: 'Loan Application Management System Redesign',
      description: 'Led redesign of loan application interface, consolidating multi-window system into single, intuitive dashboard. Improved efficiency of loan review process, reducing assessment time by 80% and enhancing decision accuracy. Integrated with Penny Transfer, data editing with parallel document view and other new features.'
    }
  ];
}