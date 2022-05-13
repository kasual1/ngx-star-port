import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { StarShip } from '../../models/star-ship.model';

@Component({
  selector: 'app-star-ship',
  templateUrl: './star-ship.component.html',
  styleUrls: ['./star-ship.component.scss']
})
export class StarShipComponent implements OnInit {

  @Input()
  starShip!: StarShip | null;

  @HostBinding('style.background')
  background!: SafeStyle;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.background = this.sanitizer.bypassSecurityTrustStyle(
      `url("${this.starShip?.imageUrl}") left center / cover no-repeat`
    );
  }

}
