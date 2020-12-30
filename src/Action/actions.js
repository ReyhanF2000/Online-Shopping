export const ACTIONS = {
    OPEN_SIDEBAR: 'OPEN_SIDEBAR',
    PRODUCTS_DATA: 'PRODUCTS_DATA',
    TOTAL_SHOP: 'TOTAL_SHOP',
    INCREASE_SHOP: 'INCREASE_SHOP',
    DECREASE_SHOP: 'DECREASE_SHOP',
    DELETE_SHOP: 'DELETE_SHOP',
    RESET_SHOP: 'RESET_SHOP',
}

export const ShowSidebar = (value) => ({ type: ACTIONS.OPEN_SIDEBAR, payload: value })
export const TotalShop = (id) => ({ type: ACTIONS.TOTAL_SHOP, payload: id })
export const Increase = (id) => ({ type: ACTIONS.INCREASE_SHOP, payload: id })
export const Decrease = (id) => ({ type: ACTIONS.DECREASE_SHOP, payload: id })
export const Delete = (id) => ({ type: ACTIONS.DELETE_SHOP, payload: id })
export const Reset = () => ({ type: ACTIONS.RESET_SHOP })



