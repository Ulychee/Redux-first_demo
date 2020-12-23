import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List} from 'antd'
import store from'./store'
// import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM} from './store/actionType'
import { changeInputAction, addItemAction, removeItemAction } from './store/actionCreators'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()//getState() --- 获取reducer中默认导出的state 
    store.subscribe(this.storeChange)  //订阅   监听store变化 store.subscribe(func)
  }

  storeChange = () => {
    this.setState(store.getState())
  }

  changeValue = (e) => {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  addItem = () => {
    const action = addItemAction()
    store.dispatch(action)
  }

  removeItem = (id) => {
    const action = removeItemAction(id)
    store.dispatch(action)
  }

  render(){
    return (
      <div style={{margin:'10px'}}>
        <div>
          <Input 
            placeholder={this.state.placeholder} 
            style={{width:"252px",marginRight:'10px'}} 
            onChange={this.changeValue}
            value={this.state.inputValue}
          />
          <Button 
            type="primary"
            onClick={this.addItem}
          >增加</Button>
        </div>
        <div style={{margin:10+'px',width:300+'px'}}>
          <List 
            bordered
            dataSource={this.state.list}
            renderItem={(item,idx) => <List.Item onClick={()=>this.removeItem(idx)}>{item}</List.Item>}
          />
        </div>
      </div>
    )
  }
}

export default TodoList