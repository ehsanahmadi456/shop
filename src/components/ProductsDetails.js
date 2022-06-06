import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Style
import styles from "./ProductsDetails.module.scss";

// Components
import Loader from "./Loader"

const ProductsDetails = () => {

    const params = useParams();
    const id = params.id

    const [products, setProducts] = useState([]);
    const [resultGet, setResultGet] = useState(false);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProducts(response.data);
                setResultGet(true)
            })
    }, []);

    return (
        <div>
            {
                resultGet ? 
                <div className={styles.container}>
                    <img className={styles.image} src={products.image} alt="product" />
                    <div className={styles.textContainer}>
                        <h3>{products.title}</h3>
                        <p className={styles.description}>{products.description}</p>
                        <p className={styles.category}><span>category: </span>{products.category}</p>
                        <div className={styles.buttonContainer}>
                            <span className={styles.price}>{products.price} $</span>
                            <Link to="/products">Back to Shop</Link>
                        </div>
                    </div>
                </div> 
                : <Loader />
            }
        </div>
    );
};

export default ProductsDetails;