<template>
  <div>
    <section class="content-header">
        <h1>Notes</h1>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-xs-6">
          0 Notes
        </div>
        <div class="col-xs-6">
          <button type="button" class="btn btn-primary pull-right" v-link="{ path: '/create-note' }">Create note</button>
        </div>
      </div>
      <div class="row notes-list">
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2" v-for="note in notes">
          <a class="note" v-link="{ name: 'note', params: { id: note.id } }">
            {{ note.title }}<br />
            {{ note.content | truncate '20' }}<br /><br />
            {{ note.notebook.name }}
          </a>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        notes: []
      };
    },
    ready: function(){
      console.log('Notes ready');

      this.$http.get('/notes').then(function(response){
        this.notes = response.data;
      }.bind(this), function(response){

      }.bind(this));
    }
  }
</script>
