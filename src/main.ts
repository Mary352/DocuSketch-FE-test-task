import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { fab } from '@fortawesome/free-brands-svg-icons'
console.log("🚀 ~ fab:", fab)
const iconFreeArr = Object.values(fab);
console.log("🚀 ~ iconFreeArr:", iconFreeArr)


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
