import { Component } from '@angular/core';
import { IconDefinition, fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-btn-showing-icon',
  templateUrl: './btn-showing-icon.component.html',
  styleUrl: './btn-showing-icon.component.scss'
})

export class BtnShowingIconComponent {
  private fabArr: IconDefinition[] = Object.values(fab);
  private fasArr: IconDefinition[] = Object.values(fas);
  private farArr: IconDefinition[] = Object.values(far);

  private fabAndFasArr: IconDefinition[] = this.fabArr.concat(this.fasArr);
  private freeIconsArr: IconDefinition[] = this.fabAndFasArr.concat(this.farArr);

  private randomIconIndex: number = this.getRandomIconIndex();
  private indexesArr: number[] = []
  public randomFreeIcon: IconDefinition = this.getRandomFreeIcon();

  public isHidden: boolean = true;
  private clicksCount: number = 0;
  private timerDelay: number = 0;
  private startTime: number = 0;
  private endTime: number = 0;

  private getRandomIconIndex(): number {
    return Math.floor(Math.random() * this.freeIconsArr.length);
  }

  private getRandomFreeIcon(): IconDefinition {
    return this.indexesArr.length !== 0 ? this.freeIconsArr[this.indexesArr[0]] : this.freeIconsArr[this.randomIconIndex];
  }

  public showIcon(): void {
    const defaultDelay: number = 3000;

    this.clicksCount++;

    this.randomIconIndex = this.getRandomIconIndex();
    // save icon index from the icons array. The icon index calculates on every click
    this.indexesArr.push(this.randomIconIndex);

    this.randomFreeIcon = this.getRandomFreeIcon();
    this.isHidden = false;

    if (this.clicksCount > 1) {
      this.endTime = performance.now();
      const timeBetweenTwoClicks = this.endTime - this.startTime;
      // count delay to show every icon during 3 sec
      this.timerDelay = (this.clicksCount - 1) * defaultDelay - timeBetweenTwoClicks;
    }

    this.startTime = performance.now();

    setTimeout(() => {
      // clear the first item of the array to change the icon
      this.indexesArr.shift();

      if (this.indexesArr.length === 0) {
        this.isHidden = true;
        this.clicksCount = 0;
        this.timerDelay = 0;
        this.startTime = 0;
        this.endTime = 0;
      }

      // change the icon based on indexesArr content
      this.randomFreeIcon = this.getRandomFreeIcon();

    }, defaultDelay + this.timerDelay);
  }
}
