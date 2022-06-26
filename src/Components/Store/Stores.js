import React, { useEffect, useState } from 'react'
import "./Store.css"
import axios from 'axios';
import Store from './Store';


const URL = "http://localhost:5000/stores";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
}
const Stores = () => {
    const [stores, setStore] = useState();
    useEffect(() => {
        fetchHandler().then(data => setStore(data.stores));
    }, []);  //due to empty array called only once
    console.log(stores);
    return (
        <div>
            <ul>
                {stores && stores.map((store, i) => (
                    <li key={i}>
                        <Store store={store} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Stores;