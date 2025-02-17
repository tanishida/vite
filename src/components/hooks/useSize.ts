import {
  Breakpoint,
  Theme,
  useTheme,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type BreakpointOrNull = Breakpoint | null;

export const useSize = () => {
    const theme: Theme = useTheme();
    const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();
    // const values = {
    //     xs: 0, // phone
    //     sm: 600, // tablet
    //     md: 900, // small laptop
    //     lg: 1200, // desktop
    //     xl: 1536, // large screen
    //   };
    const displayWidthPattern = 
        keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
          const matches = useMediaQuery(theme.breakpoints.up(key));
          return !output && matches ? key : output;
        }, null) || 'xs'
      ;

    const height = () => {
        if (displayWidthPattern === "xs") return 240;
        if (displayWidthPattern === "sm") return 250;
        return 250;
    };
    const width = () => {
      if (displayWidthPattern === "xs") return 170;
      if (displayWidthPattern === "sm") return 180;
      return 180
    }
    return {
        width: width(),
        height: height()
};
  }
  