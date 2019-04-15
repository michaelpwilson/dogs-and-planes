import { Component, OnInit }  from '@angular/core';
import { DogService }         from '../services/dog.service';
import { PlaneService }       from '../services/plane.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  dogs: any;
  planes: any;
  allItems: any;

  constructor(
    private dogService: DogService,
    private planeService: PlaneService
  ) { }

  ngOnInit() {
    /**
     * Get dogs and planes, then after mix them together for the "all" tab
     */
    Promise.all([this.getDogs(), this.getPlanes()]).then((data) => {
      this.allItems = this.shuffleArray(this.dogs.concat(this.planes));
    }).catch((data) => {
      console.log(data);
    });
  }
  /**
   * Returns a promise for getting all dogs.
   */
  getDogs() {
    return new Promise((resolve, reject) => {
      this.dogService.getAll().then((data) => {
        this.dogs = data;
        resolve(true);
      }).catch((error) => {
        reject(error);
      });
    });
  }
  /**
   * Returns a promise for getting all planes.
   */
  getPlanes() {
    return new Promise((resolve, reject) => {
      this.planeService.getAll().then((data) => {
        this.planes = data;
        resolve(true);
      }).catch((error) => {
        reject(error);
      });
    });
  }
  /**
   * Shuffles array in place.
   * @param {Array} array items An array containing the items.
   */
  private shuffleArray(array) {
    var j, x, i;

    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
  }
}
