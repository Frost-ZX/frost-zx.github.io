import DefaultTheme from 'vitepress/theme';
import CustomLayout from './layout/CustomLayout.vue';
import './style/custom.less';

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
};
