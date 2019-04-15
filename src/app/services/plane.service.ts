import { Injectable }	from '@angular/core';
import { HttpClient }	from '@angular/common/http';

@Injectable()
export class PlaneService {
    /**
     * Gets a sample dog
     */
    samplePlane: any = {
        id: 4,
        name: "Plane",
        image: "http://localhost:4200/assets/images/plane-1.jpg"
    };

  	constructor (
		private http: HttpClient
    ) {}
    /**
     * Creates 20 sample planes
     */
    private createSamplePlanes() {
        var foundPlanes = [];

        for(var i = 0; i < 20; i++) {
            foundPlanes.push(this.samplePlane);
        }

        return foundPlanes;
    }
    /**
     * Gets all sample planes 
     */
    getAll() {
        return new Promise((resolve, reject) => {
            resolve(this.createSamplePlanes());
        });
    }
    /**
     * Gets a sample plane
     * @param {number}
     */
    getById(id: number) {
        return new Promise((resolve, reject) => {
            resolve(this.samplePlane);
        });
    }
}