
import CartWidget from "../cartWidgets/CartWidget"

const NavBar = () => {
    return (
        <div className="navegador">
            <div className="logo">
                <img src="./src/assets/logo.png" alt="LOGO"></img>
            </div>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Tienda</a>
                <a href="#">Nosotros</a>
                <a href="#">Contacto</a>
            </nav>

            <div className="carri-busca">
                <div className="buscador">
                    <input type="text" name="name" placeholder="Buscar Producto" />
                    <img src="./src/assets/lupa (2).png" alt="Lupa"></img>

                </div>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar