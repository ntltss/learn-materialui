import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  MenuItem,
  Box,
  Container,
  Menu,
  Paper,
  CircularProgress,
  LinearProgress,
  Snackbar,
  Avatar,
  Badge,
  Tooltip,
  Modal,
  ClickAwayListener,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function About() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // (4)
  };

  const handleClose = () => {
    setAnchorEl(null); // (5)
  };

  const [show, setShow] = useState(false);

  const handleButtonClick = () => {
    setShow(true);
  };

  const handleClose2 = () => {
    setShow(false); // (5)
  };

  const [color, setColor] = useState("white"); // (2) 初期値は白

  const handleClickAway = () => {
    setColor("green"); // (3)
  };

  const handleInsideClick = () => {
    setColor("red"); // (4)
  };

  return (
    <div>
      aboutページ
      <Container>
        <Box style={{ display: "flex", flexDirection: "row" }}>
          <Box width={1 / 4} style={{ padding: "8px" }} border={5}>
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
      <Box>
        <Button variant="contained" color="secondary" onClick={handleClick}>
          メニューを開く
        </Button>
        <Menu // (2)
          id="simple-menu"
          anchorEl={anchorEl} // (1)
          open={Boolean(anchorEl)} // (3)
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>アイテム1</MenuItem>
          <MenuItem onClick={handleClose}>アイテム2</MenuItem>
          <MenuItem onClick={handleClose}>アイテム3</MenuItem>
        </Menu>
      </Box>
      <Paper elevation={0}>elevation: 0</Paper>
      <Paper>elevation: default</Paper>
      <Paper elevation={3}>elevation: 3</Paper>
      {/* 回転する */}
      <CircularProgress />
      {/* 横棒がアニメーションする */}
      <LinearProgress />
      {/* 進捗を指定できる */}
      <LinearProgress variant="determinate" value={30} />
      {/* (1) */}
      <Button onClick={handleButtonClick} variant="contained">
        Snackbarを表示する
      </Button>
      <Snackbar
        open={show}
        autoHideDuration={6000}
        onClose={handleClose2}
        message="処理が完了しました！"
      />
      <Avatar />
      {/* デフォルト */}
      <Avatar src="/fujisan.jpg" />
      {/* 画像パスを指定 */}
      <Avatar>YN</Avatar>
      {/* テキストを指定 */}
      <Tooltip title="新着メッセージが4件あります" arrow={true}>
        <Badge badgeContent={"4"} color="primary">
          <Avatar src="/fujisan.jpg" />
        </Badge>
      </Tooltip>
      <Tooltip title="新着メッセージが4件あります" arrow>
        {/* (1) */}
        <Badge badgeContent={"4"} color="primary">
          <Avatar src="/nkzn.png" />
        </Badge>
      </Tooltip>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div // (1)
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 200,
            height: 200,
            backgroundColor: color, // (2) 状態に応じて背景色が変わる
          }}
          onClick={handleInsideClick}
        >
          Click me!
        </div>
      </ClickAwayListener>
      <Grid container justify="center">
        <Grid item xs={6}>
          <Paper>
            <Grid container justify="center">
              <Grid item xs={6}>
                入れ子の左側
              </Grid>
              <Grid item xs={6}>
                入れ子の右側
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>入れ子じゃない右側</Paper>
        </Grid>
      </Grid>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Box width={1 / 4} style={{ padding: "8px" }} border={1}>
          <Button
            display="flex"
            variant="contained"
            color="primary"
            style={{ width: "100%" }}
          >
            <Box marginRight="9px">
              <Typography>ボタン1</Typography>
            </Box>
            <Box>▷</Box>
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default About;
