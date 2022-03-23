<template>
  <div class="children">
    <h1>ChildrenComponent</h1>
    <ul>
      <li v-for="(mess, index) in messagesChildren" :key="index">
        {{ mess.content }} <a href="#" @click="deleteMessage(index)">Delete</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    messagesChildren: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      childrenMassage: this.messagesChildren,
    };
  },
  methods: {
    deleteMessage(index) {
      let message = this.childrenMassage[index].content;
      this.childrenMassage.splice(index, 1);
      // console.log(message);
      // console.log(this.childrenMassage[index].content);
      this.$emit("notify-delete", message);
    },
  },
};
</script>

<style>
.children ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.children ul li {
  display: block;
  background: #fff;
  margin-bottom: 3px;
  padding: 5px;
}
.children ul li a {
  text-decoration: none;
  background: red;
  color: #fff;
  font-size: 15px;
  padding: 3px;
  border-radius: 5px;
}
</style>
