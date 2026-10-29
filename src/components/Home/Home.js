import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const currentCount = useSelector((state) => state.counter.value);
  const [count, setCount] = useState(10);

  let count1 = 10;
  function increment() {
    console.log("Count: ", count);
    setCount(count + 1);
  }

  function increment1() {
    console.log("Count1: ", count1);
    count1 = count1 + 1;
  }

  return (
    <>
      <Grid>
        <Typography variant="h2">Store: {currentCount}</Typography>
        <Typography variant="h3">Home Components</Typography>
        <Typography variant="h5">Count Value is : {count}</Typography>
        <Button onClick={() => increment()} color="success" variant="contained">
          increment
        </Button>

        <Typography variant="h5">Count+1 Value is : {count1}</Typography>
        <Button onClick={() => increment1()} color="success" variant="contained">
          increment1
        </Button>
      </Grid>
    </>
  );
};

export default Home;
