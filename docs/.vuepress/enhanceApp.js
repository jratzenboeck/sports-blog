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
  VListTileTitle
} from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './theme/styles/style.scss';
import About from './theme/About.vue';
import Home from './theme/Home.vue';
import Layout from './theme/Layout.vue';

export default ({
  Vue // the version of Vue being used in the VuePress app
}) => {
  Vue.component('About', About);
  Vue.component('Home', Home);
  Vue.component('Layout', Layout);

  Vue.use(Vuetify, {
    iconfont: 'md',
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
      VListTileTitle
    }
  });
};
