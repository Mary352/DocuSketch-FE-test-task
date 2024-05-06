import { Component } from '@angular/core';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'DocuSketch-FE-test-task';
  // public faYoutube = fab['faYoutube'];

  // private fabArr = Object.values(fab);
  // private fasArr = Object.values(fas);
  // private farArr = Object.values(far);

  // private fabAndFasArr = this.fabArr.concat(this.fasArr);
  // private freeIconsArr = this.fabAndFasArr.concat(this.farArr);

  // private randomIconIndex = Math.floor(Math.random() * this.freeIconsArr.length);
  // private indexesArr: number[] = []
  // public randomFreeIcon = this.indexesArr.length !== 0 ? this.freeIconsArr[this.indexesArr[0]] : this.freeIconsArr[this.randomIconIndex];

  // public isHidden = true;
  // private clickTimeout: NodeJS.Timeout | null = null;
  // private clickTimeoutToUpdateIcon: NodeJS.Timeout | null = null;

  // public showMessage() {
  //   alert('Go!')
  // }

  // public showIcon() {
  //   this.randomIconIndex = Math.floor(Math.random() * this.freeIconsArr.length);
  //   this.indexesArr.push(this.randomIconIndex)

  //   this.randomFreeIcon = this.indexesArr.length !== 0 ? this.freeIconsArr[this.indexesArr[0]] : this.freeIconsArr[this.randomIconIndex];
  //   this.isHidden = false;



  //   console.log("🚀 ~ AppComponent ~ showIcon ~ this.randomIconIndex:", this.randomIconIndex)
  //   console.log("🚀 ~ AppComponent ~ showIcon ~ this.indexesArr:", this.indexesArr)
  //   console.log("🚀🚀🚀 ~ AppComponent ~ showIcon ~ this.indexesArr.length:", this.indexesArr.length)

  //   if (this.clickTimeout) {

  //     clearTimeout(this.clickTimeout);
  //     this.clickTimeout = null;
  //   }
  //   // else {
  //   //   this.isHidden = false;
  //   // }
  //   console.log("🚀 ~ AppComponent ~ showIcon ~ clickTimeout:", this.clickTimeout)

  //   setTimeout(() => {
  //     this.clickTimeout = setTimeout(() => {
  //       this.isHidden = true;
  //       // this.indexesArr.shift()

  //       // this.clickTimeout = null;

  //     }, 3000);

  //     this.indexesArr.shift()
  //     this.randomFreeIcon = this.indexesArr.length !== 0 ? this.freeIconsArr[this.indexesArr[0]] : this.freeIconsArr[this.randomIconIndex];
  //     console.log("🚀🚀 ~ AppComponent ~ showIcon ~ this.indexesArr:", this.indexesArr)
  //     console.log("🚀🚀 ~ AppComponent ~ showIcon ~ this.indexesArr.length:", this.indexesArr.length)


  //   }, 3000);

  //   // this.clickTimeout = setTimeout(() => {
  //   //   this.isHidden = true;
  //   //   // this.indexesArr.shift()
  //   //   setTimeout(() => {
  //   //     this.indexesArr.shift()
  //   //     console.log("🚀🚀 ~ AppComponent ~ showIcon ~ this.indexesArr:", this.indexesArr)
  //   //     // this.clickTimeout = null;
  //   //   }, 3000);
  //   //   // this.clickTimeout = null;

  //   // }, 3000);
  //   console.log("🚀 ~ AppComponent ~ showIcon ~ clickTimeout:", this.clickTimeout)
  // }
}
