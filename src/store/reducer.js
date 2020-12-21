const defaultState = {
  inputValue:'Write something',
  list:[
    "早八点开晨会，分配任务",
    "早九点 开需求沟通会",
    "开始搬砖"
  ]
}

export default (state = defaultState,action) => {
  //reducer里只能接收state，不能改变state
  if(action.type === 'changeInput'){
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    console.log(newState)
    return newState
  }
  if(action.type === 'addItem'){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === 'removeItem'){
    let newState = JSON.parse(JSON.stringify(state))
    console.log(newState,action.id)
    const id = action.id
    newState.list.splice()
  }

  return  state
}