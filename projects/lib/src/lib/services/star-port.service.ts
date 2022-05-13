import { Injectable } from '@angular/core';
import { StarPort } from '../models/star-port.model';

@Injectable({ providedIn: 'root' })
export class StarPortService {

    private readonly storedStarPorts = new Map<string, StarPort>();

    addOrUpdateStarPort(key: string, starPort: StarPort): void {
        this.storedStarPorts.set(key, starPort);
    }

    getStarPort(key: string): StarPort | undefined {
        return this.storedStarPorts.get(key);
    }

    getStarPorts(): Map<string, StarPort> {
        return this.storedStarPorts;
    }
}