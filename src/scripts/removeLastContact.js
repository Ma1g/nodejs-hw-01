import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
        const contacts = JSON.parse(data);
        
        if (contacts.length > 0) {
            contacts.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
        } else {
            console.log('Its already empty');
        }
    } catch (err) {
                console.error('Abra cadabra, something went wrong', err);
    }
};

removeLastContact();
