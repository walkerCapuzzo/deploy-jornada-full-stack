import React from 'react'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio, index } = songsArray.filter(
    (currentSongstObj) => currentSongstObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currentArtstObj) => currentArtstObj.name === artist
  )[0];

  const songsArrayFromArtis = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtis.length - 1));
  const randomIndex2 = Math.floor(Math.random() * (songsArrayFromArtis.length - 1));
  const randomIdFromArtist = songsArrayFromArtis[randomIndex]._id;
  const randomIdFromArtist2 = songsArrayFromArtis[randomIndex2]._id;

  return (
    <div className='song'>
      <div className="song__container">

        <div className='song__image-containe'>
          <img
            src={image}
            alt={`Nome da Música ${name}`}
          />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className='song__artist-image'>
          <img
            src={artistObj.image}
            alt={`Imagem do artista ${artistObj.name}`}
            width={75}
            height={75}
          />

        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomIdFromArtist2={randomIdFromArtist2}
          audio={audio}
        />

        <div>
          <p className='song__name'>{name}</p>
          <p>{artistObj.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Song