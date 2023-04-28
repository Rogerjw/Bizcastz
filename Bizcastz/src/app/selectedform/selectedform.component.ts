import { Component } from '@angular/core';
import DashboardData from '../../assets/DashboardData.json';

@Component({
  selector: 'app-selectedform',
  templateUrl: './selectedform.component.html',
  styleUrls: ['./selectedform.component.scss']
})
export class SelectedformComponent {
  SelectedFormFactor = DashboardData.Dashboard.SelectedFormFactor;
}
