<template>
  <div class="hello"> 
    <div >
      <input id="sty" v-model="input" placeholder="Input group share url" />
    </div>
   
    <div>
      <button id="sty" @click="btnclick">Get group info</button>
    </div>
    
    <div>
      <span id="sty" >{{ result }}</span>
    </div>
    
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
      result:''
    };
  },
  methods: { 
    async btnclick() {
      // DeBox开发者社区:  https://debox.space/dao/wC6DlLGJ
      const res = await getGroupInfo(this.input);
      // 正常返回数据
      if(res.code === 200) { 
        // group_name
        // group_number
        this.result= ` ${res.data.group_name} : ${res.data.group_number} members`
      }
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

#sty {
  width: 200px; height: 30px;
  text-align: center;
}
</style>
