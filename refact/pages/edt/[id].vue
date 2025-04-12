<template>
  <div>
    <iframe :src="src" style="border:solid 1px #777" width="100%" height="100%" frameborder="0"
      scrolling="yes"></iframe>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
let src: String = "";

if (route.params.id == 1) {
  src = "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&bgcolor=%23ffffff&showTitle=0&showPrint=0&mode=WEEK&src=N291cjY2a2I5Z3BsZ3Jkb2l0anFiOHEyN3NxdmwwcTFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23E67C73";
} else if (route.params.id == 2) {
  src = "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&bgcolor=%23ffffff&showTitle=0&showPrint=0&mode=WEEK&src=NmhtMTMzMjZ2azRlczhiMGEwOTExNmNsMWxtbG9qYWNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%233F51B5";
}
// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
</script>
