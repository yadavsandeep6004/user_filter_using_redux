import './style.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ACTION from '../store/action'
import Card from '../Card'


const User = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const inputHandler = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        dispatch({ type: ACTION.FETCH_USER,payload: search })
    },[search])


    return (
        <div className='containar'>
            <div className='header'>
                <div>
                <h4>Live User Filter</h4>
                <span className='subtitle'>Search by name and/or location</span>
                <input type='text' placeholder='Search...'
                    value={search}
                    onChange={(e) => inputHandler(e)} />
              </div>
            </div>
            <Card/>      
           
            

        </div>
    )
}

export default User