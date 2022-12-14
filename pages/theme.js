const { extendTheme } = require("@chakra-ui/react")

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
  
const theme = extendTheme({ colors })

module.exports = theme