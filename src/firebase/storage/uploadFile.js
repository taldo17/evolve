import firebase from 'firebase/app';
import { v4 as uuid } from 'uuid';

const prefix = 'https://storage.googleapis.com/evolve-sparkaton-2021.appspot.com/';


export const uploadFile = async (file, folderName) => {
    const fileExtension = file.type === 'image/png'
        ? '.png'
        : file.type === 'image/jpeg'
            ? '.jpg'
            : '';
    // randomly change the file names so the names do not collade
    //  >   npm install uuid 
    const filePath = folderName + '/' + uuid() + fileExtension;
    const storage = firebase.storage().ref(filePath); // reference to the location in filestore
    await storage.put(file);
    console.log('prefix + filePath = ', prefix + filePath);
    return prefix + filePath;
}
