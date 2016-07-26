<template>
  <div>
    <section class="content-header">
        <h1>Create note</h1>
    </section>
    <section class="content">
      <div class="row">
          <div class="col-md-8 col-md-offset-2">
              <div class="panel panel-default">
                  <div class="panel-body">
                      <form role="form" method="POST" @submit.prevent="save">
                          <div class="form-group" v-bind:class="{ 'has-error': errors.title }">
                              <label for="title" class="control-label">Title</label>

                              <input id="title" type="text" class="form-control" name="title" value="" v-model="input.title">

                              <span class="help-block" v-if="errors.title">
                                  <strong>{{ errors.title }}</strong>
                              </span>
                          </div>

                          <div class="form-group" v-bind:class="{ 'has-error': errors.content }">
                              <label for="content" class="control-label">Content</label>

                              <div class="form-control" v-el:content>{{ input.content }}</div>

                              <span class="help-block" v-if="errors.content">
                                  <strong>{{ errors.content }}</strong>
                              </span>
                          </div>

                          <div class="form-group">
                              <button type="submit" class="btn btn-primary">
                                  <i class="fa fa-btn fa-plus"></i> Save
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        input: {
          title: '',
          content: ''
        },
        errors: {
          title: null,
          content: null
        }
      };
    },
    ready: function(){
      console.log('CreateNote ready');
      $(this.$els.content).summernote({
        height: 400
      });
    },
    methods: {
      save: function(){
        this.resetErrors();

        this.input.content = $(this.$els.content).summernote('code');

        this.$http.post('/notes', this.input).then(function(response){
          this.$router.go('/notes');
        }.bind(this), function(response){
          if (response.data.title) {
            this.errors.title = response.data.title[0];
          }

          if (response.data.content) {
            this.errors.content = response.data.content[0];
          }
        }.bind(this));
      },
      resetErrors: function(){
        this.errors.title = null;
        this.errors.content = null;
      }
    }
  }
</script>
