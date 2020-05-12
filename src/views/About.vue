<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  created () {
    console.log('jquery is ', jQuery)
    console.log('moment is', moment)
    console.log(moment().format('YYYY-MM-DD'))
    console.log('lodash is ', _)
    console.log('lodash now = ', _.now())
  }
})
</script>
