import { Component } from '@angular/core';
import { DxRadioGroupTypes } from 'devextreme-angular/ui/radio-group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  employeeData = {
    name: 'John Heart',
    position: 'CEO',
    hireDate: new Date(2012, 4, 13),
    officeNumber: 901,
    notes:
      'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.',
    roles: ['Chief Officer', 'Administrator', 'Manager'],
  };

  labelTemplates = [
    { name: 'name', icon: 'dx-icon-info' },
    { name: 'position', icon: 'dx-icon-group' },
    { name: 'officeNumber', icon: 'dx-icon-info' },
  ];

  tabNames = ['Employee', 'Notes', 'Role'];

  selectedTabIndex = 0;

  onValueChanged(e: DxRadioGroupTypes.ValueChangedEvent): void {
    this.selectedTabIndex = this.tabNames.indexOf(e.value);
  }
}
