import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import AboutApp from "./pages/about";
import ContactApp from "./pages/contact";
import HomeApp from "./pages/home";
import SolutionsApp from "./pages/solutions";
import NotFound from "./pages/notfound";
import ReactDOM from "react-dom/client";
import Header from "./pages/header";
import ScrollToTop from "./pages/ScrollToTop";
export default function App() 
{
    return(
        <BrowserRouter>
        <ScrollToTop/>
        <Header/>
        <Outlet/>
            <Routes>
                <Route path="/">
                    <Route index element={<HomeApp/>}/>
                    <Route path="about" element={<AboutApp />}/>
                    <Route path="contact" element={<ContactApp/>}/>
                    <Route path="solutions" element={<SolutionsApp/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)