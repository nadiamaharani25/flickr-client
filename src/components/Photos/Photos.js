import React, { useEffect, useState } from "react";
import useStyles from "./styles";

// Import @material-ui/core, @material-ui/lab, @material-ui/icons
import {
  Card,
  CardMedia,
  Typography,
  Grid,
  TextField,
  Container,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

// Import AXIOS
import axios from "axios";

// Components
import { URL } from "../../configs/config";
import usePagination from "../Pagination/Pagination";


const Photos = () => {
  const classes = useStyles();

  // useState
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemPerPage = 3;

  const count = Math.ceil(photos.length / itemPerPage);
  const DataPagination = usePagination(photos, itemPerPage);
  
  const onChange = (e, value) => {
    setPage(value);
    DataPagination.jump(value);
  };

  // Fetch data API
  const getAllPhotos = () => {
    setLoading(true);
    axios
      .get(`${URL}/photo/getPhoto`)
      .then((response) => {
        const allPhotos = response.data.items;
        setPhotos(allPhotos);
      })
      .catch((error) => {
        console.log(`Error ${error}`);
      });
    setLoading(false);
  };

  useEffect(() => {
    getAllPhotos();
  }, []);

  return loading ? (
    <Typography variant="h1">Loading</Typography>
  ) : (
    <>
    <Container marginTop="-50px">
        <TextField
        className={classes.inputType}
        name="search"
        variant="filled"
        label="Search Keywoard"
        fullWidth
        onChange={(e) => setQuery(e.target.value)}
      />
      </Container>

      <>
        {DataPagination.currentData()
          .filter((items) => {
            if (query === "") {
              return items;
            } else if (
              items.tags.toLowerCase().includes(query.toLocaleLowerCase())
            ) {
              return items;
            }
          })
          .map((items) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={4} key={items.id}>
                <Card className={classes.card} raised elevation={6}>
                  <CardMedia
                    className={classes.media}
                    image={items.media.m}
                    title={photos.title}
                  />
                  <div className={classes.overlay}>
                    <Typography variant="h6">{items.title}</Typography>
                  </div>
                </Card>
              </Grid>
            );
          })}
      </>
      <Container className={classes.container}>
        <Pagination
          count={count}
          page={page}
          variant="outlined"
          onChange={onChange}
        />
      </Container>
    </>
  );
};

export default Photos;
