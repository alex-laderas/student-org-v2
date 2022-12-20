const { extendTheme, defineStyle, defineStyleConfig } = require("@chakra-ui/react")

const thick = defineStyle({
  borderWidth: '5px', // change the width of the border
  borderStyle: "solid", // change the style of the border
  borderRadius: 10, // set border radius to 10
})

const dividerTheme = defineStyleConfig({
  variants: { thick },
})

const colors = {
    black: {
      100: '#000'
    },
    yellow: {
      200: '#E2D381'
    },
    defBG: {
      100: '#403F3F'
    },
    primary: {
      100: '#B64E4E'
    },
    secondary: {
      100: '#E2D381'
    },
    backdrop: {
      100: '#403F3F'
    },
  }
  
const theme = extendTheme({ colors, dividerTheme })

module.exports = theme