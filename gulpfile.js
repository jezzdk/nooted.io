var elixir = require('laravel-elixir');
require('laravel-elixir-vueify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.scripts([
        '../../../bower_components/AdminLTE/bootstrap/js/bootstrap.min.js',
        '../../../bower_components/summernote/dist/summernote.min.js',
        '../../../bower_components/AdminLTE/dist/js/app.min.js'
    ], 'public/js/vendor.js');

    mix.styles([
        '../../../bower_components/AdminLTE/bootstrap/css/bootstrap.min.css',
        '../../../bower_components/summernote/dist/summernote.css',
        '../../../bower_components/AdminLTE/dist/css/AdminLTE.min.css',
        '../../../bower_components/AdminLTE/dist/css/skins/skin-red.min.css'
    ], 'public/css/vendor.css');

    mix.copy(
        'bower_components/AdminLTE/bootstrap/fonts',
        'public/fonts'
    );

    mix.copy(
        'bower_components/summernote/dist/font',
        'public/css/font'
    );

    mix.copy(
        'bower_components/AdminLTE/dist/img',
        'public/img'
    );

    mix.browserify('main.js');
    mix.sass('app.scss');
});
