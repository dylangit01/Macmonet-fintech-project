import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.write(`<script type="text/javascript">
    let name = document.getElementsByTagName('title')[0]
    name.innerHTML = ${environment.appName} + ' mk'
</script>`);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

