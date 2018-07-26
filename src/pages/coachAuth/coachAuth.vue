<template>
  <div class="coachAuth">
    <v-upload></v-upload>
  </div>
</template>

<script>
  import upload from '@/components/public/upload'
  export default {
    name: 'coachAuth',
    data () {
      return {},
    },
    components: {
      'v-upload': upload
    }
  }
</script>

<style>
</style>