import React from "react";
import BodyCard from "./BodyCard";
import { Grid } from "@material-ui/core";

const cardContents = [
  {
    title: "タイトル1",
    subheader: "サブヘッダー1",
    avatarUrl: "https://joeschmoe.io/api/v1/random",
    imageUrl: "https://picsum.photos/150",
  },
  {
    title: "タイトル2",
    subheader: "サブヘッダー2",
    avatarUrl: "https://joeschmoe.io/api/v1/random",
    imageUrl: "https://picsum.photos/150",
  },
  {
    title: "タイトル3",
    subheader: "サブヘッダー3",
    avatarUrl: "https://joeschmoe.io/api/v1/random",
    imageUrl: "https://picsum.photos/150",
  },
  {
    title: "タイトル4",
    subheader: "サブヘッダー4",
    avatarUrl: "https://joeschmoe.io/api/v1/random",
    imageUrl: "https://picsum.photos/150",
  },
];

function Content() {
  const getCardContent = (getObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <BodyCard {...getObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing="2">
      {cardContents.map((contentObj) => getCardContent(contentObj))}
    </Grid>
  );
}

export default Content;
