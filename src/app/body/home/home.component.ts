import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadResumePDF() {
    const link = document.createElement('a');
    link.target = '_blank'; // Open in a new tab
    link.href = 'https://spence3033.github.io/portfolio/assets/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
