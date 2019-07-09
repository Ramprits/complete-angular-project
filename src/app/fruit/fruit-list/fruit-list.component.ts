import { Component, OnInit } from '@angular/core';

import { FruitService } from '../fruit.service';
@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {
  fruits: any[];
  constructor(private fs: FruitService) { }

  ngOnInit() {
    this.fs.getFruits().subscribe(fruit => console.log(this.fruits = fruit))
  }

}