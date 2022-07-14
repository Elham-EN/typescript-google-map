import { company, address } from "faker";
import { Mappable } from "./CustomMap";

export default class Company implements Mappable {
  private company_name: string;
  private catch_phrase: string;
  private location: map.number.Location;

  public constructor() {
    this.company_name = company.companyName();
    this.catch_phrase = company.catchPhrase();
    this.location = {
      lat: Number(address.latitude()),
      lng: Number(address.longitude()),
    };
  }

  public getCompanyName(): string {
    return this.company_name;
  }

  public getCatchPhrase(): string {
    return this.catch_phrase;
  }

  public getLatitude(): number {
    return this.location.lat;
  }

  public getLongitude(): number {
    return this.location.lng;
  }

  public markerContent(): string {
    return `
     <div>
      <h1>Company Name: ${this.getCompanyName()}</h1> 
      <p>Catch Phrases ${this.getCatchPhrase()}</p>
     </div>`;
  }
}
