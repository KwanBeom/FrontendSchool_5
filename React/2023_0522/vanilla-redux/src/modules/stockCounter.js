// action 생성 함수
export const sale = () => {
    return {type: "SALE"}
}
export const sold = () => {
    return {type: "SOLD_OUT"}
}

const initState = {
    message: '판매중'
}

const stockReducer = (state = initState, action) => {
    switch (action.type) {
        case "SALE" :
            return {
                ...state,
                message: '판매중',
            }
        case "SOLD_OUT" :
            return {
                ...state,
                message: '품절',
            }
        default: 
            return state;
    }
}

export default stockReducer