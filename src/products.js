const products = [
    { id: 1, name: 'Gua sha', price: '$ 1600', category: 'Gua shas', img:'https://images.pexels.com/photos/5928019/pexels-photo-5928019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:'Material:jade', stock: 15},
    { id: 2, name: 'Roller', price: ' $ 1850', category: 'Rollers', img:'https://images.pexels.com/photos/6621355/pexels-photo-6621355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:'Material:jade', stock: 18},
    { id: 3, name: 'Mushroom', price: '$ 1410', category: 'Mushrooms', img:'https://www.dhresource.com/0x0/f2/albu/g12/M01/25/F0/rBVakV9SKI-AI4OcAAI_SG6k7-s445.jpg/gua-sha-tool-rose-quartz-gua-sha-mushroom.jpg', description:'Material:jade', stock: 12}
]

export const getCategories = () => [
    {id:'Gua shas',description:'Gua shas'},
    {id:'Rollers',description:'Rollers'},
    {id:'Mushrooms',description:'Mushrooms'}
]

export const getProducts = (category) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            category ? resolve(products.filter(prod =>prod.category === category)) : resolve(products)
        }, 1000)        
    })
}

export const getProductById = (id) => {    
    return new Promise((resolve, reject) => {
        const product = products.find(prod => Number(prod.id) === Number(id))
        setTimeout(() => resolve(product), 2000)
    })
}
