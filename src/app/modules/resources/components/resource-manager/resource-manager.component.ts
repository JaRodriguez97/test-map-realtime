import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-manager',
  templateUrl: './resource-manager.component.html',
  styleUrls: ['./resource-manager.component.scss'],
})
export class ResourceManagerComponent {
  resources = {
    water: 100,
    food: 100,
    airFilters: 5,
  };

  useResource(resourceType: 'water' | 'food' | 'airFilters'): void {
    if (this.resources[resourceType] > 0) {
      this.resources[resourceType]--;
    }
  }
}
