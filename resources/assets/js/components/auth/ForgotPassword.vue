<template>
  <div class="container">
      <div class="row">
          <div class="col-md-8 col-md-offset-2">
              <div class="panel panel-default">
                  <div class="panel-heading">Reset Password</div>
                  <div class="panel-body">
                      <div class="alert alert-success" v-if="status">
                          {{ status }}
                      </div>

                      <form class="form-horizontal" role="form" method="POST" action="/password/email">

                          <div class="form-group">
                              <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                              <div class="col-md-6">
                                  <input id="email" type="email" class="form-control" name="email" value="">
                              </div>
                          </div>

                          <div class="form-group">
                              <div class="col-md-6 col-md-offset-4">
                                  <button type="submit" class="btn btn-primary">
                                      <i class="fa fa-btn fa-envelope"></i> Send Password Reset Link
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
        status: null
      };
    },
    ready: function(){
      console.log('ForgotPassword ready');
    }
  }
</script>
