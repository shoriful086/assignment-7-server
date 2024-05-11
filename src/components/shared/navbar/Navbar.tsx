import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, Container, useMediaQuery, useTheme } from "@mui/material";
import brandLogo from "/src/assets/landingPage/brandLogo.png";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import {
  logout,
  useCurrentToken,
} from "../../../redux/fetaures/authSlice/authSlice";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    name: "Relief Goods",
    link: "/relief-goods",
  },
  { id: 2, name: "LeaderBoard", link: "/leaderboard" },
  { id: 3, name: "Community", link: "/community" },
  { id: 4, name: "Volunteer", link: "/volunteer" },
  { id: 5, name: "About Us", link: "/about-us" },
];

const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); // Toggle mobileOpen state
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }} component={Link} to="/">
        Charity
      </Typography>
      <Divider />
      {navItems.map((item) => (
        <div key={item.id}>
          <Link to={item.link}>{item.name}</Link>
        </div>
      ))}
      <Box
        sx={{
          backgroundColor: "primary.main",
          padding: "10px 30px",
          color: "white",
          fontWeight: "semibold",
          borderRadius: "30px",
        }}
      >
        <Link to="/login">Login</Link>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            height: "80px",
            pt: 2,
            backgroundColor: "#fff",
            // boxShadow: "none",
          }}
        >
          <Toolbar className="lg:ml-48 lg:mr-48">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                backgroundColor: "primary.main",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/">
                <img src={brandLogo} alt="brand logo" />
              </Link>
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                marginRight: "120px",
                fontWeight: 600,
              }}
            >
              {navItems.map((item) => (
                <Link className="ml-6 text-black" to={item.link} key={item.id}>
                  {item.name}
                </Link>
              ))}
            </Box>
            {token && (
              <Link className="mr-20 font-semibold text-black" to="/dashboard">
                Dashboard
              </Link>
            )}
            {token ? (
              <Button
                onClick={() => handleLogOut()}
                sx={{
                  backgroundColor: "red",
                  padding: "10px 30px",
                  fontWeight: "semibold",
                  borderRadius: "30px",
                  display: isSmallScreen ? "none" : "block",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "black",
                    boxShadow: "none",
                    border: "1px solid #00715D",
                    padding: "10px 30px",
                    borderRadius: "30px",
                    fontWeight: "semibold",
                  },
                }}
                component={Link}
                to="/login"
              >
                LogOut
              </Button>
            ) : (
              <Button
                sx={{
                  backgroundColor: "primary.main",
                  padding: "10px 30px",
                  fontWeight: "semibold",
                  borderRadius: "30px",
                  display: isSmallScreen ? "none" : "block",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "black",
                    boxShadow: "none",
                    border: "1px solid #00715D",
                    padding: "10px 30px",
                    borderRadius: "30px",
                    fontWeight: "semibold",
                  },
                }}
                component={Link}
                to="/login"
              >
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              backgroundColor: "#fff",
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </Container>
  );
};

export default Navbar;
