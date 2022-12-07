import PropTypes from 'prop-types'

const List = ({categorias}) => {
    return (
        <div class="w-25 p-3">
            <h5>Categorías Perfumes</h5>
            <ul class="list-group">
                {
                    categorias.map((categoria) => {
                        return <button type="button" class="list-group-item list-group-item-action">{categoria.nombre}</button>
                    })
                }
            </ul>
        </div>
    )
}

List.proptype = {
    categorias: PropTypes.array.isRequired
}

export default List