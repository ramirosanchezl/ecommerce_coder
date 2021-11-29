import React from 'react';
import ItemListContainer from '../itemListContainer/ItemListContainer'
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer'
import {Routes, Route} from "react-router-dom"
import Cart from "../cart/Cart"

const Main = () => {

    return(
        <main>
            <Routes>

                <Route path="/" element = {<ItemListContainer/>} />

                <Route path="category">
                    <Route path=":categoryName" element={<ItemListContainer />} />
                </Route>

                <Route path="item">
                    <Route path=":productId" element={<ItemDetailContainer />} />
                </Route>

                <Route path="/cart" element={<Cart />}/>

            </Routes>

        </main>
    )
}


export default Main;