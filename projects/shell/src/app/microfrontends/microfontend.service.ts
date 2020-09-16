import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from '../utils/route-utils';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class MicrofrontendService {
  microfrontends: Microfrontend[];

  constructor(private router: Router) {}

  initialise(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.microfrontends = this.loadConfig();
      const routes = buildRoutes(this.microfrontends);
      console.log(routes);
      this.router.resetConfig(routes);
      resolve();
    });
  }

  loadConfig(): Microfrontend[] {
    return [
      {
        // For Loading
        // remoteEntry: 'http://localhost:5000/remoteEntry.js',
        remoteEntry: 'https://red-wave-053790403.azurestaticapps.net/remoteEntry.js',
        remoteName: 'features',
        exposedModule: 'Module',

        // For Routing
        displayName: 'Features',
        routePath: 'features',
        ngModuleName: 'FeaturesModule',
      },
    ];
  }
}
