import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { getItem } from '../utils/storage'
import Main from '../pages/Main';
import Dashborde from '../pages/Dashborde';

function ProtectedRoutes({ redirectTo }) {
    const isAuthenticated = getItem('token');
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}
function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />

            <Route element={<ProtectedRoutes redirectTo='/' />}>
                <Route path='/Dashborde' element={<Dashborde />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;