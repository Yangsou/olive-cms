import Loader from '@/components/Loader';
import useGlobalStore from '@/global-store/GlobalStore';
import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const {loading} = useGlobalStore();
    return loading ? <Loader /> : useRoutes([MainRoutes, LoginRoutes]);
}
