<template>
    <div id="sobre">
        <h2>Sobre</h2>
        <div class="paragrafo-image">
            <div>
                Lorem ipsum dolor sit amet consectetur<span class="color1"> adipisicing elit</span>. Vitae, libero voluptas.
                 Dicta accusantium eaque eum. Sunt odit dolor debitis natus? Tempore ad laudantium<span class="color3"> adipisicing elit</span>, itaque unde adipisci quisquam?
                 Lorem ipsum dolor sit amet consectetur<span class="color1"> adipisicing elit</span>. Vitae, libero voluptas.
                 
            </div>
            <img src="../assets/imgs/panda.jpg">
        </div>
        <div class="paragrafo-image">
          <img src="../assets/imgs/panda.jpg">
            <div>
                Lorem ipsum dolor, <span class="color2"> adipisicing elit </span>adipisicing elit. Expedita assumenda voluptatum sed architecto. 
                Aperiam corporis consectetur molestiae soluta ratione nulla suscipit. <span class="color3"> adipisicing elit</span> dolorem eaque cumque consequatur iste.
                Lorem ipsum dolor, <span class="color2"> adipisicing elit </span>adipisicing elit. Expedita assumenda voluptatum sed architecto. 
                Aperiam corporis consectetur molestiae soluta ratione nulla suscipit. <span class="color3"> adipisicing elit</span> dolorem eaque cumque consequatur iste.
            </div>
        </div>
        <div class="paragrafo-image">
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Vitae, libero voluptas. <span class="color2"> adipisicing elit</span>eum. Sunt odit dolor debitis natus? Tempore ad laudantium iste impedit 
                 pariatur,<span class="color1"> adipisicing elit</span> quisquam?
            </div>
            <img src="../assets/imgs/panda.jpg">
        </div>
        </div>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:"Sobre",
    setup() {
        
    },
})
</script>


<style scoped>
.paragrafo-image{
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 10px;
}
.paragrafo-image div{
  padding:5px;
}
.paragrafo-image img{
  width:100px;
  height:100px;
  margin:5px;
  border-radius:10px;
}
#sobre{
  color:rgb(19, 19, 19);
  width:80%;
  margin:auto;
  padding-top:70px;
  border-radius:5px;
}
.dark #sobre{
    color:rgb(246, 246, 246);
}
span{
  font-weight: 600;
}
.dark p{
  color:rgb(246, 246, 246);
}

.color1{
  color:rgb(232, 113, 28);
  
}
.dark .color1{
  color:rgb(248, 209, 10);
}
.color2{
  color:rgb(235, 109, 255);
}
.dark .color2{
  color:rgb(207, 40, 40);
}
.color3{
  color:rgb(70, 181, 60);
}
.dark .color3{
  color:rgb(63, 128, 166);
}
.color4{
  color:rgb(206, 48, 119);
}
.dark .color4{
  color:rgb(156, 51, 231);
}
@media only screen and (min-width: 1200px) and (max-width: 2100px) {
  #sobre{
    font-size: large;
    width:60%;
  }
  

}
@media only screen and (min-width: 100px) and (max-width: 620px) {
  #sobre{
    font-size: large;
    width:98%;
    
  }
  .paragrafo-image img{
  width:160px;
  height:160px;
  margin:2px;
  
}
}
</style>
