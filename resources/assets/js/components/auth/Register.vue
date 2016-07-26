<template>
  <div class="container">
      <div class="row">
          <div class="col-md-8 col-md-offset-2">
              <div class="panel panel-default">
                  <div class="panel-heading">Register</div>
                  <div class="panel-body">
                      <form class="form-horizontal" role="form" method="POST" @submit.prevent="register">

                          <div class="form-group" v-bind:class="{ 'has-error': errors.name }">
                              <label for="name" class="col-md-4 control-label">Name</label>

                              <div class="col-md-6">
                                  <input id="name" type="text" class="form-control" name="name" value="" v-model="input.name">

                                  <span class="help-block" v-if="errors.name">
                                      <strong>{{ errors.name }}</strong>
                                  </span>
                              </div>
                          </div>

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
                              <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

                              <div class="col-md-6">
                                  <input id="password-confirm" type="password" class="form-control" name="password_confirmation" v-model="input.password_confirmation">
                              </div>
                          </div>

                          <div class="form-group">
                              <div class="col-md-6 col-md-offset-4">
                                  <button type="submit" class="btn btn-primary">
                                      <i class="fa fa-btn fa-user"></i> Register
                                  </button>
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
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
        },
        errors: {
          name: null,
          email: null,
          password: null
        }
      };
    },
    ready: function(){
      console.log('Register ready');
    },
    methods: {
      register: function(){
        this.resetErrors();

        this.$http.post('/register', this.input).then(function(response){
          if (response.data.authenticated) {
            this.$router.go('/');
          }
        }.bind(this), function(response){
          if (response.data.name) {
            this.errors.name = response.data.name[0];
          }

          if (response.data.email) {
            this.errors.email = response.data.email[0];
          }

          if (response.data.password) {
            this.errors.password = response.data.password[0];
          }
        }.bind(this));
      },
      resetErrors: function(){
        this.errors.name = null;
        this.errors.email = null;
        this.errors.password = null;
      }
    }
  }
</script>
