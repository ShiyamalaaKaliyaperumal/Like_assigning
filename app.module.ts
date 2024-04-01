import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



// main.ts
import { LikeComponent } from './like.component';

let component = new LikeComponent(10, true);
component.click();
console.log(`likes: ${component.likes}, selected: ${component.selected}`);





// new




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
