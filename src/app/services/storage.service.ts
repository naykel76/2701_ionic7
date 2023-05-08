import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private storage: Storage) { this.init(); }

    async init() {
        await this.storage.create();
    }

    async set(key: string, value: any) {
        let result = await this.storage?.set(key, value);
    }

    async get(key: string) {
        return await this.storage?.get(key);
    }

    async remove(key: string) {
        let value = await this.storage?.remove(key);
    }

    async clear() {
        let value = await this.storage?.clear();
    }

    async keys() {
        return await this.storage?.keys();
    }
}
