import Banner from "componentes/Banner";
import { Outlet } from 'react-router-dom';

const MainTemplate = () => {
    return (
        <main>
            <Banner/>

            <Outlet />
        </main>
    )
}

export default MainTemplate;