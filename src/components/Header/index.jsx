import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Time Tracker</Typography>
      </Toolbar>
    </AppBar>
  );
};
