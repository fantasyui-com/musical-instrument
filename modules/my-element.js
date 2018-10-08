
console.log('SSS');

import wrap from '../node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js'

let customElementRegistry = window.customElements;
 
customElementRegistry.define('my-element', wrap(Vue, {

  props: [
    'prop1',
    'prop2',
    'prop3'
  ],
  data: function () {
    return {
      count: 0,
      message: 'Hello Vue!'
    }
  },

  template: '<p>XXXXXX::::: {{ message }}, {{ prop1  }}, {{prop2}}, {{prop3}}</p>',

  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  },
  activated () {
    console.log('activated')
  },
  deactivated () {
    console.log('deactivated')
  }
}))

window.el = document.querySelector('my-element')
