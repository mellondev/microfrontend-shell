import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class MicrofrontendService {
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                // For Loading
                remoteEntry: 'http://localhost:5000/remoteEntry.js',
                remoteName: 'features',
                exposedModule: 'Module',
                
                // For Routing
                displayName: 'Features',
                routePath: 'features',
                ngModuleName: 'FeaturesModule'
            }          
        ] as Microfrontend[]);
    }
}