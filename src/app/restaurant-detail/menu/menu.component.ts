import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../../restaurants/restaurants.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {MenuItem} from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menus: Observable<MenuItem[]>;

  constructor(private service: RestaurantsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.menus = this.service.menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }
}
