<template>
  <div class="hello"> 
    <input v-model="input" placeholder="input group share url" />
    <button @click="btnclick">get group info</button>
  </div>
</template>

<script>
import getGroupInfo from "../api/getGroupInfo";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: { 
    async btnclick() {
      // DeBox开发者社区:  https://debox.space/dao/wC6DlLGJ
      const data = await getGroupInfo(this.input);
      // 正常返回数据
      if(data.code === 200) alert(JSON.stringify(data) );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
