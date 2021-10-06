import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { 
    collection, 
    getDocs, 
    query, 
    where, 
    doc, 
    getDoc, 
    writeBatch, 
    addDoc, 
    Timestamp 
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA32luUmKbZFU7S1NfabyImb0DJfmze6BQ",
    authDomain: "sph-soria.firebaseapp.com",
    projectId: "sph-soria",
    storageBucket: "sph-soria.appspot.com",
    messagingSenderId: "541916834752",
    appId: "1:541916834752:web:2f5e5172bdd01560b5b625",
    measurementId: "G-MPQXCJQGRN"
  };

const app = firebase.initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const getCategory = () => {
    return new Promise((resolve, reject) => {
        getDocs(collection(db, 'category')).then((querySnapshot) => {
            const category = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }) 
            resolve(category)
        }).catch((error) => {
            reject(`Error obteniendo categorias: ${error}`)
        })
    }) 
}

export const getProducts = (key, operator, value) => {
    return new Promise((resolve, reject) => {
        const collectionQuery = key && operator && value ?  query(collection(db, 'ItemCollection'), where(key, operator, value)) : collection(db, 'ItemCollection')
        
        getDocs(collectionQuery).then((querySnapshot) => {
            const products = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }) 
            resolve(products)
        }).catch((error) => {
            reject(`Error obtendiendo productos ${value ? 'por categoria' : ''}: ${error}` )
        })

    })
}

export const getProductById = (itemid) => {
    return new Promise((resolve, reject) => {
        getDoc(doc(db, 'ItemCollection' , itemid)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            resolve(product)
        }).catch((error) => {
            reject('Error obteniendo producto: ' + error)
        })
    })
}

export const createOrder = (objOrder) => {
    return new Promise((resolve, reject) => {
        objOrder = {
            ...objOrder,
            date: Timestamp.fromDate(new Date())
        }
        const batch = writeBatch(db)
        const outOfStock = []
            
        objOrder.ItemCollection.forEach((prod, i) => {
            getDoc(doc(db, 'ItemCollection', prod.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock >= objOrder.ItemCollection[i].quantity) {
                    batch.update(doc(db, 'ItemCollection', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - objOrder.ItemCollection[i].quantity
                    })
                } else {
                    outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
                    
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder).then(() => {
                batch.commit().then(() => {
                    resolve('La orden se ejecutó con éxito')
                })
            }).catch((error) => {
                reject('Error al ejecutar la orden: ' + error)
            })
    }})
}