import './App.css'
import RoutesC from "./routes/routes";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import '../../../styles/index.module.scss';


function App() {


    return (
            <div className="App">
                <Header/>
                <RoutesC/>
                <Footer/>
            </div>

    )
}

export default App
