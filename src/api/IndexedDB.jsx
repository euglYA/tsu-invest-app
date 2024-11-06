import { openDB } from "idb";

let dbPromise = openDB('invest-db', 2, {
  upgrade(db) {     if (!db.objectStoreNames.contains('tests')) {
    db.createObjectStore('investment', { keyPath: 'id', autoIncrement: true });
  }},
});

const IndexedDB = {
    async addItem(storeName, data) {
        let db = await dbPromise;

        if (!db.objectStoreNames.contains(storeName)) {
            db.close();
            dbPromise = openDB('invest-db', db.version + 1, {
                upgrade(upgradeDB) {
                    if (!upgradeDB.objectStoreNames.contains(storeName)) {
                        upgradeDB.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
                    }
                },
            });
            db = await dbPromise;
        }
        try {
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            await store.add(data);
            await tx.done;
            console.log(`Data added to ${storeName}:`, data);
        } catch (error) {
            console.log(error)
        }

    },

    async getItems(storeName) {
        const db = await dbPromise;
        if (db.objectStoreNames.contains(storeName)) {
            return await db.getAll(storeName);
        }
        return [];
    },

    async deleteItem(storeName, id) {
        const db = await dbPromise;
        if (db.objectStoreNames.contains(storeName)) {
            await db.delete(storeName, id);
        } else {
            console.warn(`Store "${storeName}" does not exist.`);
        }
    }
}

export default IndexedDB;