import { useEffect, useState } from 'react';

import * as Storage from '../../services/storage';
import { AlbumCard } from '../../components/AlbumCard';
import { Album } from '../../interfaces/Album';

const Home = () => {
  const [albuns, setAlbuns] = useState<Album[]>([])

  useEffect(()=>{
    getAlbuns();
  }, []);
  
  const getAlbuns = async () => {
    setAlbuns(await Storage.getAlbuns())
  }

  return (
    <section>
      <div>Home</div>
      {
        albuns.map((album, index) => (
            <AlbumCard 
              key={index}
              id={album.id} 
              coverImg={album.coverImg}
              title={album.title}
            />
        ))
      }
    </section>
  )
}

export default Home;
