import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#3db565',
    background: '#282828',
    font: '#333333',
    info: '#2196F3',
    error: '#FF5252',
    button: '#262626',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  iconfont: 'md',
  breakpoint: {
      thresholds: {
          xs: 480,
          sm: 720,
          md: 960,
          lg: 1264
      },
      // scrollbarWidth: 10
  }
})
