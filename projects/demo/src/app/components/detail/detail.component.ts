import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, tap } from 'rxjs';
import { starShips } from '../../data/starships.data';
import { StarShip } from '../../models/star-ship.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  id$: Observable<number>
  
  starShip$: Observable<StarShip | null>;

  constructor(private route: ActivatedRoute){
   this.id$ = this.route.params.pipe(map(params => params['id']));
   this.starShip$ = this.id$.pipe(map(id => starShips.find(s => s.id === +id) as StarShip), tap(console.log))
  }



}
