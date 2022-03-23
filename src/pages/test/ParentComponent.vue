<template>
  <div class="container">
    <div class="parent">
      <h1>ParentComponent</h1>
      <div class="alret" v-if="messageDelete">Ban vua xoa: {{messageDelete}}</div>
      <textarea v-model="message"></textarea>
      <button @click="send()">Send</button>
    </div>
    <ChildrenComponent :messagesChildren="messagesParent" v-on:notify-delete="listenDeleteMessage"/>
  </div>
</template>

<script>
import ChildrenComponent from "../../components/test/ChildrenComponent.vue";
export default {
  name: "ParentComponent",
  data() {
    return {
      message: "",
      messagesParent: [],
      messageDelete: '',
    };
  },
  methods: {
    send() {
      //   alert("Sent!");
      //   console.log(this.message);
      this.messagesParent.push({ content: this.message });
      //   console.log(this.messagesParent);
      this.message = "";
    },
    listenDeleteMessage(message){
        // console.log(message);
        this.messageDelete = message;
    }
  },
  components: {
    ChildrenComponent,
  },
};
</script>

<style>
.container {
  display: flex;
}
textarea {
  min-width: 500px;
  resize: none;
  margin-right: 5px;
  margin-bottom: -13px;
}
.container button {
  height: 35px;
  width: 50px;
  background: orange;
  color: #fff;
  border: navajowhite;
}
.alret {
    color: yellow;
    font-size: 15px;
}
</style>
