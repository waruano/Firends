import { Component } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  KmlOverlay,
  Polygon,
  ILatLng,
  Environment,
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  map: GoogleMap;
  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDnCZdDEaLkUICEtC7J2_PfihoQyJO89Bk',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDnCZdDEaLkUICEtC7J2_PfihoQyJO89Bk'
    });    
    this.map = GoogleMaps.create('map_canvas');
    
    const arrLocations =    [
      {
        latitude: 5.46929,
        longitude: -73.54771
    },
    {
        latitude: 5.44557,
        longitude: -73.59
    },
    {
        latitude: 5.44946,
        longitude: -73.57177
    },
    {
        latitude: 5.45551,
        longitude: -73.56728,
    },
    {
        latitude: 5.46378,
        longitude: -73.55542
    },
    {
        latitude: 5.46708,
        longitude: -73.55512
    },
    {
        latitude: 5.46709,
        longitude: -73.53389
    },
    {
        latitude: 5.46983,
        longitude: -73.55116
    },
    {
        latitude: 5.47037,
        longitude: -73.5546
    },
    {
        latitude: 5.47039,
        longitude: -73.53336
    },
    {
        latitude: 5.47203,
        longitude: -73.54372
    },
    {
        latitude: 5.47366,
        longitude: -73.55408
    },
    {
        latitude: 5.47423,
        longitude: -73.53629
    }
    ];

    // this.map.addKmlOverlay({
    //   url: "assets/MODIS_C6_USA_contiguous_and_Hawaii_24h.kml",
    //   clickable: true,
    //   suppressInfoWindows: false,
    //   icon: 'assets/fire.png'
    // }).then((kmlOverlay: KmlOverlay) => {

    //   this.map.moveCamera(kmlOverlay.getDefaultViewport());

    //   // You can get additional information
    //   kmlOverlay.on(GoogleMapsEvent.KML_CLICK).subscribe((params: any) => {
    //     let overlay: Polygon = params[0]; // depends on overlay
    //     let latLng: ILatLng = params[1];
    //     console.log(overlay, latLng);
    //   });

    // });

  }
}
