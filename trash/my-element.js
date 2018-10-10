import wrap from '../node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js'

// import jquery from 'https://code.jquery.com/jquery-3.3.1.slim.min.js'
// import popper from 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'
// import bootstrap from 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'

let customElementRegistry = window.customElements;

customElementRegistry.define('my-element', wrap(Vue, {

  template: '#audio-sequencer',

  props: [
    'type',
    'title',
    'prop3'
  ],
  data: function () {
    return {
      count: 0,
      message: 'Hello Vue!'
    }
  },


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
