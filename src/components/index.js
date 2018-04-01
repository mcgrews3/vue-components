import Vue from 'vue';
import Button from './Button.vue';
import Radio from './Radio.vue';
import Checkbox from './Checkbox.vue';
import Dropdown from './Dropdown.vue';
import Banner from './Banner.vue';
import Toast from './Toast.vue';

Vue.component('flock-button', Button);
Vue.component('flock-radio', Radio);
Vue.component('flock-checkbox', Checkbox);
Vue.component('flock-dropdown', Dropdown);
Vue.component('flock-banner', Banner);
Vue.component('flock-toast', Toast);

const eventBus = new Vue();

function triggerGlobalClick(e) {
  e.stopPropagation();
  eventBus.$emit('focusChanged', this);
}
document.addEventListener('click', triggerGlobalClick);

Vue.mixin({
  mounted() {
    this.$el.addEventListener('click', triggerGlobalClick);
  },
  beforeDestroy() {
    this.$el.removeEventListener('click', triggerGlobalClick);
  },
});

export { Radio, Button, Checkbox, Dropdown, eventBus };
