import PropTypes from 'prop-types'

const Navbar = ({children}) => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><h3>Perfumeria E-Commerce</h3></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">PERFUMES <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">MAKE UP</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            SKIN CARE
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">FACIAL</a>
                            <a class="dropdown-item" href="#">CORPORAL</a>
                            <a class="dropdown-item" href="#">SOLARES</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Ver más</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">BENEFICIOS</a>
                    </li>
                </ul>
            </div>
            <div>
                {children}
            </div>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Búsqueda" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Búsqueda</button>
            </form>
        </nav>
    )
}

Navbar.proptype = {
    children: PropTypes.element
}

export default Navbar