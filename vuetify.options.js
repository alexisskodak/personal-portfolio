import {
  mdiMenu,
  mdiLink,
  mdiGithub,
  mdiLinkedin,
  mdiMonitorClean,
  mdiDatabaseCheck,
  mdiLinux,
  mdiViewDashboard,
  mdiInstagram
} from '@mdi/js';
import colors from 'vuetify/es5/util/colors';

export default function() {
  return {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#F65F39",
          secondary: colors.cyan.lighten3,
        }
      }
    },
    icons: {
      iconfont: 'mdiSvg',
      values: {
        mdiMenu,
        mdiLink,
        mdiGithub,
        mdiLinkedin,
        mdiMonitorClean,
        mdiDatabaseCheck,
        mdiLinux,
        mdiViewDashboard,
        mdiInstagram
      },
    },
  };
}
