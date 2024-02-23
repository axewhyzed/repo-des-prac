import { Component } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrl: './status-bar.component.css'
})
export class StatusBarComponent {
    viewNameArr:string[] = ['Report View', 'Print Preview', 'Layout View', 'Design View']; 
    viewName:string = 'Report View';
    updateViewName(newView:string){
      this.viewName = newView;
    }
}
