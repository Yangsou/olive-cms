import './App.css'
import ThemeCustomization from '@/themes';
import ScrollTop from '@/components/ScrollTop';
import Routes from '@/routes';

function App() {
  return (
    <ThemeCustomization>
        <ScrollTop>
            <Routes />
        </ScrollTop>
    </ThemeCustomization>
  )
}

export default App
