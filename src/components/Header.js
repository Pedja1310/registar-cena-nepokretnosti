import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: 0 }}>
        <Toolbar
          sx={{
            height: 77,
            backgroundColor: "#EFF3FF",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/kvadrat-logo.png"
            alt="Applicaiton logo"
            style={{ width: "84px" }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
