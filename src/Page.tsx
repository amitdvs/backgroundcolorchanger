import { Box, Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { FC, useState } from "react";
import { randColor } from "@ngneat/falso";

interface ComponentProps {
  title: string;
}
const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(2),
    height: "100vh",
    // width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
  box: {
    backgroundColor: theme.palette.secondary.main,
    height: 50,
    width: 50,
    margin: theme.spacing(2),
  },
}));

const Page: FC<ComponentProps> = ({ title }) => {
  const { classes } = useStyles();
  const [backgroundColor, setBackgroundColor] = useState<string>();

  const handleClick = () => {
    const color = randColor();
    setBackgroundColor(color);
  };

  return (
    <Box
      className={classes.root}
      style={{ backgroundColor: backgroundColor ?? "" }}
    >
      <Box
        sx={{
          color: "yellowgreen",
          fontSize: 30,
          backgroundColor: {},
        }}
      >
        {title}
      </Box>
      <Box className={classes.box}></Box>
      <Box>
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Click to change box color
        </Button>
      </Box>
    </Box>
  );
};

export default Page;
