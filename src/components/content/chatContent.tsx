import { Button, Grid, Typography, IconButton, Container } from "@mui/material";
import NavBar from "../nav/nav";
import back from "./back.png";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
import { BsMic } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiTwotoneLock } from "react-icons/ai";
import Menu from "../menu/menu";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
export default function ChatContent() {
  const params = useParams();
  const location = useLocation();
  const editPath = location.pathname.indexOf("edit") > -1;
  const container: any = useRef<HTMLElement | null>(null);
  type item = {
    item: string;
  };
  const list: item[] = [
    {
      item: "Reply",
    },
    {
      item: "Reply privately",
    },
    {
      item: "React to message",
    },
    {
      item: "Forward",
    },
    {
      item: "Star",
    },
    {
      item: "Report",
    },
    {
      item: "Delete message",
    },
    {
      item: `Message ${params.id}`,
    },
  ];

  useEffect(() => {
    container.current.scrollTop = container.current.scrollHeight;
    console.log(container.current.scrollHeight);
  });
  return (
    <Grid
      width={{ lg: "70%", xs: "50%" }}
      height={"100vh"}
      flexWrap={"nowrap"}
      flexDirection={"row"}
      borderLeft={"1px solid #b7d2df5c"}
      container
    >
      <Grid
        flexGrow={1}
        flexShrink={1}
        height={"100%"}
        container
        flexDirection={"column"}
        gap={2}
        alignItems={"center"}
        overflow={"scroll"}
        padding={"1em 1.2em"}
        flexWrap={"nowrap"}
        pb={10}
        width={"100%"}
        ref={container}
        sx={{
          backgroundImage: `url(${back})`,
          backgroundSize: "contain",
          overflowY: "scroll",
          scrollBehavior: "smooth",
        }}
        display={{
          lg: "flex",
          xs: location.pathname.indexOf("edit") > -1 ? "none" : "flex",
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
            display: "flex",
            alignItems: "center",
            gap: ".5em",
          }}
        >
          <AiTwotoneLock />
          Messages and calls are end-to-end encrypted. No one outside of this
          chat, not even Whatsapp, can read or listen to them. Click to lean
          more{" "}
        </Button>

        <span className="friend__message">
          <span
            style={{
              padding: 0,
              margin: 0,
              position: "absolute",
              top: "2px",
              right: "2px",
            }}
          >
            <Menu list={list}>
              <RiArrowDownSLine />
            </Menu>
          </span>
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
            ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde
            minima alias quam😂😂😂😂😂😂😂😂
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
          <span
            style={{
              padding: 0,
              margin: 0,
              position: "absolute",
              top: "2px",
              right: "2px",
            }}
          >
            <Menu list={list}>
              <RiArrowDownSLine />
            </Menu>
          </span>
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
            ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde
            minima alias quam😂😂😂😂😂😂😂😂
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
          <span
            style={{
              padding: 0,
              margin: 0,
              position: "absolute",
              top: "2px",
              right: "2px",
            }}
          >
            <Menu list={list}>
              <RiArrowDownSLine />
            </Menu>
          </span>
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
            ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde
            minima alias quam😂😂😂😂😂😂😂😂
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
          <span
            style={{
              padding: 0,
              margin: 0,
              position: "absolute",
              top: "2px",
              right: "2px",
            }}
          >
            <Menu list={list}>
              <RiArrowDownSLine />
            </Menu>
          </span>
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
            ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde
            minima alias quam😂😂😂😂😂😂😂😂
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
          <span
            style={{
              padding: 0,
              margin: 0,
              position: "absolute",
              top: "2px",
              right: "2px",
            }}
          >
            <Menu list={list}>
              <RiArrowDownSLine />
            </Menu>
          </span>
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
            ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde
            minima alias quam😂😂😂😂😂😂😂😂
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
          <span
            style={{
              padding: 0,
              margin: 0,
              position: "absolute",
              top: "2px",
              right: "2px",
            }}
          >
            <Menu list={list}>
              <RiArrowDownSLine />
            </Menu>
          </span>
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
            ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde
            minima alias quam😂😂😂😂😂😂😂😂
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
          <span
            style={{
              padding: 0,
              margin: 0,
              position: "absolute",
              top: "2px",
              right: "2px",
            }}
          >
            <Menu list={list}>
              <RiArrowDownSLine />
            </Menu>
          </span>
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
            ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde
            minima alias quam😂😂😂😂😂😂😂😂
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
          <span
            style={{
              padding: 0,
              margin: 0,
              position: "absolute",
              top: "2px",
              right: "2px",
            }}
          >
            <Menu list={list}>
              <RiArrowDownSLine />
            </Menu>
          </span>
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
            ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde
            minima alias quam😂😂😂😂😂😂😂😂
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
          <span
            style={{
              padding: 0,
              margin: 0,
              position: "absolute",
              top: "2px",
              right: "2px",
            }}
          >
            <Menu list={list}>
              <RiArrowDownSLine />
            </Menu>
          </span>
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
            ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde
            minima alias quam😂😂😂😂😂😂😂😂
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
          <span
            style={{
              padding: 0,
              margin: 0,
              position: "absolute",
              top: "2px",
              right: "2px",
            }}
          >
            <Menu list={list}>
              <RiArrowDownSLine />
            </Menu>
          </span>
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
            ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde
            minima alias quam😂😂😂😂😂😂😂😂
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
          width={{lg: editPath ? "43%" : "70%", xs: "50%"}}
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
            <input className="input__mine" placeholder="Type a message" />
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
      </Grid>

      <Outlet />
    </Grid>
  );
}
