import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {

  imageSrc: string;

  constructor(private dogService: DogService) {
  }

  ngOnInit(): void {
    this.dogService.getDogImage().subscribe(imageUrl => {
      this.imageSrc = imageUrl;
    });
  }

}
