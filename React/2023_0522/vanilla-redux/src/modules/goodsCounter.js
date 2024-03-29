// action 생성 함수
export const addNumber = () => {
    return {type: "ADD"}
}
export const substractNumber = () => {
    return {type: "SUBSTRACT"}
}

const initState = {
    stock: 100,
    goods: 1,
}

const goodsReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD" :
            return {
                ...state,
                stock: state.stock - 1,
                goods: state.goods + 1
            }
        case "SUBSTRACT" :
            return {
                ...state,
                stock: state.stock + 1,
                goods: state.goods - 1,
            }
        default: 
            return state;
    }
}

export default goodsReducer