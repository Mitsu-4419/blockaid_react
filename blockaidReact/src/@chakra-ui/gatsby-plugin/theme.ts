import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.50",
        color: "gray.800"
      },
      fonts: {
        heading: "Open Sans",
      },
    }
  }
});
export default theme;