// like.component.ts
export class LikeComponent {
   constructor(private _likes: number, private _selected: boolean) {}

     click(): void {
        // Toggle the state of the like button
        this._selected = !this._selected;

        // Increment or decrement the number of likes
        this._likes += (this._selected) ? 1 : -1;
    }

    get likes(): number {
        return this._likes;
    }

    get selected(): boolean {
     return this._selected;
    }
}


