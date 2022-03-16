import React from "react";
// ui 디자인
import { 
    ListItem, ListItemText, InputBase, Checkbox,
    ListItemSecondaryAction, IconButton
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

class Todo extends React.Component {
    // App.js로부터 아이템 매개변수 넘겨받기
    constructor(props) {
        // super를 이용해 props 초기화
        super(props);
        // 리액트가 관리하는 state 오브젝트 (value인 item, 수정을 위한 readOnly)
        this.state = { item: props.item, readOnly: true };
        this.delete = props.delete;
    }
    
    // 체크박스 업데이트 함수
    checkboxEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({ item: thisItem });
    }

    // 삭제 함수
    deleteEventHandler = () => {
        this.delete(this.state.item);
    }

    // 수정 모드 함수
    offReadOnlyMode = () => {
        console.log("Event!", this.state.readOnly)
        this.setState({ readOnly: false}, () => {
            console.log("ReadOnly?", this.state.readOnly)
        })
    }

    // 수정 완료 함수
    enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            this.setState({ readOnly: true });
        }
    }

    // 수정 함수
    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
    }

    render() {
        // item 변수 선언
        const item = this.state.item
        return (
            <ListItem>
                {/* 체크박스 */}
                <Checkbox 
                    checked={item.done}
                    onChange={this.checkboxEventHandler}
                />
                
                {/* todo 콘텐츠 */}
                <ListItemText>
                    <InputBase
                        inputProps={{
                            "aria-label": "naked",
                            readOnly: this.state.readOnly,  // 속성 설정 
                        }}
                        type="text"
                        id={item.id}
                        name={item.id}      // 리스트 구분을 위한 id 연결
                        value={item.title}  // 리스트 구분을 위한 id 연결
                        multiline={true}
                        fullWidth={true}
                        onClick={this.offReadOnlyMode}          // onClick: 수정 모드 함수 연결
                        onChange={this.editEventHandler}        // onChange: 수정 함수 연결
                        onKeyPress={this.enterKeyEventHandler}  // onKeyPress: 수정 완료 함수 연결 
                    />
                </ListItemText>
                
                {/* 삭제 버튼 */}
                <ListItemSecondaryAction>
                    {/* 아이콘에 버튼 기능을 더하는 태그 */}
                    <IconButton 
                        aria-label="Delete Todo"
                        // onClick: 삭제 함수 연결
                        onClick={this.deleteEventHandler}
                    >
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Todo;