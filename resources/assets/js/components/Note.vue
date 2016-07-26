<template>
  <div>
    <div style="background-color: #fff">
      <section class="content-header">
          <h1>{{ title }}</h1>
          <hr />
      </section>
      <section class="content">
          {{{ content }}}
      </section>
    </div>
  </div>
</template>

<script>
export default {
    data: function(){
      return {
        title: '',
        content: ''
      };
    },
    ready: function() {
        console.log('Note ready');

        this.$http.get('/notes/' + this.$route.params.id).then(function(response){
          this.title = response.data.title;
          this.content = response.data.content;
        }.bind(this), function(response){

        }.bind(this));
    }
}
</script>
