import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";


const config = defineConfig({
  globalCss: {
    html: {
      fontFamily: "Stack Sans Text",
    },
  },
});


export default createSystem(defaultConfig, config);
