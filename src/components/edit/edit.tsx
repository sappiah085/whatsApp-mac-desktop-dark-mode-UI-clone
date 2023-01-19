import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Typography,
  Switch,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import imagee from "./real.png";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillTelephoneFill, BsFillCameraVideoFill } from "react-icons/bs";
import { IoIosArrowForward, IoIosTimer, IoMdLock } from "react-icons/io";
import { FaStar, FaBell } from "react-icons/fa";
import { AiOutlineStop, AiTwotoneDislike } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
export default function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <Grid
      borderLeft={"1px solid #b7d2df5c"}
      bgcolor={"#021210"}
      width={{ lg: "650px", xs: "100%" }}
      container
      height={"100vh"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
      flexWrap={"nowrap"}
      overflow={"scroll"}
      pb={10}
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
        width={{lg: "388px", xs: "50%"}}
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
      <Grid
        bgcolor={"rgb(19,26,33)"}
        alignItems={"center"}
        width={"100%"}
        padding={2}
        flexWrap={"nowrap"}
        container
        sx={{ cursor: "pointer" }}
        justifyContent={"space-between"}
      >
        <Typography
          color={" #b7d2dfb5"}
          padding={"0"}
          margin={"0"}
          fontWeight={500}
        >
          Media, links and docs
        </Typography>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color={" #b7d2dfb5"}
          fontWeight={500}
        >
          0 <IoIosArrowForward />
        </Typography>
      </Grid>
      <Grid
        bgcolor={"rgb(19,26,33)"}
        alignItems={"center"}
        width={"100%"}
        padding={2}
        flexDirection={"column"}
        container
      >
        <Grid
          bgcolor={"rgb(19,26,33)"}
          alignItems={"center"}
          width={"100%"}
          padding={2}
          flexWrap={"nowrap"}
          container
          sx={{ cursor: "pointer" }}
          justifyContent={"space-between"}
        >
          <Typography
            color={" #b7d2dfb5"}
            padding={"0"}
            margin={"0"}
            fontWeight={500}
            sx={{ display: "flex", alignItems: "center", gap: 3 }}
          >
            <FaStar />
            <span style={{ color: "white" }}> Starred messages</span>
          </Typography>
          <Typography color={" #b7d2dfb5"} fontWeight={500}>
            <IoIosArrowForward />
          </Typography>
        </Grid>
        <Grid
          bgcolor={"rgb(19,26,33)"}
          alignItems={"center"}
          width={"100%"}
          padding={2}
          flexWrap={"nowrap"}
          container
          sx={{ cursor: "pointer" }}
          justifyContent={"space-between"}
        >
          <Typography
            color={" #b7d2dfb5"}
            padding={"0"}
            margin={"0"}
            fontWeight={500}
            sx={{ display: "flex", alignItems: "center", gap: 3 }}
          >
            <FaBell />
            <span style={{ color: "white" }}>Mute notifications</span>
          </Typography>
          <Switch />
        </Grid>
        <Grid
          bgcolor={"rgb(19,26,33)"}
          alignItems={"center"}
          width={"100%"}
          padding={2}
          flexWrap={"nowrap"}
          container
          sx={{ cursor: "pointer" }}
          justifyContent={"space-between"}
        >
          <Typography
            color={" #b7d2dfb5"}
            padding={"0"}
            margin={"0"}
            fontWeight={500}
            sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}
          >
            <IoIosTimer />
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "white" }}>Mute notifications</span>
              off
            </span>
          </Typography>
          <Typography
            color={" #b7d2dfb5"}
            padding={"0"}
            margin={"0"}
            fontWeight={500}
            sx={{ display: "flex", alignItems: "center", gap: 3 }}
          >
            <IoIosArrowForward />
          </Typography>
        </Grid>
        <Grid
          bgcolor={"rgb(19,26,33)"}
          alignItems={"center"}
          width={"100%"}
          padding={2}
          flexWrap={"nowrap"}
          container
          sx={{ cursor: "pointer" }}
          justifyContent={"space-between"}
        >
          <Typography
            color={" #b7d2dfb5"}
            padding={"0"}
            margin={"0"}
            fontWeight={500}
            sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}
          >
            <IoMdLock />
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                width: "200px",
              }}
            >
              <span style={{ color: "white" }}>Encryption</span>
              Messages and calls are end-to-end encrypted. Click to verify.
            </span>
          </Typography>
          <Typography
            color={" #b7d2dfb5"}
            padding={"0"}
            margin={"0"}
            fontWeight={500}
            sx={{ display: "flex", alignItems: "center", gap: 3 }}
          >
            <IoIosArrowForward />
          </Typography>
        </Grid>
      </Grid>
      <Grid
        bgcolor={"rgb(19,26,33)"}
        alignItems={"center"}
        width={"100%"}
        padding={"0 2"}
        flexDirection={"column"}
        container
      >
        <Grid
          bgcolor={"rgb(19,26,33)"}
          alignItems={"center"}
          width={"100%"}
          padding={2}
          flexWrap={"nowrap"}
          container
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#b7d2df26",
            },
          }}
          justifyContent={"space-between"}
        >
          <Typography
            color={" #d32f2f"}
            padding={"0"}
            margin={"0"}
            fontSize={"1.2rem"}
            fontWeight={500}
            sx={{ display: "flex", alignItems: "center", gap: 3 }}
          >
            <AiOutlineStop />
            Block {params.id}
          </Typography>
        </Grid>
        <Grid
          bgcolor={"rgb(19,26,33)"}
          alignItems={"center"}
          width={"100%"}
          padding={2}
          flexWrap={"nowrap"}
          container
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#b7d2df26",
            },
          }}
          justifyContent={"space-between"}
        >
          <Typography
            color={" #d32f2f"}
            padding={"0"}
            margin={"0"}
            fontSize={"1.2rem"}
            fontWeight={500}
            sx={{ display: "flex", alignItems: "center", gap: 3 }}
          >
            <AiTwotoneDislike />
            Report {params.id}
          </Typography>
        </Grid>
        <Grid
          bgcolor={"rgb(19,26,33)"}
          alignItems={"center"}
          width={"100%"}
          padding={2}
          flexWrap={"nowrap"}
          container
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#b7d2df26",
            },
          }}
          justifyContent={"space-between"}
        >
          <Typography
            color={" #d32f2f"}
            padding={"0"}
            margin={"0"}
            fontSize={"1.2rem"}
            fontWeight={500}
            sx={{ display: "flex", alignItems: "center", gap: 3 }}
          >
            <RiDeleteBinLine />
            Delete chat
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
