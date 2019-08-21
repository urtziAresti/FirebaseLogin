import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import { Map, View } from 'ol';
import OSM from 'ol/source/OSM';
import * as ol from 'openlayers';
import { transform, fromLonLat } from 'ol/proj.js';
import TileLayer from 'ol/layer/Tile';



@Component({
  selector: 'app-openlayers',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  long = -2.935490;
  lat = 43.262916;

  constructor() {


  }

  ngOnInit() {

    var map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })],
      target: 'map',
      view: new View({
        center: ol.proj.fromLonLat([this.long,this.lat]),
        zoom: 16
      })
    });


    setTimeout(function() {
      map.updateSize();
  }, 300);

  }


}
