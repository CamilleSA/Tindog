import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentIndex: number;
  results = [];
  avatars = [
    {
      name: 'Lucky',
      age: 8,
      image: '../../assets/1.jpeg',
      description: 'Preneur de risques. Aventurier.',
      location: 'Picardie',
      visible: true
    },
    {
      name: 'Jack',
      age: 5,
      image: '../../assets/2.jpeg',
      description: 'Musicien.',
      location: 'Alsace',
      visible: true
    },
    {
      name: 'Oscar',
      age: 7,
      image: '../../assets/3.jpeg',
      description: 'Ténébreux.',
      location: 'Lille',
      visible: true
    },
    {
      name: 'Max',
      age: 13,
      image: '../../assets/4.jpeg',
      description: 'Sportif.',
      location: 'Rhône-Alpes',
      visible: true
    },
    {
      name: 'Happy',
      age: 12,
      image: '../../assets/5.jpeg',
      description: 'Artiste incompris.',
      location: 'Essonne',
      visible: true
    },
    {
      name: 'Oslo',
      age: 4,
      image: '../../assets/6.jpeg',
      description: 'Bodybuilder.',
      location: 'Vosges',
      visible: true
    },
    {
      name: 'Einstein',
      age: 9,
      image: '../../assets/7.jpeg',
      description: 'Passionné de cinéma.',
      location: 'Limousin',
      visible: true
    },
    {
      name: 'Elvis',
      age: 7,
      image: '../../assets/8.jpeg',
      description: 'Preneur de risques. Aventurier.',
      location: 'Ile-de-France',
      visible: true
    }
  ]

  constructor() {
    this.currentIndex = this.avatars.length - 1;
    console.log(this.currentIndex);
  }

  swiped(event: any, index: number) {
    console.log(this.avatars[index].name + ' swiped ' + event);
    this.avatars[index].visible = false;
    this.results.push(this.avatars[index].name + ' swiped ' + event);
    this.currentIndex--;
  }

  swipeleft() {
    this.avatars[this.currentIndex].visible = false;
    this.results.push(this.avatars[this.currentIndex].name + ' swiped fail');
    this.currentIndex--;
  }

  swiperight() {
    this.avatars[this.currentIndex].visible = false;
    this.results.push(this.avatars[this.currentIndex].name + ' swiped like');
    this.currentIndex--;
  }

  reloadTindog() {
    location.reload();
  }

}
