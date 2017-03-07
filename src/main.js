import Rv from './core';
import Todo from './components/Todo';
let dom = document.querySelector('#app');

Rv.render(Todo, {}, dom);