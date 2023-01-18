import { Grid, Avatar, Typography, IconButton } from "@mui/material";
import image from "./real.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsCameraVideo } from "react-icons/bs";
import { FiPhone, FiSearch } from "react-icons/fi";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Menu from "../menu/menu";
export default function NavBar() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const editPath = location.pathname.indexOf("edit") > -1;
  type item = {
    item: string;
  };
  const list: item[] = [
    {
      item: "Contact info",
    },
    {
      item: "Select messages",
    },
    {
      item: "Mute notifications",
    },
    {
      item: "Clear",
    },
    {
      item: "Delete chat",
    },
    {
      item: "Report",
    },
    {
      item: "Block",
    },
  ];
  return (
    <Grid
      container
      width={editPath ? "43%" : "70%"}
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
        onClick={() => navigate(`/${params.id}/edit`)}
        style={{
          display: "flex",
          gap: ".6em",
          alignItems: "center",
          flexGrow: 1,
          flexShrink: 1,
          cursor: "pointer",
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
          flexWrap: "nowrap",
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
        <Menu list={list}>
          <RiArrowDownSLine />
        </Menu>
      </span>
    </Grid>
  );
}
