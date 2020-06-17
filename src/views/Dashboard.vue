<template>
  <v-container class="pa-0">
    <v-sheet dark color="primary" height="320px" class="pa-4">
        <div class="display-3 font-weight-bold">
          Dashboard
          </div>
    </v-sheet>
    <Timeline />
  </v-container>
</template>
<style scoped>
.action-buttons {
  height:56px !important;
  border-radius:50px;
}
</style>
<script>
const Timeline = () => import('@/components/Timeline.vue');
export default {
    components:{
        Timeline
    }
}
</script>