var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.headers.common['X-CSRF-TOKEN'] = $('meta[name=csrf]').attr('content');

var router = new VueRouter();

Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut'
});

Vue.filter('truncate', function (value, length) {
  return value ? value.substring(0, length) : '';
})

router.map({
    '/notes': {
        component: require('./components/Notes.vue')
    },
    '/create-note': {
        component: require('./components/CreateNote.vue')
    },
    '/notes/:id': {
        name: 'note',
        component: require('./components/Note.vue')
    },
    '/notebooks': {
        component: require('./components/Notebooks.vue')
    },
    '/notebooks/:id': {
        name: 'notebook',
        component: require('./components/Notebook.vue')
    },
    '/tags': {
        component: require('./components/Tags.vue')
    },
    '/files': {
        component: require('./components/Files.vue')
    }
});

router.redirect({
  '*': '/notes'
});

var App = Vue.extend({});
router.start(App, 'body');
