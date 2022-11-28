import React from 'react';
import { Album } from '../../interfaces/Album';

export const AlbumCard = ({id, coverImg, title}: Album) => {

  console.log("Card", id)
  return (
    <aside>
        <section>
            <img src={coverImg} alt="Imagem do album" />
        </section>
        <h1>{title}</h1>
    </aside>
  );
};
