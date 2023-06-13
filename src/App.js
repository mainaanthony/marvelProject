import './App.css';
import React from 'react';
import Header from './components/header.jsx';
import Characters from './components/characters.jsx';
import Comics from './components/comics.jsx';
import Creators from './components/creators.jsx';
import Events from './components/events.jsx';
import Series from './components/series.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.jsx';
import CharacterDetails from './components/characterDetails.jsx';
import ComicDetails from './components/comicDetails.jsx';
import CreatorDetails from './components/creatorsDetails.jsx';
import SeriesDetails from './components/serieDetails.jsx'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/characterDetails/:id" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/comicsDetails/:id" element={<ComicDetails />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/creators/creatorDetails/:id" element={<CreatorDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/series" element={<Series />} />
        <Route path="/series/seriesDetails/:id" element={<SeriesDetails />} />
      </Routes>
    </Router>
  );
};

export default App;


// import './App.css';
// import React from 'react';
// import Header from './components/header.jsx';
// import Characters from './components/characters.jsx';
// import Comics from './components/comics.jsx';
// import Creators from './components/creators.jsx';
// import Events from './components/events.jsx';
// import Stories from './components/stories.jsx';
// import { createBrowserRouter, RouterProvider} from 'react-router-dom';
// import Home from './components/home.jsx'


// import CharactersDetails from './components/characterDetails.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Header />, 
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/characters',
//         element: <Characters />,
//         children: [
//           {
//              path: '/characterDetails/:id',
//              element: <CharactersDetails/>
//           }
//         ]
//       },
//       {
//         path: '/comics',
//         element: <Comics />
//       },
//       {
//         path: '/creators',
//         element: <Creators />
//       },
//       {
//         path: '/events',
//         element: <Events />
//       },
//       {
//         path: '/stories',
//         element: <Stories />
//       }
//     ]
//   }
// ]);

// function App() {
//   return (
//       <RouterProvider router={router} />
//   );
// }

// export default App;
