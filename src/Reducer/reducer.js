import { data } from '../Data/data'
import { ACTIONS } from '../Action/actions'

export function reducer(state, action) {
    return (ACTION_HANDLERS[action.type] ||
        (() => state))(state, action.payload)
}

const ACTION_HANDLERS = {
    [ACTIONS.OPEN_SIDEBAR]: handleOpenSidebar,
    [ACTIONS.PRODUCTS_DATA]: handleData,
    [ACTIONS.TOTAL_SHOP]: handleTotalShopItems,
    [ACTIONS.INCREASE_SHOP]: handleIncreaseItem,
    [ACTIONS.DECREASE_SHOP]: handleDecreaseItem,
    [ACTIONS.DELETE_SHOP]: handleDeleteItems,
    [ACTIONS.RESET_SHOP]: handleResetItems,
}

function handleOpenSidebar(state, payload) {
    return {
        ...state,
        show: payload
    }
}

function handleData(state, payload) {
    return {
        ...state,
        items: payload
    }
}

function IncreseNumberItem(id, copyState) {
    const index = copyState.findIndex(item => item.id === id)
    const item = { ...copyState[index] }
    item.number = item.number + 1
    copyState[index] = item
    return copyState
}

function UnshiftItem(id, copyState, copyData) {
    const index = copyData.findIndex(item => item.id === id)
    const item = { ...copyData[index] }
    item.number = item.number + 1
    copyState.unshift(item)
    return copyState
}

function handleTotalShopItems(state, payload) {
    debugger
    const copyData = [...data]
    const copyState = [...state.items]
    const findSItem = copyState.find(item => item.id === payload)
    return {
        ...state,
        items: (findSItem ? IncreseNumberItem(payload, copyState) : UnshiftItem(payload, copyState, copyData))
    }
}

function handleIncreaseItem(state, payload) {
    const copyState = [...state.items]
    const index = copyState.findIndex(item => item.id === payload)
    const item = { ...copyState[index] }
    item.number = item.number + 1
    copyState[index] = item
    return {
        ...state,
        items: copyState
    }
}

function handleDecreaseItem(state, payload) {
    const copyState = [...state.items]
    const index = copyState.findIndex(item => item.id === payload)
    const item = { ...copyState[index] }
    item.number = item.number - 1
    copyState[index] = item
    if (copyState[index].number === 0) {
        copyState.splice(index, 1)
    }
    return {
        ...state,
        items: copyState
    }
}

function handleDeleteItems(state, payload) {
    const copyState = [...state.items]
    const index = copyState.findIndex(item => item.id === payload)
    copyState.splice(index, 1)
    return {
        ...state,
        items: copyState
    }
}

function handleResetItems(state) {
    return {
        ...state,
        items: []
    }
}
