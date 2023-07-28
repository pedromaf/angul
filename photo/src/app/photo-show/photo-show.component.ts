import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';
import { ImageResponse } from 'src/interfaces/image';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent {
  photo: ImageResponse | null = null;

  constructor(private photoService: PhotosService) {
    this.fetchImage();
  }

  getRandomPhoto() {
    this.fetchImage()
  }

  fetchImage() {
    this.photoService.getRandomPhoto().subscribe((value) => {
      this.photo = value;
    })
  }
}
