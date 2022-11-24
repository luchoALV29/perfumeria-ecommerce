import Proptypes from 'prop-types'


const List = ({Listas})=> {
    return(
        <div>
          {
            listas.map((lista)=>{
                return <p>listas</p>
            })
          }  
        </div>
    )
}
List.proptype = {
    lista: Proptypes.array.isRequired
}
export default list;