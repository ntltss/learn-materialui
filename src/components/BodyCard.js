import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function BodyCard(props) {
  const { avatarUrl, title, subheader, text, imageUrl } = props;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <StarBorderOutlinedIcon />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia style={{ height: "150px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">詳細を見る</Button>
      </CardActions>
    </Card>
  );
}

export default BodyCard;
