import React,{useState} from 'react';
import { Link, useLocation } from 'react-router-dom';


import Logo from '../Images/Marvel-Studios-logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo">
            <img src={Logo} alt="Marvel" />
        </div>
        <div className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link className="link-style" to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className="link-style" to="/characters" onClick={toggleMenu}>
                Characters
              </Link>
            </li>
            <li>
              <Link className="link-style" to="/comics" onClick={toggleMenu}>
                Comics
              </Link>
            </li>
            <li>
              <Link className="link-style" to="/creators" onClick={toggleMenu}>
                Creators
              </Link>
            </li>
            <li>
              <Link className="link-style" to="/events" onClick={toggleMenu}>
                Events
              </Link>
            </li>
            <li>
              <Link className="link-style" to="/series" onClick={toggleMenu}>
                Series
              </Link>
            </li>
            {/* Add links for other categories */}
          </ul>
        </div>


        {/* <div className="search-bar">
          <h2>gty</h2>
          
        </div> */}



        
      </div>
      
    </>
  );
};

export default Header;
// import React, {useState} from 'react'
// import axios from 'axios';
// // import { FaSearch } from 'react-icons/fa'
// import { Outlet, Link, useLocation } from 'react-router-dom'

// const Header = () => {
//  const location = useLocation()   
//  const[categoryData, setCategoryData] = useState([])


//  const fetchData = async () =>{
//     try{

//         let apiUrl
//         if (location.pathname === '/characters') {
//             apiUrl = 'https://gateway.marvel.com:443/v1/public/characters?limit=50&apikey=2fc565b28dfea69add6bcb3488a29237';
//           } else if (location.pathname === '/comics') {
//             apiUrl = 'https://gateway.marvel.com:443/v1/public/comics?limit=50&apikey=2fc565b28dfea69add6bcb3488a29237';
//           }
//           const response = await axios.get(apiUrl)
//            const data = response.data.data.results
//           setCategoryData(data)


//         }catch(error){
//             console.error(error)
//         }
//  }



//  fetchData()
//    //render cards base on category
//    const renderCards = () =>{
//     if(categoryData.length === 0){
//          return <div>No Data Available</div>
//     }

//     if(location.pathname === '/characters'){
//         return categoryData.map((item) =>(
//       <div key={item.id} className='card'>

//     <h3>{item.name}</h3>
//     <p>Year: {item.year}</p>
//       </div>

//         ))
//     }


//     if(location.pathname === '/comics'){
//         return categoryData.map((item) =>(
//       <div key={item.id} className='card'>
//     <h3>{item.title}</h3>
//     <p>Year: {item.year}</p>
//       </div>

//         ))
//     }

// return null


//    }











//     // start












//     // *end
//     return (
//         <>
//             <div className='navbar'>
//                 <div className='logo'>
//                     <h1><span>Marvel</span>Hub</h1>
//                 </div>
//                 <div className='nav-items'>
//                     <ul className='nav-links'>
//                         <Link className='link-style' to="/"><li>Home</li></Link>
//                         <Link className='link-style' to="/characters"  onClick={fetchData}    ><li>Characters</li></Link>
//                         <Link className='link-style' to="/comics" onClick={fetchData} ><li>Comics</li></Link>
//                         <Link className='link-style' to="/creators"><li>Creators</li></Link>
//                         <Link className='link-style' to="events"><li>Events</li></Link>
//                         <Link className='link-style' to="/stories"><li>Stories</li></Link>
//                     </ul>
//                 </div>
//                 <div className='search-bar'>
//                     <h2>gty</h2>
//                 </div>
//             </div>
//             <div className="card-container">{renderCards()}</div>
//             <Outlet />
//         </>
//     )
// }

// export default Header