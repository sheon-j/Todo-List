import React from 'react';
import Todo from './Todo';
import { Paper, List, Container } from "@material-ui/core";
import AddTodo from './AddTodo';

class App extends React.Component {
  
  // Todo.js애 아이템 매개변수 넘겨주기
  constructor(props) {
    super(props);
    // items 배열
    this.state = {
      items: [],
    };
  }

  // + 클릭시 items에 todo 객체 추가되는 add 함수
  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length;   // key를 위한 id 추가
    item.done = false;                    // done 초기화
    thisItems.push(item);                 // 리스트에 아이템 추가
    this.setState({ items: thisItems });  // 업데이트는 반드시 this.setState로 해야 함
    console.log("items : ", this.state.items);
  }

  delete = (item) => {
    // 현재 items 불러오기
    const thisItems = this.state.items;
      console.log("Before Update Items : ", this.state.items)
    // 매개변수 item을 제외한 items filter
    const newItems = thisItems.filter(e => e.id !== item.id);
    // setState를 통해 newItems를 items으로 바꾸기
    this.setState({ items: newItems }, () => {
      console.log("Update Items : ", this.state.items)
    });
  }

  render() {
    var todoItems = this.state.items.length > 0 && (
      // JS의 map 함수로 items 배열 반복하여 Todo 컴포넌트 생성
      <Paper style={{ margin: 16}}>
        <List>
          {this.state.items.map((item, idx) => (
            // Todo.js에 props 전달
            < Todo item={item} key={item.id} delete={this.delete}/>
          ))}
        </List>
      </Paper>
    );

    // 생성된 컴포넌트 리턴
    return (
      <div className="App">
        <Container maxWidth="md">
          {/* add 함수 넘겨 주기 */}
          <AddTodo add={this.add} />
          <div className='TodoList'>
            {/* TodoList 배열 */}
            {todoItems}
          </div>
        </Container>
      </div>
    )
  }
}

export default App;