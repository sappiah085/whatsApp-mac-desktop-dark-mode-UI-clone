import { Avatar, Grid, Typography } from "@mui/material";
import { IconButton, Badge, Button } from "@mui/material";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbCircleDashed } from "react-icons/tb";
import { BsPencilSquare, BsFilter } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import image from "./real.png";
import { Container } from "@mui/system";
import { MdArchive } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function ChatBar() {
  const [focus, setFocus] = useState(false);
  const input: any = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    input.current?.addEventListener("focusin", () => {
      setFocus(true);
    });
    input.current?.addEventListener("focusout", () => {
      setFocus(false);
    });
    return () => {
      input.current.removeEventListener("focusin", () => {
        setFocus(true);
      });
      input.current.removeEventListener("focusout", () => {
        setFocus(false);
      });
    };
  });
  return (
    <Grid
      container
      alignItems={"flex-start"}
      width={"30%"}
      bgcolor={"rgb(19,26,33)"}
      flexDirection={"column"}
      position={"relative"}
      height={"100vh"}
      flexWrap={"nowrap"}
      overflow={"scroll"}
    >
      <Grid
        top={0}
        container
        flexDirection="column"
        width="30%"
        position={"fixed"}
        zIndex={200}
      >
        <Grid
          gap={1}
          container
          justifyContent={"flex-end"}
          width="100%"
          bgcolor={"rgb(33,47,52)"}
          padding={".5em"}
        >
          <Avatar alt="friend" src={image} />
          <IconButton
            sx={{
              color: "#eceff1",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <HiOutlineUserGroup />
          </IconButton>

          <IconButton
            sx={{
              color: "#eceff1",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Badge
              overlap="circular"
              color="success"
              variant="dot"
              badgeContent=" "
            >
              <TbCircleDashed />
            </Badge>
          </IconButton>
          <IconButton
            sx={{
              color: "#eceff1",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <BsPencilSquare />
          </IconButton>
          <IconButton
            sx={{
              color: "#eceff1",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <RiArrowDownSLine />
          </IconButton>
        </Grid>
        <Grid
          container
          bgcolor={"rgb(19,26,33)"}
          width="100%"
          padding={".5em"}
          gap={1}
          alignItems={"center"}
          flexWrap={"nowrap"}
        >
          <Container
            disableGutters
            sx={{
              backgroundColor: "rgb(33,47,52)",
              display: "flex",
              alignItems: "center",
              gap: ".5em",
              borderRadius: 1,
              width: "87%",
            }}
          >
            {!focus && (
              <IconButton
                onClick={() => input.current.focus()}
                sx={{
                  color: "#eceff1",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <CiSearch />
              </IconButton>
            )}
            {focus && (
              <IconButton
                sx={{
                  color: "#009688",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <BiLeftArrowAlt />
              </IconButton>
            )}
            <input
              ref={input}
              className="input__mine"
              placeholder="Search or start a new chat"
            />
          </Container>
          <IconButton
            sx={{
              color: "#eceff1",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <BsFilter />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        width="100%"
        padding={".5em 1em "}
        gap={1.5}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={15}
        sx={{ cursor: "pointer" }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "1.2em" }}>
          <IconButton
            sx={{
              color: "#009688",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <MdArchive />
          </IconButton>
          <Button
            sx={{
              color: "#eceff1",
              textTransform: "capitalize",
              fontSize: "1.2rem",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            variant="text"
          >
            Archived
          </Button>
        </span>
        <Typography sx={{ color: "#009688" }}>1</Typography>
      </Grid>
      {[
        "AMA",
        "K MA🤡",
        "A KA",
        "AHA",
        "A M R",
        "A HA",
        "A PA",
        "AJL A",
        "AIK A",
        "kLN",
        "A😉 A",
        "A JA",
        "A Mö",
        "A LA",
        "A löA",
      ].map((el, id) => (
        <Grid
          key={id}
          container
          width="100%"
          alignItems={"center"}
          justifyContent={"center"}
          gap={1.5}
          padding={"0 1em"}
          onClick={() => navigate(`/${el}`)}
          sx={{
            cursor: "pointer",
            "--display": "none",
            "--border": ".7px solid #b7d2df5c",
            "&:hover": {
              backgroundColor: "#b7d2df26",
              "--border": "none",
              "--display": "flex",
            },
          }}
        >
          <Avatar alt="friend" src={image} />
          <span
            style={{
              padding: ".5em",
              borderTop: "var(--border)",
              flex: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "1px",
            }}
          >
            <Grid flex={3} container flexDirection={"column"} width={"70%"}>
              <Typography
                variant="body1"
                fontWeight={900}
                component={"p"}
                sx={{ color: "#fff" }}
              >
                {el}
              </Typography>
              <Typography
                fontWeight={500}
                variant="subtitle1"
                component={"h5"}
                sx={{ color: "#fff" }}
              >
                {" "}
                My initial is {el}
              </Typography>
            </Grid>
            <Grid
              width={"20%"}
              container
              flexDirection={"column"}
              alignItems={"flex-end"}
            >
              <Typography
                fontWeight={900}
                textAlign={"left"}
                flex={1}
                sx={{ color: "#009688" }}
              >
                11:23
              </Typography>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5em",
                }}
              >
                <span
                  style={{
                    margin: 0,
                    height: "1.3em",
                    width: "1.3em",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#009688",
                    borderRadius: "50%",
                  }}
                >
                  {" "}
                  <Typography
                    fontWeight={900}
                    fontSize={".7rem"}
                    sx={{ color: "#263238", margin: 0, padding: 0 }}
                  >
                    {id+1}
                  </Typography>
                </span>
                <IconButton
                  sx={{
                    color: "#eceff1",
                    display: "var(--display)",
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
          </span>
        </Grid>
      ))}
    </Grid>
  );
}