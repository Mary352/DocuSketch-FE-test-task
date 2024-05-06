import { Component } from '@angular/core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-btn-showing-icon',
  templateUrl: './btn-showing-icon.component.html',
  styleUrl: './btn-showing-icon.component.scss'
})
export class BtnShowingIconComponent {
  private fabArr = Object.values(fab);
  private fasArr = Object.values(fas);
  private farArr = Object.values(far);

  private fabAndFasArr = this.fabArr.concat(this.fasArr);
  private freeIconsArr = this.fabAndFasArr.concat(this.farArr);

  private randomIconIndex: number = Math.floor(Math.random() * this.freeIconsArr.length);
  private indexesArr: number[] = []
  public randomFreeIcon = this.indexesArr.length !== 0 ? this.freeIconsArr[this.indexesArr[0]] : this.freeIconsArr[this.randomIconIndex];

  public isHidden: boolean = true;
  private clickTimeout: NodeJS.Timeout | null = null;
  private clicksCount: number = 0;
  private defaultDelay: number = 3000;
  private timerDelay: number = 0;
  private startTime: number = 0;
  private endTime: number = 0;
  private clickTimeoutToUpdateIcon: NodeJS.Timeout | null = null;

  public showMessage() {
    alert('Go!')
  }

  public showIcon() {
    this.clicksCount++;

    this.randomIconIndex = Math.floor(Math.random() * this.freeIconsArr.length);
    this.indexesArr.push(this.randomIconIndex)

    this.randomFreeIcon = this.indexesArr.length !== 0 ? this.freeIconsArr[this.indexesArr[0]] : this.freeIconsArr[this.randomIconIndex];
    this.isHidden = false;

    console.log("🚀 ~ BtnShowingIconComponent ~ showIcon ~ this.randomIconIndex:", this.randomIconIndex)
    console.log("🚀 ~ BtnShowingIconComponent ~ showIcon ~ this.indexesArr:", this.indexesArr)
    console.log("🚀🚀🚀 ~ BtnShowingIconComponent ~ showIcon ~ this.indexesArr.length:", this.indexesArr.length)

    if (this.clickTimeout) {

      clearTimeout(this.clickTimeout);
      this.clickTimeout = null;
    }
    // else {
    //   this.isHidden = false;
    // }
    console.log("🚀 ~ BtnShowingIconComponent ~ showIcon ~ clickTimeout:", this.clickTimeout)

    if (this.clicksCount > 1) {
      this.endTime = performance.now();
      // ! not 0
      // time between two clicks
      const timeBetweenTwoClicks = this.endTime - this.startTime
      this.timerDelay = (this.clicksCount - 1) * this.defaultDelay - timeBetweenTwoClicks;
      console.log("🚀 ~ BtnShowingIconComponent ~ showIcon ~ this.endTime:", this.endTime)
      console.log("🚀 ~ BtnShowingIconComponent ~ showIcon ~ this.startTime:", this.startTime)
      console.log("🚀if ~ BtnShowingIconComponent ~ showIcon ~ this.timerDelay:", this.timerDelay)
    }

    this.startTime = performance.now();

    // this.clickTimeout = setTimeout(() => {
    //   this.isHidden = true;
    //   this.clicksCount = 0;
    //   this.timerDelay = 0;
    //   this.startTime = 0;
    //   this.endTime = 0;
    //   // this.indexesArr.shift()

    //   // this.clickTimeout = null;

    // }, 3000 + this.timerDelay);

    setTimeout(() => {
      // this.clickTimeout = setTimeout(() => {
      //   this.isHidden = true;
      //   this.clicksCount = 0;
      //   this.timerDelay = 0;
      //   this.startTime = 0;
      //   this.endTime = 0;
      //   // this.indexesArr.shift()

      //   // this.clickTimeout = null;

      // }, 3000 + this.timerDelay);

      this.indexesArr.shift()
      if (this.indexesArr.length === 0) {
        this.isHidden = true;
        this.clicksCount = 0;
        this.timerDelay = 0;
        this.startTime = 0;
        this.endTime = 0;
      }
      this.randomFreeIcon = this.indexesArr.length !== 0 ? this.freeIconsArr[this.indexesArr[0]] : this.freeIconsArr[this.randomIconIndex];
      console.log("🚀🚀 ~ BtnShowingIconComponent ~ showIcon ~ this.indexesArr:", this.indexesArr)
      console.log("🚀🚀 ~ BtnShowingIconComponent ~ showIcon ~ this.indexesArr.length:", this.indexesArr.length)


      console.log("🚀 ~ BtnShowingIconComponent ~ showIcon ~ this.timerDelay:", this.timerDelay)
    }, this.defaultDelay + this.timerDelay);

    // this.clickTimeout = setTimeout(() => {
    //   this.isHidden = true;
    //   // this.indexesArr.shift()
    //   setTimeout(() => {
    //     this.indexesArr.shift()
    //     console.log("🚀🚀 ~ AppComponent ~ showIcon ~ this.indexesArr:", this.indexesArr)
    //     // this.clickTimeout = null;
    //   }, 3000);
    //   // this.clickTimeout = null;

    // }, 3000);
    console.log("🚀 ~ BtnShowingIconComponent ~ showIcon ~ clickTimeout:", this.clickTimeout)
  }
}
