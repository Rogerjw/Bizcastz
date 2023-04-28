import { Component } from '@angular/core';
import DashboardData from '../../assets/DashboardData.json';

@Component({
  selector: 'app-locations-table',
  templateUrl: './locations-table.component.html',
  styleUrls: ['./locations-table.component.scss']
})
export class LocationsTableComponent {
  CurrentStoreCompliance = DashboardData.Dashboard.CurrentStoreCompliance;
}
