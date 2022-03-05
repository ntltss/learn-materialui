import { Grid } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem, Box, Container } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React, { useContext } from "react";
import { UserInputData } from "./StepContent";

function Basic(props) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      checkBox: false,
      textBox: "",
      pullDown: "",
    },
  });
  //   const onSubmit = () => {
  //     props.handleNext();
  //   };
  const { currentState, setCurrentState } = useContext(UserInputData);
  const onSubmit = (data) => {
    props.handleNext();
    setCurrentState({ ...currentState, Basic: data });
  };
  return (
    <Grid container>
      <Grid sm={2} />
      <Grid lg={8} sm={8} spacing={10}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="checkBox"
            render={({ field: { value, onChange } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value}
                    onChange={onChange}
                    color="primary"
                  />
                }
                label="チェックボックス"
              />
            )}
          />
          <Controller
            control={control}
            name="textBox"
            render={({ field }) => (
              <TextField
                {...field}
                label="テキストフィールド"
                fullWidth
                margin="normal"
                placeholder="プレースホルダー"
              />
            )}
          />
          <Controller
            control={control}
            name="pullDown"
            render={({ field }) => (
              <TextField
                {...field}
                label="プルダウンリスト"
                fullWidth
                margin="normal"
                id="select"
                select
              >
                <MenuItem value="one">選択肢1</MenuItem>
                <MenuItem value="two">選択肢2</MenuItem>
                <MenuItem value="three">選択肢3</MenuItem>
              </TextField>
            )}
          />
          <Button variant="contained" color="primary" type="submit">
            次へ
          </Button>
        </form>
      </Grid>
      <Grid>
        <Button color="primary" variant="contained">
          Hello World
        </Button>
        <Button color="secondary" variant="outlined">
          Hello World2
        </Button>
      </Grid>
      <Grid>
        <Container>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            {/* (1) */}
            <Box width={1 / 4} style={{ padding: "8px" }} border={5}>
              {/* (2) */}
              <Button
                variant="contained"
                color="primary"
                style={{ width: "100%" }}
              >
                ボタン1
              </Button>
            </Box>
            <Box width={1 / 2} style={{ padding: "8px" }} border={1}>
              {/* (3) */}
              <Button
                variant="contained"
                color="secondary"
                style={{ width: "100%" }}
              >
                ボタン2
              </Button>
            </Box>
            <Box width={1 / 4} style={{ padding: "8px" }} border={1}>
              {/* (2) */}
              <Button
                variant="contained"
                color="secondary"
                style={{ width: "100%" }}
              >
                ボタン3
              </Button>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Basic;
