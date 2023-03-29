import useGlobalStore from '@/global-store/GlobalStore';
import { auth } from '@/services';
import { onAuthStateChanged } from 'firebase/auth';
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ==============================|| NAVIGATION - SCROLL TO TOP ||============================== //
type Props = {
    children: ReactNode;
}
const ScrollTop = ({ children }: Props) => {
    const location = useLocation();
    const { pathname } = location;
    const globalStore = useGlobalStore();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                globalStore.setAuthenticated()
            } else {
                globalStore.setLoading(false)
            }
        })
    }, [])
    return <>{children}</>;
};

export default ScrollTop;
