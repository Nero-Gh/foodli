import { Component } from '@angular/core';
import { ImageComponent } from '../../../../shared/components/image/image.component';

@Component({
  selector: 'app-serve',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './serve.component.html',
  styleUrl: './serve.component.scss',
})
export class ServeComponent {}
