import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: { flexGrow: 1 },
  appBar: {
    borderRadius: 15,
    display: "flex",
    margin: "17px 0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 50px",
    backgroundColor: "#73a1e6",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  typo: {
    fontWeight: "600 !important",
    fontSize: 27,
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    display: "flex",
    color: "#fff",
    "&:hover": {
      color: "pink",
    },
  },
}));
