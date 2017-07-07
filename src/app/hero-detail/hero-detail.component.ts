import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroServiceService } from '../hero-service.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
  constructor(
    private heroService: HeroServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void{
    this.route.paramMap.switchMap((params: ParamMap) => this.heroService.gethero(+params.get('id'))).subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  @Input() hero: Hero;
}
