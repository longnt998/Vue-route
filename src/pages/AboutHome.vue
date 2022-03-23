<template>
  <div>
    <h1>About</h1>
    {{ user_id }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
      user_id: null
    }
  },
  mounted() {
    axios
      .get(`http://127.0.0.1:8000/api/order/3`)
      .then((response) => (this.user_id = response.data.user_id  ));
  },
};
</script>

<style></style>
