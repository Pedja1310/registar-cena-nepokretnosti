import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: 0 }}>
        <Toolbar
          sx={{
            height: "15vh",
            backgroundColor: "#EFF3FF",
            justifyContent: "center",
          }}
        >
          <Link to="/">
            <img
              src="/images/kvadrat-logo.png"
              alt="Applicaiton logo"
              style={{ width: "84px" }}
            />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
