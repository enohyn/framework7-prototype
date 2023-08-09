import React, { useEffect, useState } from 'react';
import {
    Navbar,
    Page,
    BlockTitle,
    Card,
    CardHeader,
    CardContent,
    Button,
    Link
} from 'framework7-react';

export default ({singleProduct} ) => {

    const [product,setProduct]=useState(singleProduct)

    
    return (
        <Page noNavbar={true} >
            <Navbar title='All Products' />
            <BlockTitle>
               Single Product Represented in Cards
            </BlockTitle>

            <Card expandable>
                <CardContent padding={false}>
                    <div
                        style={{
                            backgroundImage: `url(${product.thumbnails})`,
                            backgroundSize: 'cover',
                            height: '240px',
                        }}
                    />
                    <Link
                        cardClose
                        color="black"
                        className="card-opened-fade-in"
                        style={{ position: 'absolute', right: '15px', top: '15px' }}
                        iconF7="xmark_circle_fill"
                    />
                    <CardHeader style={{ display: 'flex', alignItems: 'center', paddingTop: '20px', paddingBottom: '20px' }}> <span style={{ height: '100%' }}>{product.title} <br />Price: ${product.price}</span></CardHeader>
                    <div className="card-content-padding">
                        <p>
                            {product.description}
                        </p>
                        <p>
                            <Button fill round large cardClose>
                                Close
                            </Button>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </Page>

    );
}
