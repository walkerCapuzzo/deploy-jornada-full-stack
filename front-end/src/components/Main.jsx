import React from 'react'
import ItemList from './itemList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

const Main = ({ type }) => {
    return (

        <div className='main'>
            {/* item List de Artistas */}
            {type === "artists" || type === undefined ? (
                <ItemList
                    title="Artistas"
                    items={5}
                    itemsArray={artistArray}
                    path='/artists'
                    idPath='artist'
                />
            ) : ( <></>)}

            {/* item List de Artistas */}
            {type === "songs" || type === undefined ? (
                <ItemList
                    title="Músicas"
                    items={10}
                    itemsArray={songsArray}
                    path='/songs'
                    idPath='song'
                />
            ) : ( <></>)}
            
        </div>
    )
}

export default Main