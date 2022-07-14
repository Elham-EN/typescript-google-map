class Position {
  private location: map.number.Location;

  public constructor(aLat: number, aLng: number) {
    this.location = {
      lat: aLat,
      lng: aLng,
    };
  }

  public getLatitude(): number {
    return this.location.lat;
  }

  public getLongitude(): number {
    return this.location.lng;
  }
}
