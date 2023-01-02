import { Component, Input } from '@angular/core';

export interface Link {
  name : string;
  favicon : string;
}
@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {
  @Input() links!: Link[];

}
