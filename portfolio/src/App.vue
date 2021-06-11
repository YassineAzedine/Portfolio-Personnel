<template>
  <div id="app">  
     <pagedistanation/>
    <description/>
   <experience/>
      <skills/>
      <myproject/>
      <footer/>
      
  </div>
   
   
    

</template>
<script>
import pagedistanation from './components/pagedistanation.vue'
import description from './components/description.vue'
import experience from './components/experience.vue' 
import Skills from './components/skills.vue'
import myproject from './components/myproject.vue'
import footer from './components/footer.vue'

export default {
  name :'App',
    components :{
      
      pagedistanation,
      description,
      experience,
        Skills,
        myproject,
        footer,
      },
      
}
</script>
<style>
 
</style>
