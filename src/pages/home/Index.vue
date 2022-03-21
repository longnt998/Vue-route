<template>
  <div>
    <HomeComponent :message="message" @changeMessage="changeMessage" />
  </div>
</template>
<script>
import HomeComponent from "../../components/home/HomeComponent.vue";

export default {
  name: "HomeA",
  components: {
    HomeComponent,
  },
  data() {
    return {
      message: "Welcome to Your Vuejs",
    };
  },
  methods: {
    changeMessage(value) {
      this.message = value;
    },
  },
};
</script>
