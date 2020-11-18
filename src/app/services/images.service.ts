import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private appareils = [
    {
      id: "img1",
      alt: 'Image Une',
      src: 'assets/img/portfolio/1.jpg'
    },
    {
      id: "2",
      alt: 'Frigo',
      src: 'allumé'
    },
    {
      id: "3",
      alt: 'Ordinateur',
      src: 'éteint'
    }
  ];

  constructor() { }

  getImageById(id: string) {
      const image = this.appareils.find(
        (s) => {
          return s.id === id;
        }
      );
      return image;
  }
}
