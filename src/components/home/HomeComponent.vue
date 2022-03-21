<template>
  <div class="box-card">
    <div class="box-card-home text-center">
	<img src="../../assets/logo.png" class="w-25" alt="Logo vuejs">
      <h3>{{ message }}</h3>
      <button class="btn btn-link" @click="changeMessage">Change message</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeA',
  props: ['message'],
  methods: {
    changeMessage() {
      this.$emit('changeMessage', 'You change the text');
    }
  },
};
</script>
