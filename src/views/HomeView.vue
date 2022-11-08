<template>
  <div class="home">
    <TopBanner/>
    
    <MediaSection title=""/>
    <DealsMessage title="GIFTS FOR THE FAM" description="Everything to give all those Energy Matchers, Rule Breakers, and more."/>
    <HorizontalMenu/>
    <MediaSection1 title="Nike Fleece"/>
    <DealsMessage1 title="NEW FLEECE SETS FTW" description="Innovative Tech Fleece and versatile Phoenix Fleece matching sets can be mixed and matched for a look as iconic as you."/>
    <HorizontalMenu1/>
    <!--
    
    
     
    <HorizontalMenu/>
    -->
  </div>
</template>

<script>
// @ is an alias to /src
import TopBanner from '@/components/TopBanner.vue'
import MediaSection from '@/components/MediaSection.vue'
import DealsMessage from '@/components/DealsMessage.vue'
import DealsMessage1 from '@/components/DealsMessage1.vue'
import HorizontalMenu from '@/components/HorizontalMenu.vue'
import HorizontalMenu1 from '@/components/HorizontalMenu1.vue'

import MediaSection1 from '@/components/MediaSection1.vue'


export default {
  name: 'HomeView',
  components: {
    TopBanner,
    MediaSection,
    DealsMessage,
    HorizontalMenu,
    HorizontalMenu1,
    MediaSection1,
    DealsMessage1,
  }
}
</script>
<style>

.trending {
  margin-left: 70px;
}

</style>
