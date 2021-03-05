import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inputBlock: {
    display: "flex",
    justifyContent: "center",
    margin: "35px 10px 0px 10px",
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

export default useStyles;
