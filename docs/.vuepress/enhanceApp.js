import Vuetify, {
  VApp,
  VLayout,
  VContent,
  VNavigationDrawer,
  VContainer,
  VToolbar,
  VToolbarItems,
  VSpacer,
  VToolbarTitle,
  VBtn,
  VToolbarSideIcon,
  VCard,
  VCardTitle,
  VCardActions,
  VFlex,
  VImg,
  VCarousel,
  VCarouselItem,
  VFooter,
  VIcon,
  VList,
  VListTile,
  VListTileContent,
  VListTileTitle,
  VListTileAvatar
} from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import '@fortawesome/fontawesome-free/css/all.css';
import './theme/styles/style.scss';
import VueAnalytics from 'vue-analytics';
import About from './theme/layouts/About.vue';
import Home from './theme/layouts/Home.vue';
import Layout from './theme/layouts/Layout.vue';
import { trackClick } from './utils/ga';

export default ({ Vue, router }) => {
  Vue.component('About', About);
  Vue.component('Home', Home);
  Vue.component('Layout', Layout);

  Vue.prototype.$trackClick = trackClick;

  Vue.use(VueAnalytics, {
    id: 'UA-42874473-5',
    router,
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production',
      enabled: process.env.NODE_ENV === 'development'
    }
  });
  Vue.use(Vuetify, {
    iconfont: 'fa',
    icons: {
      facebook: 'fab fa-facebook',
      twitter: 'fab fa-twitter',
      home: 'fas fa-home',
      person: 'fas fa-user',
      medal: 'fa fa-medal',
      calendar: 'fas fa-calendar-day',
      heart: 'fas fa-heart'
    },
    components: {
      VApp,
      VLayout,
      VContent,
      VNavigationDrawer,
      VContainer,
      VToolbar,
      VToolbarItems,
      VSpacer,
      VToolbarTitle,
      VBtn,
      VToolbarSideIcon,
      VCard,
      VCardTitle,
      VCardActions,
      VFlex,
      VImg,
      VCarousel,
      VCarouselItem,
      VFooter,
      VIcon,
      VList,
      VListTile,
      VListTileContent,
      VListTileTitle,
      VListTileAvatar
    }
  });
};
