<template>
  <div>
    <div v-on:mousemove="tinhToaDo">
      <form action="">
        <input v-on:keyup.enter="submit">
      </form>
      <input type="text" v-model="name" :disabled="inputDisable" />
      <button @click="inputDisable = !inputDisable">Mo khoa</button>
      <h1>{{ name }}</h1>
      <h1>{{ count }}</h1>
      <button v-on:click="tang()">Click</button>
      <button v-on:click="count += 1">Click</button>
      <hr />
      <div v-show="isShow">
        <h2>Test</h2>
      </div>
      <button @click="isShow = !isShow">An/Hien</button>
      <hr />
      <p>Toa do cua chuot: {{ x }} / {{ y }}</p>
      <span v-on:mousemove.stop="">dung su kien</span>
    </div>
    <hr />
    <!-- <div class="vuong" @click="quanlido = !quanlydo" :class="{ do: quanlido }"></div>
    <div class="vuong" :class="{ do: quanlido }"></div>
    <div class="vuong" :class="{ do: quanlido }"></div>
    <div class="vuong" :class="[color, { do: quanlido }]"></div>
    <input type="text" v-model="color" /> -->
    <hr />
    <div class="vuong" :style="customStyles"></div>
    <div class="vuong" :style="customStyles"></div>
    <div class="vuong" :style="[customStyles, {height: width + 'px'}]"></div>
    <input type="text" v-model="color" />
    <input type="text" v-model="width" />
    <!-- <input type="text" v-model="height" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "a",
      count: 0,
      inputDisable: true,
      isShow: true,
      x: 0,
      y: 0,
      quanlido: false,
      // color: "xanhlacay",
      ////
      color: 'gray',
      width: 100,
      // height: 100,
    };
  },
  computed: {
    customStyles: function () {
      return {
        backgroundColor: this.color,
        width: this.width + "px",
        // height: this.height + "px",
      };
    },
  },
  methods: {
    tang: function () {
      this.count++;
    },
    tinhToaDo: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
  },
};
</script>

<style>
.vuong {
  width: 100px;
  height: 100px;
  background-color: rgb(121, 121, 121);
  display: inline-block;
  margin: 10px;
}
.do {
  background-color: red;
}
.xanhduong {
  background-color: blue;
}
.xanhlacay {
  background-color: green;
}
</style>
