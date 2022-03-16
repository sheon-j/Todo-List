import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        // 입력을 저장할 오브젝트
        this.state = { item: { title: "" } };
        // App.js로 부터 app 함수 넘겨 받기
        this.add = props.add;
    }
    // 텍스트 입력
    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
        console.log(thisItem);
    }
    
    // + 버튼 클릭
    onButtonClick = () => {
        this.add(this.state.item); // add 함수 사용
        this.setState( {item: {title: ""} })
    }

    // Enter 키 입력
    enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
            this.onButtonClick();
        }
    }

    render() {
        return (
            // 입력창과 +버튼
            <Paper style={{ margin: 16, padding: 16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                        <TextField 
                            placeholder="Add Todo here" 
                            fullWidth
                            // 키보드로 입력이 들어올 때 마다 실행, onInputChange 함수 연결
                            onChange={this.onInputChange}
                            // 입력하는 정보 item에 저장
                            value={this.state.item.title}
                            // 엔터키 이벤트 핸들러 함수 연결
                            onKeyPress={this.enterKeyEventHandler}
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button fullWidth 
                            color="secondary" 
                            variant="outlined"
                            // 클릭 시 onButtonClick 함수 연결
                            onClick={this.onButtonClick}
                        >
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTodo;