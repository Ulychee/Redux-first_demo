import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM} from './actionType'

const defaultState = {
  inputValue:'',
  placeholder:'Write something',
  list:[
    "早八点开晨会，分配任务",
    "早九点 开需求沟通会",
    "开始搬砖"
  ]
}

export default (state = defaultState,action) => {
  //reducer里只能接收state，不能改变state
  if(action.type === CHANGE_INPUT){
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === ADD_ITEM){
    let newState = JSON.parse(JSON.stringify(state))
    if(newState.inputValue !== ''){
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    }
  }
  if(action.type === REMOVE_ITEM){
    let newState = JSON.parse(JSON.stringify(state))
    const id = action.id
    newState.list.splice(id,1) //arr.splice(a,b) a--删除位置，b--从删除位置开始删除几个元素
    // const newArr = newState.list.filter((el,idx)=>{
    //   if(idx !== id){
    //     return el
    //   }
    // })
    // newState.list = newArr
    return newState
  }

  return  state
}