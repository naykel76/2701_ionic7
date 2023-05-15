import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

declare let google: any;

@Component({
    selector: 'app-map',
    template: ` <div class="h-screen" #map id="map"></div> `,
    standalone: true,
    imports: [IonicModule, CommonModule]
})
export class MapPage implements AfterViewInit {

    @ViewChild('map') mapElement: any;
    map: any;

    ngAfterViewInit() {

        let latLng = new google.maps.LatLng(-27.5526, 153.0539);

        let mapOptions = {
            center: latLng,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        this.addMarker(latLng, 'Griffith')

        this.currentLocation();
    }

    currentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let pos = {
                   lat: position.coords.latitude,
                   lng: position.coords.longitude
                }
                this.map.setCenter(pos);
            });
        }
        else {
            alert("Geolocation not");
        }
    }

    addMarker(position, title) {
        let marker = new google.maps.Marker({
            position: position,
            map: this.map,
            title: title
        });

        let infoWindow = new google.maps.InfoWindow({
            content: 'This is my marker!'
        });

        marker.addListener('click', () => {
            infoWindow.open(this.map, marker);
        });
    }

}



