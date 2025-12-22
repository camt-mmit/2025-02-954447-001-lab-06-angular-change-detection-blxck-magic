import { Component } from '@angular/core';

@Component({
  selector: 'app-trial-one',
  imports: [],
  templateUrl: './trial-one.html',
  styleUrl: './trial-one.scss',
})
export class TrialOne {
  protected items = [0, 0, 0];
  protected onChange(index: number, value: number): void {
    this.items[index] = value;
    // this.items = [...this.items];
    console.info(this.items);
  }
}
