import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className='App'>
            <p>Victory Vault</p>
            <p>Play, Win and Earn</p>
            <p>Compete against other players and win Real Money</p>

            <Link to='/lol'>League of Legends</Link>
        </div>
    );
}

export default Home
