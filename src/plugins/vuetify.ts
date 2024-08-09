import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '../styles/font.scss';
import { createVuetify } from 'vuetify';
import { colors } from '@/plugins/colors';
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
  defaults: {
    VApp: {
      style: 'font-family: "IRANSans";'
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors,
      },
    },
  },
})
