import Vue from 'vue'
import App from './App.vue'
import {Button, ButtonGroup, Icon} from 'zhuangzhuang-ui-test-1'

window.console.log(Button)
window.console.log(ButtonGroup)
window.console.log(Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
