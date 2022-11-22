import { GlobalStyles } from './styles/GlobalStyles';

import Header from './components/Header';
import Order from './components/Order';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export function App() {
    return (
        <>
            <GlobalStyles />
            <ToastContainer position='bottom-center' />
            <Header />
            <Order />
        </>
    );
}
