<template>
  <div id="app">
    <div class=" bg-image" style="height:100vh;">
      <div data-aos="fade-up"
     data-aos-duration="3000" class="text-center text-white name ">
        <h1 class="text-primary">YASSINE AZEDINE</h1> 
       <h3>Full-Stack Devlepor </h3>
      </div>
              
    </div>
  </div>


    


  
</template>

<script>

export default {
  name : 'pagedistanation' ,


}
</script>
<style scoped>
   
     .bg-image{
       height: 100 vh ;
background-image:url(../assets/bg.jpg);
 background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;


 
   
 
   }
   .name{
     display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 flex-direction: column;
 
 
 
  
 
   }
   hr{
    border: 1px solid;
    width: 40%;
}
</style>
