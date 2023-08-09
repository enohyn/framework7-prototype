import React ,{ useEffect,useState }  from 'react';
import { App, View,} from 'framework7-react';
import '../node_modules/framework7/framework7-bundle.css';
import 'framework7-icons'
import Products from './components/Products';
import AccordionProducts from './components/AccordionProducts';
import { fetchAllProducts } from './services/services';

const routes = [
  {
    path: '/',
    component: AccordionProducts
  },
  {
    path: '/products',
    component: Products
  },

]

const f7Params = {
  routes,
  name: 'frame7-app',
  darkMode: 'false'
}


export default () => {

  const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const allProducts = await fetchAllProducts();
            setProducts(allProducts)
        }
        fetchData();
        
    }, [])


  // Main Framework7 App component where we pass Framework7 params
  return (
    <App {...f7Params}>
      <View main url='/' browserHistory="true" >

      </View>
    </App>)
}

