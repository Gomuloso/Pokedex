import { React, useState } from 'react'

export default function Searcher({ userSeach, setUserSearch }) {

    const [temporalSearch, setTemporalSearch] = useState('')

    const handleChange = (e) => {
        setTemporalSearch(e.target.value)
    }

    const handleClick = () => {
        setUserSearch(temporalSearch)
    }

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            handleClick()
        }
    }
    
    return (
        <div>
            <input type="text" placeholder="Search Pokemon" onChange={handleChange} onKeyUp={handleKeyUp} />
            <button onClick={
                handleClick
            }>Search</button>

        </div>
    )
}