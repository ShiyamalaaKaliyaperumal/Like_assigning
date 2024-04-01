import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  import { CommonModule } from '@angular/common';




  import { Component } from '@angular/core';

  @Component({
    selector: 'like-button',
    template: `
      <button (click)="onLike()">Like | {{ likes }}</button>
    `,
    styles: [`
      .selected {
        font-weight: bold;
        color: blue;
      }
    `]
  })
  export class LikeButtonComponent {
    likes = 0;
    isSelected = false;
  
    onLike() {
      this.likes += (this.isSelected) ? -1 : 1;
      this.isSelected = !this.isSelected;
    }
  }
   