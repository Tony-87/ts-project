<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{pname}}</p>
    <el-button @click="changeName">el button</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      pname: 'pname'
    }
  },
  methods: {
    changeName () {
      this.pname = 'changeName'
    }
  }

})
</script>
