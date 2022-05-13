import { Component, OnInit } from '@angular/core';
import { starShips } from '../../data/starships.data';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent {

  starShips = starShips;

}
