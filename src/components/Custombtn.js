import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "44px",
    padding: "0 25px",
    boxSizing: "border-box",
    borderRadius: "0",
    color: "#fff",
    backgroundColor: "#4f25f7",
    transition: "background .3s,border-color .3s,color .3s",
    "&:hover": {
      backgroundColor: "#4f25f7",
    },
  },
})(Button);

const Custombtn = ({ text }) => {
  return <StyledButton variant="contained">{text}</StyledButton>;
};

export default Custombtn;
