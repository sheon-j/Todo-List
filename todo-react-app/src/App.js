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
      items: [
        { id: "0", title: "Hello World 1", done: true},
        { id: "1", title: "Hello World 2", done: true},
      ],
    };
  }

  render() {
    var todoItems = this.state.items.length > 0 && (
      // JS의 map 함수로 items 배열 반복하여 Todo 컴포넌트 생성
      <Paper style={{ margin: 16}}>
        <List>
          {this.state.items.map((item, idx) => (
            < Todo item={item} key={item.id} />
          ))}
        </List>
      </Paper>
    );

    // 생성된 컴포넌트 리턴
    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo/>
          <div className='TodoList'>
            {todoItems}
          </div>
        </Container>
      </div>
    )
  }
}

export default App;