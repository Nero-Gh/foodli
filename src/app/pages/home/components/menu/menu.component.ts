import { Component } from '@angular/core';
import { ImageComponent } from '../../../../shared/components/image/image.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
