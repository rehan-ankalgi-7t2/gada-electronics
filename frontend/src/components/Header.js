import React from "react";
import { Nav, Navbar, Container, Image, NavDropdown } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { LinkContainer } from "react-router-bootstrap";
import Jetha from "../assets/images/jetha-logo.png";
import { Badge, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { PersonAdd, Logout, Settings } from "@mui/icons-material";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout({}));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#F5F5F5", color: "black" }}
      >
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand>
              <Image
                src={Jetha}
                alt="Jethalal logo"
                style={{ height: "48px", borderRadius: "100px" }}
                className="me-3"
              />
              <strong>Gada Electronics</strong>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-3">
              <LinkContainer to={"/"}>
                <Nav.Link active>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/about"}>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/cart"}>
                <Nav.Link>
                  Cart
                  <Badge
                    badgeContent={cartItems.reduce(
                      (a, c) => a + Number(c.qty),
                      0
                    )}
                    max={9}
                    color="yellow"
                  >
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>
                      <AccountCircleOutlinedIcon />
                    </Avatar>
                  </IconButton>
                </Tooltip>
              ) : (
                <LinkContainer to={"/login"}>
                  <Button
                    variant="contained"
                    color="yellow"
                    disableElevation
                    sx={{ color: "white" }}
                  >
                    Login
                  </Button>
                </LinkContainer>
              )}
              {/* Admin Links */}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <NavDropdown.Item as={Link} to='/admin/productlist'>
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/orderlist'>
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/userlist'>
                    Users
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </header>
  );
};

export default Header;
