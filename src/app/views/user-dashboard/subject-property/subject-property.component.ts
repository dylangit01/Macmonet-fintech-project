import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader} from "@agm/core";
import { MouseEvent as AGMMouseEvent } from '@agm/core';

@Component({
  selector: 'app-subject-property',
  templateUrl: './subject-property.component.html',
  styleUrls: ['./subject-property.component.scss']
})
export class SubjectPropertyComponent implements OnInit {
  title: string = 'Subject Information';
  latitude: number;
  longitude: number;
  zoom:number;
  address: string;
  private geoCoder;
  private showLoader: boolean;
  private showSubjectAmount: boolean;
  subjectAmount: string[];
  private randomSA: string;

  // 'search' is the property defined in html
  // change 'search' to javascript element from angular element, which is the same function as Pizza project, --> template reference
  @ViewChild('search',{static: false} )
  public searchElementRef: ElementRef;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) {
    this.showLoader = false
    this.showSubjectAmount = null
    this.subjectAmount = ['$500,000.00', '$1,000,000.00', '$1,500,000.00', '$2,000,000.00']
  }


  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder();

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        // change subject Amount to false when changing the location:
        this.showSubjectAmount = false
        console.log('showSubAmount here!!!!!' ,this.showSubjectAmount)
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        // use getAddress(lat,lng) to update the address below
        this.getAddress(place.geometry.location.lat(), place.geometry.location.lng())
        this.checkSubjectAmount()
        // below log shows showSubjectAmount as "false", because this.checkSubjectAmount() is async function, but console.log executes right away before the timeout function.
        // console.log('checkAmount again xxxxxxxxx',this.showSubjectAmount)

        // console.log('Show address below',place.geometry.location.lat(), place.geometry.location.lng() )

        this.ngZone.run(() => {

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  markerDragEnd($event: AGMMouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      // console.log(results);
      // console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 15;
          // console.log('address changed one more!!!')
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

  checkSubjectAmount () {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
    setTimeout( () => {
      this.showSubjectAmount = true
      this.randomSA = this.subjectAmount[this.getRandomInt(this.subjectAmount.length)]
      }, 1000);

}

}
