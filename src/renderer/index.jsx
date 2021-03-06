import Vue from 'vue'
import App from './vue/App'
import electron from 'electron';

import React from 'react';
import ReactDom from 'react-dom';
import Reactapp from './react/app'

import {ATest} from './ts/test.ts'


let fs = require('fs');
let path = require('path');
console.log(path.resolve(__dirname,""));
console.log({electron});
console.log({ATest})
new Vue({
    components: { App },
    template: '<App/>'
  }).$mount('#vue-app');

ReactDom.render(<Reactapp />,document.getElementById('react-app'));
