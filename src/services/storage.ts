import React, { useState } from 'react';
import { storage, dataBase } from '../libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { getDocs, collection, addDoc, doc, deleteDoc } from 'firebase/firestore';

export const getAlbuns = async () => {

    const albunsFolder = collection(storage, "Albuns");
    const data = await getDocs(albunsFolder);

    const albunsList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    // const id = albunsList.map((value: { id: any; }) => value.id)[0]


    return albunsList
};

export const getImages = async (id: string) => {
    const imagesFolder = collection(storage, `Albuns/${id}/imagens`)
    const dataImg = await getDocs(imagesFolder)

    const imagesList = dataImg.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    return imagesList;
};
