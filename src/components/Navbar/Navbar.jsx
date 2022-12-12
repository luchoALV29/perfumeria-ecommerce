import PropTypes from 'prop-types'

const Navbar = ({categorias, children}) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><h3>Perfumeria E-Commerce</h3></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            PERFUMES
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {
                                categorias.map((categoria)=>{
                                    return <a key={categoria.id} className="dropdown-item" href={`/categoria/${categoria.id}`}>{categoria.nombre}</a>
                                })
                            }
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                {children}
            </div>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Búsqueda" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Búsqueda</button>
            </form>
        </nav>
    )
}

Navbar.proptype = {
    categorias: PropTypes.array.isRequired,
    children: PropTypes.element
}

export default Navbar