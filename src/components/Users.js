import usersIcon from '../images/usersIcon.jpg';
import male from '../images/male.jpg';
import female from '../images/female.png';
import './Users.css';
const users = () => {
    return (
        <div className="userBody">
            <div className='hello'>

                <h1 className='hello1'>Hello, <strong>Emerald</strong></h1>
                <p>Welcome to your dashboard. Kindly sort through the user base.</p>
            </div>
            <div className='searchTxt pa2'>
                <input 
                className='searchIn pa3 br4' 
                type='search' 
                placeholder='   Find a user'
                ></input>
            </div>
            <div className='showUsers pa4'>
                <h3>Show Users</h3>
                <div className='icons'>
                    <div className='all'>
                        <img src={usersIcon}></img>
                        <p>All Users</p>
                    </div>
                    <div className='male'>
                        <img src={male}></img>
                        <p>Male Users</p>
                    </div>
                    <div className='female'>
                        <img src={female} onClick='www.facebook.com'></img>
                        <p>Female Users</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default users;