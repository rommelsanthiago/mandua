import React, { useEffect, useState } from 'react';

import * as Storage from '../../services/storage';
import { useNavigate, useParams } from 'react-router-dom'
import { Image } from '../../interfaces/Image';

const Images = () => {
  const [images, setImages] = useState<Image[]>([])
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    setImages(await Storage.getImages(params.id!))
  }

  return (
    <>
      {
        images.map(img => (
          <img src={img.url} key={img.id} />
        ))
      }
    </>
  )
}

export default Images;
