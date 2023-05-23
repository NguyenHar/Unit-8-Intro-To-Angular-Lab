import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unit_8_Intro_To_Angular_Lab';

  items : MenuItem[] = [
    {name:"Chicken Fingers", category:"dinner", price:11.99},
    {name:"Pizza", category:"dinner", price:11.99},
    {name:"Wings", category:"sides", price:8.99},
    {name:"Breadsticks", category:"sides", price:4.99},
    {name:"Caesar Salad", category:"salads", price:5.99},
    {name:"Cinnamon Roll", category:"dessert", price:8.99}
  ];
  categories : MenuItem[] = this.items;

  getByCategory(elementId: string) : void {
    let cat = (document.getElementById(elementId) as HTMLInputElement).value;
    this.categories = [];
    for (let i=0; i<this.items.length; i++)
    {
      if (this.items[i].category == cat?.toLowerCase())
      {
          this.categories.push(this.items[i]);
      }
    }
  }

  getCategory(cat: string) : MenuItem[] {
    let categ : MenuItem[] = [];
    for (let i=0; i<this.items.length; i++)
    {
      if (this.items[i].category == cat.toLowerCase())
      {
        categ.push(this.items[i]);
      }
    }
    return categ;
  }

  getUniqueCategories() : Set<string> {
    let cats : Set<string> = new Set();
    for (let i=0; i<this.items.length; i++)
    {
      cats.add(this.items[i].category);
    }
    return cats;
  }

  clearCategory() : void {
    this.categories = this.items;
  }
}
