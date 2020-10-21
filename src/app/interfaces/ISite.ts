export interface ISite {
  id: number;
  name: string;
  desc: string;
  lng: number;
  lat: number;
  image: ISiteImage[];
  virtualTourURL: string;
}

interface ISiteImage {
  image: string;
}
