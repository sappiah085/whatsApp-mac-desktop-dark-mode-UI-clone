import { Avatar, Grid, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import ChatList from "./chatLis";
import { RxArrowLeft } from "react-icons/rx";
import { BsFillCameraFill } from "react-icons/bs";
import image from "./real.png";
import { FaPen } from "react-icons/fa";
export default function ChatBar() {
  const [profile, setProfile] = useState(false);
  return (
    <Grid
      container
      alignItems={"center"}
      width={{ lg: "30%", xs: "50%" }}
      bgcolor={"rgb(19,26,33)"}
      flexDirection={"column"}
      position={"relative"}
      height={"100vh"}
      flexWrap={"nowrap"}
      overflow={"scroll"}
      px={profile ? 5 : 0}
    >
      {!profile && <ChatList handlclick={() => setProfile(true)} />}
      {profile && (
        <>
          <Grid
            container
            bgcolor={"rgb(33,47,52)"}
            padding={"3em 2em 1em 2em"}
            position={"fixed"}
            top={0}
            alignItems={"center"}
            zIndex={300}
            gap={3}
            width={{ lg: "30%", xs: "50%" }}
          >
            <IconButton
              onClick={() => setProfile(false)}
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
              <RxArrowLeft />
            </IconButton>
            <Typography fontWeight={600}>Profile</Typography>
          </Grid>
          <span className="profile__photo__change">
            <span
              style={{
                display: "var(--display)",
                position: "absolute",
                zIndex: 300,
                textAlign: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "20px",
              }}
            >
              <BsFillCameraFill />
              CHANGE PROFILE PHOTO
            </span>
            <Avatar
              sx={{ height: 200, width: 200 }}
              variant="circular"
              src={image}
              alt="me"
            />
          </span>
          <Grid
            container
            alignItems={"flex-start"}
            flexDirection={"column"}
            my={5}
            gap={2}
            width={"100%"}
          >
            <Typography color={"#009688"}>Your name</Typography>
            <Grid container width={"100%"} justifyContent={"space-between"}>
              <Typography fontWeight={600}>RealMann😉</Typography>
              <IconButton
                sx={{
                  color: "#b7d2dfb5",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <FaPen />
              </IconButton>
            </Grid>
          </Grid>
          <Typography color={"#b7d2dfb5"}>
            This is not your username or pin. This name will be visible to your
            WhatsApp contacts.
          </Typography>
          <Grid
            container
            alignItems={"flex-start"}
            flexDirection={"column"}
            my={5}
            gap={2}
            width={"100%"}
          >
            <Typography color={"#009688"}>About</Typography>
            <Grid container width={"100%"} justifyContent={"space-between"}>
              <Typography fontWeight={500}>
                I’m the chosen generation ❤️✊🔥
              </Typography>
              <IconButton
                sx={{
                  color: "#b7d2dfb5",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <FaPen />
              </IconButton>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
}
