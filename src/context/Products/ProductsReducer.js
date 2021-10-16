//generar funciones que alteran el edo.globalState

const reducer=(globalState,action)=>{
switch(action.type){

        case "OBTENER_PRODUCTO":
            return {
                ...globalState,
                products:action.payload
            }




        case "AGREGAR_PRODUCTO":

    
            return {
                ...globalState,
                products:[
                    ...globalState.products,
                    action.payload
                ]
            }

    default:
        return globalState

}
}

export default reducer