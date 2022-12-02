import React from 'react'
import { useState } from 'react'
import { Character } from './Character'
import { Pagination } from './Pagination'
import { useFetchData } from './useFetchData'

export const Main = () => {
    const { data } = useFetchData();
    const [currentePage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(8);
    const indexOfLastRecord = currentePage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)
    return (
        <div>
            <div className='character-container'>
                {data.map((character, index) => (
                    <Character character={character} key={index} />
                ))}

            </div>
            <Pagination
                nPages={nPages}
                currentePage={currentePage} />
        </div>
    )
}

