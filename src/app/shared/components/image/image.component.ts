import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  src = input('');
  alt = input('');
  width = input('100%');
  height = input('auto');
  borderRadius = input('');
  objectFit = input('');
}
