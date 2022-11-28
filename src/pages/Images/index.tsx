import React from 'react';

import * as Storage from '../../services/storage';

const Images = (id: string) => {

  console.log("Imagens", Storage.getImages(id))
  return (
    <div>Images</div>
  )
}

export default Images;
