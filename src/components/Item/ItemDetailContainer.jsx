import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
/* import { db } from 'firebase/firestore'; */
import { getDoc, doc, collection } from 'firebase/firestore';
import { getFirestore  } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState ({});
    const {detalleId} = useParams ();

        useEffect(() => {
            const db = getFirestore()
            const itemCollection = collection(db, 'productos');
            const ref = doc(itemCollection, detalleId);
            getDoc(ref).then((res) => {
                setItem({ id: res.id, ...res.data() });
            });
        }, [detalleId]);
	
        return( 
            <div>
                <ItemDetail item={item} />;
            </div>)

};

export default ItemDetailContainer;
