/**
 * we’re going to want to have some kind of organization
 * scheme so that we can keep track of our types and not
 * worry about name collisions with other objects.
 *
 * Use declare namespace to describe types or values
 * accessed by dotted notation.
 */
declare namespace map.number {
  export interface Location {
    lat: number;
    lng: number;
  }
}

declare namespace map.string {
  export interface Location {
    lat: string;
    lng: string;
  }
}
