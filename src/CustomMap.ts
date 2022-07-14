/**
 * Instruction to every other class on how to be
 * an argument to addMarker
 */

//Mappable is a gatekeeper to the addMaker function.
//Others clases must satisfy interface Mappable to
//work with the CustomMap's addMarker method
export interface Mappable {
  //Other classes must satify these properties to
  //be a Mappable
  getLatitude: () => number;
  getLongitude: () => number;
  markerContent: () => string;
}

//OR

// import User from "./User";
// import Company from "./Company";

// type Mappable2 = User | Company | ParkingLot

//To work with google map
export default class CustomMap {
  //googleMap is instance of Map class
  private googleMap: google.maps.Map;

  public constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        center: { lat: 0, lng: 0 },
        zoom: 8,
      }
    );
  }

  //With this we can add as many different instance of class
  //as long it satisfy the interface Mappable
  public addMarker(mapable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapable.getLatitude(),
        lng: mapable.getLongitude(),
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapable.markerContent(),
        minWidth: 300,
      });
      //Only create infoWindow when marker is clicked
      infoWindow.open(this.googleMap, marker);
    });
  }

  //We can pass in an instance of a user or company
  // public addMarker(mapable: User | Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mapable.getLatitude(),
  //       lng: mapable.getLongitude(),
  //     },
  //   });
  // }
}
