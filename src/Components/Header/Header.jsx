import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import AccountCircle from "@mui/icons-material/AccountCircle";

export const Header = (props) => {  // Removed ": any" type annotation for props
    return (
      <AppBar
        color="primary"
        className="bl-header"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <InstagramIcon />
          </IconButton>
          <Typography noWrap variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BigLinkz
          </Typography>
          <IconButton color="inherit" aria-label="account">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
};
