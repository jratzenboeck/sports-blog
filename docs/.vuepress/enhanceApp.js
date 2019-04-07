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
import About from './theme/layouts/About.vue';
import Home from './theme/layouts/Home.vue';
import Layout from './theme/layouts/Layout.vue';

export default ({
  Vue // the version of Vue being used in the VuePress app
}) => {
  Vue.component('About', About);
  Vue.component('Home', Home);
  Vue.component('Layout', Layout);

  Vue.use(Vuetify, {
    iconfont: 'fa',
    icons: {
      facebook: 'fab fa-facebook',
      twitter: 'fab fa-twitter',
      home: 'fas fa-home',
      person: 'fas fa-user',
      medal: 'fa fa-medal'
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
