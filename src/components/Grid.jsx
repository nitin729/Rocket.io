import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Custombtn from "./Custombtn.js";

const styles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 5rem 0 5rem",
  },
  items: {
    paddingTop: "1rem",
  },
});
const Grid = ({ icon, title, btnTitle }) => {
  const classes = styles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.items}>{icon}</div>
      <Typography className={classes.items} variant="h5">
        {title}
      </Typography>
      <div className={classes.items}>
        <Custombtn text={btnTitle} />
      </div>
    </div>
  );
};

export default Grid;
