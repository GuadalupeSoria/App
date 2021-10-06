import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import './Item.css'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../firebase/firebase'


const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])
    const { categoryid } = useParams()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        getProducts('category', '==', categoryid).then(products => {
            setProducts(products)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setLoading(true)
            setProducts([])
        })
    }, [categoryid])

    return (
        <div className="catalogoI" >
             { loading ? "Cargando.." : <ItemList products={products}/> }
        </div>
    )    
    
}

export default ItemListContainer