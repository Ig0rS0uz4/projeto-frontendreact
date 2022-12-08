import React, {useState} from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "../Pages/Home"
import Carrinho from "../Pages/Carrinho"
import pratos from "../pratos.json"
import Final from "../Pages/Final"

function Router(){
    const [carrinho, setCarrinho] = useState([])
    const [comidas, setComidas] = useState(pratos.pratos)

    return (
        <BrowserRouter>
            <Routes>
                <Route
                path="/"
                element={
                    <Home
                    comidas={comidas}
                    carrinho={carrinho}
                    setCarrinho={setCarrinho}/>
                }/>
                <Route
                path="/cart"
                element={<Carrinho
                carrinho={carrinho}
                setCarrinho={setCarrinho}/>}
                />
                <Route
                path="/final"
                element={<Final
                carrinho={carrinho}
                setCarrinho={setCarrinho}/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router