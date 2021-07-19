import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  //Modal
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#fff",
    padding: 15,
    outline: "none",
    width: "min(90%, 450px)",
    height: "60%",
    borderRadius: 4,
    boxShadow: "0px 0px 5px #9fa8da",
    overflow: "scroll",
  },
  dRow: {
    width: "100%",
    borderBottom: `1px solid #ccc`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: "0 auto",
  },

  dCol1: {
    width: "30%",
    textAlign: "left",
    fontWeight: 600,
    color: "#020B3F",
  },
  dCol2: {
    width: "70%",
    textAlign: "left",
    fontWeight: 600,
    color: "#020B3F",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

});