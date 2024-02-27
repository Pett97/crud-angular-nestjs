import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routerConfig from './app/routes';
import {provideHttpClient} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent,{
  providers:[
    provideRouter(routerConfig),
    provideHttpClient(),
  ]
})
  .catch((err) => console.error(err));
