import { Button, Grid, Typography, IconButton, Container } from "@mui/material";
import NavBar from "../nav/nav";
import back from "./back.png";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
import { BsMic } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
export default function ChatContent() {
  return (
    <Grid
      container
      height={"100vh"}
      borderLeft={"1px solid #b7d2df5c"}
      width={"70%"}
      flexDirection={"column"}
      gap={2}
      alignItems={"center"}
      overflow={"scroll"}
      padding={"1em"}
      flexWrap={"nowrap"}
      sx={{
        backgroundImage: `url(${back})`,
        backgroundSize: "contain",
        overflowY: "scroll",
      }}
    >
      <NavBar />
      <span style={{ marginTop: "5em" }}></span>
      <Button sx={{ backgroundColor: "rgb(33,47,52)", color: "#b7d2dfb5" }}>
        Yesterday
      </Button>
      <Button
        sx={{
          backgroundColor: "rgb(33,47,52)",
          color: "#fdd835",
          fontSize: ".7rem",
          textTransform: "none",
          fontWeight: 600,
        }}
      >
        Messages and calls are end-to-end encrypted. No one outside of this
        chat, not even Whatsapp, can read or listen to them. Click to lean more{" "}
      </Button>

      <span className="friend__message">
        <IconButton
          sx={{
            color: "#eceff1",
            border: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            display: "var(--display)",
            "&:hover": {
              backgroundColor: "transparent",
            },
            top: "2px",
            right: "2px",
          }}
        >
          <RiArrowDownSLine />
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
            position: "absolute",
            top: "50%",
            right: "-24px",
            transform: "translateY(-50%)",
            display: "var(--display)",
          }}
        >
          <MdOutlineEmojiEmotions />
        </IconButton>
        <Typography>
          😂😂😂😂😂😂😂 Hello there, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum aliquid laborum quaerat sint cupiditate qui,
          officiis velit necessitatibus vel nemo beatae, architecto . Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde minima
          alias quam😂😂😂😂😂😂😂😂
        </Typography>
        <Typography
          color={"#b7d2dfb5"}
          fontWeight={800}
          fontSize={".7rem"}
          textAlign={"right"}
        >
          12:12 PM
        </Typography>
      </span>
      <span className="mine__message">
        <IconButton
          sx={{
            color: "#eceff1",
            border: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            display: "var(--display)",
            "&:hover": {
              backgroundColor: "transparent",
            },
            top: "2px",
            right: "2px",
          }}
        >
          <RiArrowDownSLine />
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
            position: "absolute",
            top: "50%",
            left: "-24px",
            transform: "translateY(-50%)",
            display: "var(--display)",
          }}
        >
          <MdOutlineEmojiEmotions />
        </IconButton>
        <Typography>
          😂😂😂😂😂😂😂 Hello there, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum aliquid laborum quaerat sint cupiditate qui,
          officiis velit necessitatibus vel nemo beatae, architecto . Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde minima
          alias quam😂😂😂😂😂😂😂😂
        </Typography>
        <Typography
          color={"#b7d2dfb5"}
          fontWeight={800}
          fontSize={".7rem"}
          textAlign={"right"}
        >
          12:12 PM
        </Typography>
      </span>
      <span className="friend__message">
        <IconButton
          sx={{
            color: "#eceff1",
            border: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            display: "var(--display)",
            "&:hover": {
              backgroundColor: "transparent",
            },
            top: "2px",
            right: "2px",
          }}
        >
          <RiArrowDownSLine />
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
            position: "absolute",
            top: "50%",
            right: "-24px",
            transform: "translateY(-50%)",
            display: "var(--display)",
          }}
        >
          <MdOutlineEmojiEmotions />
        </IconButton>
        <Typography>
          😂😂😂😂😂😂😂 Hello there, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum aliquid laborum quaerat sint cupiditate qui,
          officiis velit necessitatibus vel nemo beatae, architecto . Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde minima
          alias quam😂😂😂😂😂😂😂😂
        </Typography>
        <Typography
          color={"#b7d2dfb5"}
          fontWeight={800}
          fontSize={".7rem"}
          textAlign={"right"}
        >
          12:12 PM
        </Typography>
      </span>
      <span className="mine__message">
        <IconButton
          sx={{
            color: "#eceff1",
            border: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            display: "var(--display)",
            "&:hover": {
              backgroundColor: "transparent",
            },
            top: "2px",
            right: "2px",
          }}
        >
          <RiArrowDownSLine />
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
            position: "absolute",
            top: "50%",
            left: "-24px",
            transform: "translateY(-50%)",
            display: "var(--display)",
          }}
        >
          <MdOutlineEmojiEmotions />
        </IconButton>
        <Typography>
          😂😂😂😂😂😂😂 Hello there, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum aliquid laborum quaerat sint cupiditate qui,
          officiis velit necessitatibus vel nemo beatae, architecto . Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde minima
          alias quam😂😂😂😂😂😂😂😂
        </Typography>
        <Typography
          color={"#b7d2dfb5"}
          fontWeight={800}
          fontSize={".7rem"}
          textAlign={"right"}
        >
          12:12 PM
        </Typography>
      </span>
      <span className="friend__message">
        <IconButton
          sx={{
            color: "#eceff1",
            border: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            display: "var(--display)",
            "&:hover": {
              backgroundColor: "transparent",
            },
            top: "2px",
            right: "2px",
          }}
        >
          <RiArrowDownSLine />
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
            position: "absolute",
            top: "50%",
            right: "-24px",
            transform: "translateY(-50%)",
            display: "var(--display)",
          }}
        >
          <MdOutlineEmojiEmotions />
        </IconButton>
        <Typography>
          😂😂😂😂😂😂😂 Hello there, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum aliquid laborum quaerat sint cupiditate qui,
          officiis velit necessitatibus vel nemo beatae, architecto . Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde minima
          alias quam😂😂😂😂😂😂😂😂
        </Typography>
        <Typography
          color={"#b7d2dfb5"}
          fontWeight={800}
          fontSize={".7rem"}
          textAlign={"right"}
        >
          12:12 PM
        </Typography>
      </span>
      <span className="mine__message">
        <IconButton
          sx={{
            color: "#eceff1",
            border: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            display: "var(--display)",
            "&:hover": {
              backgroundColor: "transparent",
            },
            top: "2px",
            right: "2px",
          }}
        >
          <RiArrowDownSLine />
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
            position: "absolute",
            top: "50%",
            left: "-24px",
            transform: "translateY(-50%)",
            display: "var(--display)",
          }}
        >
          <MdOutlineEmojiEmotions />
        </IconButton>
        <Typography>
          😂😂😂😂😂😂😂 Hello there, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum aliquid laborum quaerat sint cupiditate qui,
          officiis velit necessitatibus vel nemo beatae, architecto . Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde minima
          alias quam😂😂😂😂😂😂😂😂
        </Typography>
        <Typography
          color={"#b7d2dfb5"}
          fontWeight={800}
          fontSize={".7rem"}
          textAlign={"right"}
        >
          12:12 PM
        </Typography>
      </span>
      <span className="friend__message">
        <IconButton
          sx={{
            color: "#eceff1",
            border: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            display: "var(--display)",
            "&:hover": {
              backgroundColor: "transparent",
            },
            top: "2px",
            right: "2px",
          }}
        >
          <RiArrowDownSLine />
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
            position: "absolute",
            top: "50%",
            right: "-24px",
            transform: "translateY(-50%)",
            display: "var(--display)",
          }}
        >
          <MdOutlineEmojiEmotions />
        </IconButton>
        <Typography>
          😂😂😂😂😂😂😂 Hello there, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum aliquid laborum quaerat sint cupiditate qui,
          officiis velit necessitatibus vel nemo beatae, architecto . Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde minima
          alias quam😂😂😂😂😂😂😂😂
        </Typography>
        <Typography
          color={"#b7d2dfb5"}
          fontWeight={800}
          fontSize={".7rem"}
          textAlign={"right"}
        >
          12:12 PM
        </Typography>
      </span>
      <span className="mine__message">
        <IconButton
          sx={{
            color: "#eceff1",
            border: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            display: "var(--display)",
            "&:hover": {
              backgroundColor: "transparent",
            },
            top: "2px",
            right: "2px",
          }}
        >
          <RiArrowDownSLine />
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
            position: "absolute",
            top: "50%",
            left: "-24px",
            transform: "translateY(-50%)",
            display: "var(--display)",
          }}
        >
          <MdOutlineEmojiEmotions />
        </IconButton>
        <Typography>
          😂😂😂😂😂😂😂 Hello there, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum aliquid laborum quaerat sint cupiditate qui,
          officiis velit necessitatibus vel nemo beatae, architecto . Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde minima
          alias quam😂😂😂😂😂😂😂😂
        </Typography>
        <Typography
          color={"#b7d2dfb5"}
          fontWeight={800}
          fontSize={".7rem"}
          textAlign={"right"}
        >
          12:12 PM
        </Typography>
      </span>
      <Button sx={{ backgroundColor: "rgb(33,47,52)", color: "#b7d2dfb5" }}>
        Today
      </Button>
      <span className="friend__message">
        <IconButton
          sx={{
            color: "#eceff1",
            border: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            display: "var(--display)",
            "&:hover": {
              backgroundColor: "transparent",
            },
            top: "2px",
            right: "2px",
          }}
        >
          <RiArrowDownSLine />
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
            position: "absolute",
            top: "50%",
            right: "-24px",
            transform: "translateY(-50%)",
            display: "var(--display)",
          }}
        >
          <MdOutlineEmojiEmotions />
        </IconButton>
        <Typography>
          😂😂😂😂😂😂😂 Hello there, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum aliquid laborum quaerat sint cupiditate qui,
          officiis velit necessitatibus vel nemo beatae, architecto . Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde minima
          alias quam😂😂😂😂😂😂😂😂
        </Typography>
        <Typography
          color={"#b7d2dfb5"}
          fontWeight={800}
          fontSize={".7rem"}
          textAlign={"right"}
        >
          12:12 PM
        </Typography>
      </span>
      <span className="mine__message">
        <IconButton
          sx={{
            color: "#eceff1",
            border: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            display: "var(--display)",
            "&:hover": {
              backgroundColor: "transparent",
            },
            top: "2px",
            right: "2px",
          }}
        >
          <RiArrowDownSLine />
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
            position: "absolute",
            top: "50%",
            left: "-24px",
            transform: "translateY(-50%)",
            display: "var(--display)",
          }}
        >
          <MdOutlineEmojiEmotions />
        </IconButton>
        <Typography>
          😂😂😂😂😂😂😂 Hello there, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum aliquid laborum quaerat sint cupiditate qui,
          officiis velit necessitatibus vel nemo beatae, architecto . Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde minima
          alias quam😂😂😂😂😂😂😂😂
        </Typography>
        <Typography
          color={"#b7d2dfb5"}
          fontWeight={800}
          fontSize={".7rem"}
          textAlign={"right"}
        >
          12:12 PM
        </Typography>
      </span>

      <Grid
        bgcolor={"rgb(33,47,52)"}
        container
        position={"fixed"}
        bottom={0}
        padding={"1em"}
        width={"70%"}
        flexWrap={"nowrap"}
        zIndex={300}
      >
        <IconButton
          sx={{
            color: "#b7d2dfb5",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <MdOutlineEmojiEmotions />
        </IconButton>
        <IconButton
          sx={{
            color: "#b7d2dfb5",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <ImAttachment />
        </IconButton>
        <Container
          disableGutters
          sx={{
            backgroundColor: "#b7d2df26",
            display: "flex",
            alignItems: "center",
            gap: ".5em",
            borderRadius: 2.5,
            width: "85%",
            padding: "0 1em",
            flexShrink: 1,
          }}
        >
          <input
            className="input__mine"
            placeholder="Search or start a new chat"
          />
        </Container>
        <IconButton
          sx={{
            color: "#b7d2dfb5",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <BsMic />
        </IconButton>
      </Grid>
      <span style={{ marginTop: "10em" }}></span>
    </Grid>
  );
}
