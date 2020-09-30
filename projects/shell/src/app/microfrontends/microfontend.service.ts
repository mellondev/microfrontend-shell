import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from '../utils/route-utils';
import { Microfrontend } from './microfrontend';
import { environment } from '../../environments/environment';
import { ShellEventService } from 'md-shell-core';
import { ShellEvents } from 'md-shell-core';

@Injectable({ providedIn: 'root' })
export class MicrofrontendService {
  microfrontends: Microfrontend[];

  constructor(private router: Router, private shellEventService: ShellEventService) {
    this.shellEventService.events$.subscribe(x => {
      if (x.name === ShellEvents.FEATURES_INSTALL) {
        // install feature
        this.microfrontends.push({
          remoteEntry: x.data.remoteEntry,
          remoteName: x.data.remoteName,
          exposedModule: x.data.exposedModule,
          displayName: x.data.displayName,
          routePath: x.data.routePath,
          ngModuleName: x.data.ngModuleName,
        });
        this.rebuildRoutesConfig();
      }
    });
  }

  initialise(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.microfrontends = this.loadConfig();
      this.rebuildRoutesConfig();
      resolve();
    });
  }

  private rebuildRoutesConfig() {
    const routes = buildRoutes(this.microfrontends);
    console.log(routes);
    this.router.resetConfig(routes);
  }

  loadConfig(): Microfrontend[] {
    if (environment.production) {
      return [
        {
          // For Loading
          remoteEntry: 'https://red-wave-053790403.azurestaticapps.net/remoteEntry.js',
          remoteName: 'features',
          exposedModule: 'Module',

          // For Routing
          displayName: 'Features',
          routePath: 'features',
          ngModuleName: 'FeaturesModule',
        },
      ];
    } else {
      return [
        {
          // For Loading
          remoteEntry: 'http://localhost:5000/remoteEntry.js',
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
}
