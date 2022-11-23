import React from 'react'
import { Character } from './Character'
import { Pagination } from './Pagination'
import { useFetchData } from './useFetchData'

export const Main = () => {
    const { data } = useFetchData();

    return (
        <div>
            <div className='character-container'>
                {data.map((character, index) => (
                    <Character character={character} key={index} />
                ))}

            </div>
            <Pagination />
        </div>
    )
}

