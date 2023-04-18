//import styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import list of pages
import { Home } from './pages/Home';
import { DisplayBreweries } from './pages/DisplayBreweries';
import { LogIn } from './pages/LogIn';
import { Footer } from './components/Footer';
import { Search } from './pages/Search';
import { GetBreweryDetails } from './pages/GetBreweryDetails';
import { PageNotFound } from './pages/PageNotFound';
import { NavBar } from './components/NavBar';
//import page navigation newest version of react router dom
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

//create path for pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/breweries", element: <DisplayBreweries /> },
      { path: "/search", element: <Search /> },
      { path: "/contact", element: <LogIn /> },
      { path: "/breweries/:id", element: <GetBreweryDetails /> },
      { path: "*", element: <PageNotFound /> }
    ]
  }
])

//putting elements in page
function Root() {
  return (
    <div className='App'>
      <header>
        <NavBar />
      </header>
      <section>
        <main>
          {/* anything above and below Outlet will display in every page */}
          <Outlet />
        </main>
      </section>
      <Footer />
    </div>
  )
}

function App() {
  return <RouterProvider router={router} />;
}
export default App;
