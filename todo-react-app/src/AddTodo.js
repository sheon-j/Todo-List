import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        // 입력을 저장할 오브젝트
        this.state = { item: { title: "" } };
    }

    render() {
        return (
            // 입력창과 +버튼
            <Paper style={{ margin: 16, padding: 16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                        <TextField placeholder="Add Todo here" fullWidth/>
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button fullWidth color="secondary" variant="outlined">
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTodo;