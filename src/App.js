import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import styles from './style/global.module.scss'
const App = () => {
  return (<div className={styles.app}>
    <Layout>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
    </Routes>
    </Layout>
  </div>);
}

export default App;