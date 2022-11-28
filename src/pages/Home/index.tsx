import { useEffect, useState } from 'react';

import * as Storage from '../../services/storage';

const Home = () => {
  const [albuns, setAlbuns] = useState<any>()

  useEffect(()=>{
    getAlbuns();
  }, []);
  
  const getAlbuns = async () => {
    setAlbuns(await Storage.getAlbuns())
  }

  console.log("Albuns", Storage.getAlbuns())
  console.log("Imagens", Storage.getImages(albuns?.map((value: { id: any; }) => value.id)[0]))

  return (
    <div>Home</div>
  )
}

export default Home;
