import { Avatar, Button, Grid, IconButton, Typography } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import imagee from "./real.png";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillTelephoneFill, BsFillCameraVideoFill } from "react-icons/bs";
export default function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <Grid
      borderLeft={"1px solid #b7d2df5c"}
      bgcolor={"#021210"}
      width={"650px"}
      container
      height={"100vh"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={3}
    >
      <Grid
        container
        bgcolor={"rgb(33,47,52)"}
        padding={".5em 1em"}
        height={"56px"}
        position={"fixed"}
        top={0}
        alignItems={"center"}
        zIndex={300}
        gap={1.3}
        width={"388px"}
      >
        <IconButton
          onClick={() => navigate(`/${params.id}`)}
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
          <RxCross2 />
        </IconButton>
        <Typography>Contact info</Typography>
      </Grid>
      <Grid
        mt={"56px"}
        alignItems={"center"}
        flexDirection={"column"}
        padding={2}
        gap={1.1}
        container
        bgcolor={"rgb(19,26,33)"}
      >
        <Avatar
          sx={{ width: 206, height: 206 }}
          variant="circular"
          src={imagee}
        />
        <Typography fontWeight={700}>{params.id}</Typography>
        <Typography color={" #b7d2dfb5"} fontWeight={500}>
          +233 456 6788
        </Typography>
        <Grid container alignItems={"center"} justifyContent={"center"} gap={2}>
          <IconButton
            sx={{
              color: "#009688",
              border: "none",
            }}
          >
            <BsFillTelephoneFill />
          </IconButton>
          <IconButton
            sx={{
              color: "#009688",
              border: "none",
            }}
          >
            <BsFillCameraVideoFill />
          </IconButton>
        </Grid>
        <Grid container alignItems={"center"} justifyContent={"center"} gap={2}>
          <Button
            sx={{
              color: "#009688",
              border: "none",
            }}
          >
            Audio
          </Button>
          <Button
            sx={{
              color: "#009688",
              border: "none",
            }}
          >
            Video
          </Button>
        </Grid>
      </Grid>
      <Grid
        bgcolor={"rgb(19,26,33)"}
        alignItems={"center"}
        flexDirection={"column"}
        width={"100%"}
        padding={2}
      >
        <Typography color={" #b7d2dfb5"} fontWeight={500}>
          About
        </Typography>
        <Typography fontWeight={500}>The Lord our Righteousness</Typography>
      </Grid>
    </Grid>
  );
}
