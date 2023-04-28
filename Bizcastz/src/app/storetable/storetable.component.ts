import { Component } from '@angular/core';
import DashboardData from '../../assets/DashboardData.json';

@Component({
  selector: 'app-storetable',
  templateUrl: './storetable.component.html',
  styleUrls: ['./storetable.component.scss']
})



export class StoretableComponent {
  CurrentStoreCompliance = DashboardData.Dashboard.CurrentStoreCompliance;
  constructor() {
    console.log(this.CurrentStoreCompliance);
  }
}