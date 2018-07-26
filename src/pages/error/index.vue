<template>
  <div>
    <my-header title="404"></my-header>
    <div class="error">
      404，找不到页面
    </div>
  </div>
</template>

<script>
  export default {
    name: 'error',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    height:100%;
    display: flex;
    justify-content:center;
    align-items:center;
    font-size: .60rem;
    font-weight: 700;
  }
</style>
