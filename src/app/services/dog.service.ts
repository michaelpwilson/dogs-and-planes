import { Injectable }	from '@angular/core';
import { HttpClient }	from '@angular/common/http';

@Injectable()
export class DogService {
    /**
     * Used for creating a sample dog
     */
    sampleDog: any = {
        id: 4,
        name: "Terry",
        image: "http://localhost:4200/assets/images/dog-8.jpg"
    };

  	constructor (
		private http: HttpClient
    ) {}

    /**
     * Creates 20 sample dogs
     */
    private createSampleDogs() {
        var foundDogs = [];

        for(var i = 0; i < 20; i++) {
            foundDogs.push(this.sampleDog);
        }

        return foundDogs;
    }
    /**
     * Gets all sample dogs 
     */
    getAll() {
        return new Promise((resolve, reject) => {
            resolve(this.createSampleDogs());
        });
    }
    /**
     * Gets a sample dog
     * @param {number}
     */
    getById(id: number) {
        return new Promise((resolve, reject) => {
            resolve(this.sampleDog);
        });
    }
}