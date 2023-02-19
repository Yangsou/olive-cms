import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, useMediaQuery } from '@mui/material';

// project import
import Drawer from './Drawer';
import Header from './Header';
import navigation from '@/menu-items';
import Breadcrumbs from '@/components/@extended/Breadcrumbs';
import useGlobalStore from '@/global-store/GlobalStore';
import Loader from '@/components/Loader';

// types

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const globalStore = useGlobalStore();
    if (!globalStore.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    const theme = useTheme();
    const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));
    const {drawerOpen, toggleDrawerOpen} = useGlobalStore();

    // drawer toggler
    const handleDrawerToggle = () => {
        toggleDrawerOpen(!drawerOpen)
    };

    // set media wise responsive drawer
    useEffect(() => {
        toggleDrawerOpen(!matchDownLG);

    }, [matchDownLG]);

    return (
        <>
            {
                globalStore.loading &&
                <Loader />
            }
            <Box sx={{ display: 'flex', width: '100%' }}>
                <Header open={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
                <Drawer open={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
                <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                    <Toolbar />
                    <Breadcrumbs navigation={navigation} title />
                    <Outlet />
                </Box>
            </Box>
        </>
    );
};

export default MainLayout;
