//Generate fake data
import { address, name } from "faker";
import { Mappable } from "./CustomMap";

//"implements Mappable" tell typescript to make sure that an
//instance of class User satisfies all the properties required
//by the Mappable interface
export default class User implements Mappable {
  private name: string;
  //Define location type strcuture
  private location: map.number.Location;
  //Create Instance of User class
  public constructor() {
    this.name = name.firstName();
    this.location = {
      lat: Number(address.latitude()),
      lng: Number(address.longitude()),
    };
  }
  public getName(): string {
    return this.name;
  }

  public getLatitude(): number {
    return this.location.lat;
  }

  public getLongitude(): number {
    return this.location.lng;
  }

  public markerContent(): string {
    return `<h1>User Name: ${this.getName()}</h1>`;
  }
}
