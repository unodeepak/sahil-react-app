import { Box, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "../../utils/debounce";

const Header = () => {
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const [count, setCount] = useState(0);
  const debounceSearch = useDebounce(search1, 500);

  async function fetchData(pincode) {
    const data = await axios.get(
      `https://api.postalpincode.in/pincode/${pincode}`,
    );
    console.log("Data Fetched Successfully: ", data);
    setCount(count + 1);
  }

  function searchData(e) {
    setSearch(e.target.value);
    fetchData(e.target.value);
  }

  useEffect(() => {
    if (!debounceSearch.trim()) return;

    fetchData(search1);
  }, [debounceSearch]);
  return (
    <>
      <Box>
        <Grid>
          <TextField
            placeholder="Search..."
            value={search}
            onChange={searchData}
          />
        </Grid>

        <Grid>
          <Typography variant="h5">Debounce</Typography>
          <TextField
            placeholder="Debounce Search..."
            value={search1}
            onChange={(e) => setSearch1(e.target.value)}
          />
        </Grid>
      </Box>
    </>
  );
};

export default Header;
