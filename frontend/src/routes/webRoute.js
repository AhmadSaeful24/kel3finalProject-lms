import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PusatPel from "../pages/pusatPelatihan";

const UserRoute = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<PusatPel />} />

        </Routes>
        </BrowserRouter>
    )
}

export default UserRoute