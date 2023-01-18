import { Grid, Avatar, Typography, IconButton } from "@mui/material";
import image from "./real.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsCameraVideo } from "react-icons/bs";
import { FiPhone, FiSearch } from "react-icons/fi";
import { useParams } from "react-router-dom";
export default function NavBar() {
  const params = useParams();
  return (
    <Grid
      container
      width={"70%"}
      padding={".5em 1em"}
      height={"56px"}
      bgcolor={"rgb(33,47,52)"}
      position={"fixed"}
      top={0}
      alignItems={"center"}
      zIndex={300}
      justifyContent={"space-between"}
    >
      <span
        style={{
          display: "flex",
          gap: ".6em",
          alignItems: "center",
          width: "70%",
        }}
      >
        <Avatar alt="friend" src={image} />
        <Typography
          variant="body1"
          fontWeight={900}
          component={"p"}
          sx={{ color: "#fff" }}
        >
          {params.id}
        </Typography>
      </span>
      <span
        style={{
          display: "flex",
          gap: "1.2em",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{
            color: "#eceff1",
            border: "none",
            padding: 0,
            margin: 0,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <BsCameraVideo />
        </IconButton>
        <IconButton
          sx={{
            color: "#eceff1",
            border: "none",
            padding: 0,
            margin: 0,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <FiPhone />
        </IconButton>
        <span
          style={{ height: "2em", width: ".03em", backgroundColor: "#eceff1" }}
        ></span>
        <IconButton
          sx={{
            color: "#eceff1",
            border: "none",
            padding: 0,
            margin: 0,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <FiSearch />
        </IconButton>
        <IconButton
          sx={{
            color: "#eceff1",
            border: "none",
            padding: 0,
            margin: 0,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <RiArrowDownSLine />
        </IconButton>
      </span>
    </Grid>
  );
}
