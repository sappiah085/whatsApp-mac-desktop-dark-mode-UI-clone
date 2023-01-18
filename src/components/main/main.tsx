import { Grid, Typography } from "@mui/material";
import image from "./image.png";
import { AiTwotoneLock } from "react-icons/ai";
export default function Main() {
  return (
    <Grid
      container
      borderLeft={"1px solid #b7d2df5c"}
      bgcolor={"rgb(33,47,52)"}
      height={"100vh"}
      width={"70%"}
      alignItems={"center"}
      justifyContent={"center"}
      borderBottom={"5px solid #009688"}
      flexDirection={"column"}
    >
      <img height={"300px"} src={image} alt="image" />
      <Typography color={"#dae2e6"} fontSize={"2rem"}>
        WhatsApp for Desktop
      </Typography>
      <Typography color={"#b7d2dfb5"}>
        Send and receive messages without keeping your phone online.
      </Typography>
      <Typography color={"#b7d2dfb5"}>
        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
      </Typography>
      <Typography
        color={"#b7d2dfb5"}
        padding={"2em"}
        position={"absolute"}
        bottom={0}
        sx={{ display: "flex", alignItems: "center", gap: ".5em" }}
      >
        <AiTwotoneLock /> End-to-end encrypted
      </Typography>
    </Grid>
  );
}
