
import './style.css'
import {useSelector } from 'react-redux'

const Card =()=>{
    const users = useSelector(state=>state.user)
    return(
        <div className='user-list'>
            {
                users.map((user,i)=>(
                  <div key={i} className='user-info'>
                    <div>
                        <img src={user.picture.large} alt={user.name.first}/>
                    </div>
                    <div>
                        <h4>{user.name.first}  {user.name.last}</h4>
                        <p>{user.location.state} ,{user.location.country}</p>
                    </div>
                  </div>
                ))
            }
        </div>
    )
}

export default Card