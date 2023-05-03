import './styles/App.css'
import Generic from './routes/Generic'
import { Header, Footer } from './components/home';
import { Home } from './pages/Home'
import  {UserAuthContextProvider}  from './context/UserAuthContext';

function App() {
  return (
    <>
    <UserAuthContextProvider>
        <Header />
        <div className="d-flex flex-column min-vh-100">
          <main className="flex-grow-1">
          <Generic>
            <Home />      
          </Generic>
          </main>
            <Footer />
        </div>
    </UserAuthContextProvider>
    </>
  );
}

export default App;
