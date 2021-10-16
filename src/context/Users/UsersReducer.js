
const reducer=(globalState,action)=>{
    switch(action.type){
    
            case "OBTENER_USUARIO":
                return {
                    ...globalState,
                    products:action.payload
                }
    
    
    
    
            case "AGREGAR_USUARIO":
    
        
                return {
                    ...globalState,
                    products:[
                        ...globalState.USERS,
                        action.payload
                    ]
                }
    
        default:
            return globalState
    
    }
    }
    
    export default reducer