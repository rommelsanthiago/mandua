import { storage } from '../libs/firebase';
import { getDocs, collection, addDoc, doc, deleteDoc } from 'firebase/firestore';
import { Album } from '../interfaces/Album';

export const getAlbuns = async () => {
    const albunsFolder = collection(storage, "Albuns");
    const data = await getDocs(albunsFolder);

    const albunsList: Album[] = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    return albunsList
};

export const getImages = async (id: string) => {
    const imagesFolder = collection(storage, `Albuns/${id}/imagens`)
    const dataImg = await getDocs(imagesFolder)

    const imagesList = dataImg.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    return imagesList;
};
