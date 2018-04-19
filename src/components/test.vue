<template>
  <div id="test">
    <h1>test</h1>

  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      article:[]
    }
  },
  created() {
    this.$http.get("api/user/select")
      .then(function (data) {
        console.log(data)
        //this.article = data.body;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

