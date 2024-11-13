import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, marker, icon, Map, Marker } from 'leaflet';

@Component({
  selector: 'app-cali-map',
  templateUrl: './cali-map.component.html',
  styleUrls: ['./cali-map.component.scss'],
})
export class CaliMapComponent implements OnInit {
  mapOptions: any; // Opciones iniciales del mapa
  userLocationMarker?: Marker; // Marcador de la ubicación del usuario
  private mapInstance!: Map; // Referencia a la instancia de Leaflet Map

  ngOnInit(): void {
    this.initializeMapOptions();
  }

  /**
   * Inicializa las opciones básicas del mapa
   */
  private initializeMapOptions(): void {
    this.mapOptions = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }),
      ],
      zoom: 13,
      center: latLng(3.4516, -76.532), // Centro inicial del mapa (Cali, Colombia)
    };
  }

  /**
   * Método ejecutado cuando el mapa está listo
   * @param map Instancia del mapa Leaflet
   */
  onMapReady(map: Map): void {
    this.mapInstance = map;
    this.trackUserLocation();
  }

  /**
   * Rastrea la ubicación del usuario y actualiza el marcador
   */
  private trackUserLocation(): void {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          console.log(
            '🚀 ~ CaliMapComponent ~ trackUserLocation ~ userLat:',
            userLat,
            userLng
          );
          // Si ya existe un marcador, actualízalo; si no, créalo
          if (this.userLocationMarker) {
            this.userLocationMarker.setLatLng([userLat, userLng]);
          } else {
            this.userLocationMarker = marker([userLat, userLng], {
              icon: icon({
                iconUrl: 'assets/user-location-icon.svg', // Ruta del ícono del usuario
                iconSize: [35, 35],
                iconAnchor: [5, 5],
              }),
            }).addTo(this.mapInstance);
          }

          // Centra el mapa en la ubicación del usuario
          this.mapInstance.setView([userLat, userLng], 15);
        },
        (error) => {
          console.error('Error al obtener la ubicación del usuario:', error);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
        }
      );
    } else {
      console.warn('Geolocalización no es soportada en este navegador.');
    }
  }
}
