import './App.css';
import logo from './logo.svg';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import ViewProduct from './components/ViewProduct';
import Login from './components/Login';
import NavBar1 from './components/NavBar1';
import Product from './components/Product';
import DealerRegistration from './components/DealerRegistration';
import CreateProduct from './components/CreateProduct';


/*
	React Router is a standard library for routing in React. 
	It enables the navigation among views of various components in a React Application, 
  allows changing the browser URL, and keeps the UI in sync with the URL. 

	React Router is a JavaScript framework that lets us handle client and server-side 
  routing in React applications. 
  It enables the creation of single-page web or mobile apps that allow navigating without 
  refreshing the page. 
  It also allows us to use browser history features while preserving the right application
   view.

   Used Version6 of Router

 > npm install react-router-dom --save
*/
// npm install react-router-dom

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Product Management System</h1>
      </header>

      <section>
        <div style={{ backgroundImage: "url(/images/pms2.webp)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover', minHeight:'140vh',minWidth:'100vw'}}> 
          <Router>
              <NavBar1></NavBar1>
            <Routes>
                <Route path='/' exact Component={HomePage} />
                <Route path='/register' Component={DealerRegistration} />
                <Route path='/login' Component={Login} />
                <Route path='/product' Component={Product} />
                <Route path='/viewProduct/:id' Component={ViewProduct}/>
                <Route path='/addProduct/:id' Component={CreateProduct} />
                
            </Routes>
           </Router>
        </div>
      </section>

       <footer className='footer'>
        <p>&copy; All Right Reserved to Wells Fargo</p>
      </footer> 
    </div>
  );
}

export default App;
