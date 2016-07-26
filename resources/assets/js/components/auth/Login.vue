<template>
  <div class="container">
      <div class="row">
          <div class="col-md-8 col-md-offset-2">
              <div class="panel panel-default">
                  <div class="panel-heading">Login</div>
                  <div class="panel-body">
                      <form class="form-horizontal" role="form" method="POST" @submit.prevent="login">

                          <div class="form-group" v-bind:class="{ 'has-error': errors.email }">
                              <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                              <div class="col-md-6">
                                  <input id="email" type="email" class="form-control" name="email" value="" v-model="input.email">

                                  <span class="help-block" v-if="errors.email">
                                      <strong>{{ errors.email }}</strong>
                                  </span>
                              </div>
                          </div>

                          <div class="form-group" v-bind:class="{ 'has-error': errors.password }">
                              <label for="password" class="col-md-4 control-label">Password</label>

                              <div class="col-md-6">
                                  <input id="password" type="password" class="form-control" name="password" v-model="input.password">

                                  <span class="help-block" v-if="errors.password">
                                      <strong>{{ errors.password }}</strong>
                                  </span>
                              </div>
                          </div>

                          <div class="form-group">
                              <div class="col-md-6 col-md-offset-4">
                                  <div class="checkbox">
                                      <label>
                                          <input type="checkbox" v-model="input.remember" name="remember"> Remember Me
                                      </label>
                                  </div>
                              </div>
                          </div>

                          <div class="form-group">
                              <div class="col-md-6 col-md-offset-4">
                                  <button type="submit" class="btn btn-primary">
                                      <i class="fa fa-btn fa-sign-in"></i> Login
                                  </button>

                                  <a class="btn btn-link" v-link="{ path: '/password/reset' }">Forgot Your Password?</a>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        input: {
          email: '',
          password: '',
          remember: false
        },
        errors: {
          email: null,
          password: null
        }
      };
    },
    ready: function (){
      console.log('Login ready');
    },
    methods: {
      login: function(){
        this.$http.post('/login', this.input).then(function(response){
          if (response.data.authenticated) {
            this.$router.go('/');
          }
        }.bind(this), function(response){
          if (response.data.email) {
            this.errors.email = response.data.email[0];
          }

          if (response.data.password) {
            this.errors.password = response.data.password[0];
          }
        }.bind(this));
      }
    }
  }
</script>
