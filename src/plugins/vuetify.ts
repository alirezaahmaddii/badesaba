import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '../styles/font.scss';
import { createVuetify } from 'vuetify';
import { VTreeview } from 'vuetify/labs/VTreeview';
import { colors } from '@/plugins/colors';
export default createVuetify({
  components: {
    VTreeview,
  },
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
