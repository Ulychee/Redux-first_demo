import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM } from './actionType'

export const changeInputAction = (value) => ({
  type:CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type:ADD_ITEM,
})

export const removeItemAction = (id) => ({
  type:REMOVE_ITEM,
  id:id
})
