import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/main-layout'
import HomePage from './pages/home'
import Login from './pages/login'
import Sms from './pages/sms'
import Servis from './pages/servis'
import Bilet from './pages/bilet'
import Kino from './pages/kino'
import Kinolar from './pages/kinolar'
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<HomePage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path= "/sms" element={<Sms />} />
                    <Route path="/servis" element={<Servis/>} />
                    <Route path="/bilet" element={<Bilet/>} />
                    <Route path="/kino" element={<Kino/>} />
                    <Route path="/kinolar" element={<Kinolar/>} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router