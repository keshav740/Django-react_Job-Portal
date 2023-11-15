import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Categories from './Components/CategoriesSection/Categories';
import MiddSection from './Components/MiddSection/MiddSection';
import MiddSection11 from './Components/MiddSection/MiddSection11';
import MiddSection111 from './Components/MiddSection/MiddSection111';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='background'>
      <NavBar />
      <Categories />
      <MiddSection />
      <MiddSection11 />
      <MiddSection111 />
      <Footer />
      </div>
  );
}

export default App;
