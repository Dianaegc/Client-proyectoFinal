//generar funciones que alteran el edo.globalState

const reducer = (globalState, action) => {
  switch (action.type) {
    case "OBTENER_PRODUCTOS":
      return {
        ...globalState,
        products: action.payload,
      };

    case "OBTENER_CADAPRODUCTO": //
    console.log("action payload",action.payload)
      return {
        ...globalState,
        product: action.payload,
      };
    //

    case "AGREGAR_PRODUCTO":
      return {
        ...globalState,
        products: [...globalState.products, action.payload],
      };

    default:
      return globalState;
  }
};

export default reducer;
