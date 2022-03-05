import React from "react";
// ui 디자인
import { ListItem, ListItemText, InputBase, Checkbox } from "@material-ui/core";

class Todo extends React.Component {
    // App.js로부터 아이템 매개변수 넘겨받기
    constructor(props) {
        // super를 이용해 props 초기화
        super(props);
        // 리액트가 관리하는 state 오브젝트
        this.state = { item: props.item };
    }
    
    render() {
        // item 변수 선언
        const item = this.state.item
        return (
            <ListItem>
                <Checkbox checked={item.done}/>
                <ListItemText>
                    <InputBase
                        inputProps={{ "aria-label": "naked" }}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>
            </ListItem>
        );
    }
}

export default Todo;