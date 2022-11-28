import React from 'react';

import { useNavigate } from "react-router-dom"

import { Album } from '../../interfaces/Album';
import { goToAlbum } from '../../Routes/coodinator';
import * as S from "./styles"

export const AlbumCard = ({id, coverImg, title}: Album) => {

  const navigate = useNavigate()

  console.log("Card", id)
  return (
    <S.Container onClick={() => goToAlbum(navigate, id)}>
        <section>
            <S.Image src={coverImg} alt={title} style={{width: "100%", border: "1px solid black"}} />
        </section>
        <h1>{title}</h1>
    </S.Container>
  );
};
