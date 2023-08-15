import React, { useEffect, useState } from 'react'
import { Block, List, Navbar, BlockTitle, Page, ListItem, AccordionItem, AccordionContent, Link } from 'framework7-react'
import { fetchAllProducts } from '../services/services';
import Products from './Products';


export default () => {

    const [products, setProducts] = useState([]);
    const [singleProd, setSingleProd] = useState({})
    useEffect(() => {
        
        const fetchData = async () => {
            const allProducts = await fetchAllProducts();
            setProducts(allProducts)

        }
        fetchData();
    }, [])

    return (
        <Page >
            <Navbar title='Products Accordion' />
            <BlockTitle>
                List of All Products in Card <br />
                Total Products Found : {products.length}
            </BlockTitle>
            {products.map((product,index) => (
                <List key={product.id} accordionList >
                    <ListItem accordionItem title={product.title}>
                        <AccordionContent>
                            <Block>
                                <p>
                                    {product.description}
                                </p>
                                <img style={{ width: '100%' }} src={product.images[2]} alt="product-photo" />
                                <Link href={`/products/${product.id}`} >Learn more about the Products</Link>
                            </Block>
                        </AccordionContent>
                    </ListItem>
                </List>
            ))}
        </Page>
    )
}

