import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  inputType: {
    backgroundColor: "#f6f8fd",
    color: "black",
    justifyContent: "center",
    display: "flex",
    width: "33%",
    margin: "auto !important",
    alignItems: "center !important",
    marginTop: "-43px !important",
    marginBottom: "35px !important",
    borderRadius: "10px !important",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#73a1e6",
    borderRadius: "15px",
    marginTop: "50px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    cursor: "default",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    margin: "30px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    cursor: 'pointer',
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '67%',
    marginTop: '-25px',
    color: 'black',
  },
});

