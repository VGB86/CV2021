import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo($event){
    console.log('adentro del evento');
    
    const section = document.querySelector($event.target.hash)
    console.log(section);
    section.scrollIntoView({ behavior: 'smooth', block: "center", inline: 'nearest'})
  }
}
