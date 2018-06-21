<template>
  <div class="drop-down-menu">
    <ul>
      <li v-for="subNavItem in subNav.currentItem" :key="subNavItem">subNavItem</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'dropdown',
  props: ["currentItem"],
  data() {
    return {
      currentSubNavItems: this.currentSubNavItems
    }
  },
  computed: {
    ...mapState({
      subNav: state => state.dropdown.subnav
    })
  },
  mounted() {
    this.currentSubNavItems = this.subNav.currentItem
    console.log(this.currentSubNavItem)
  }
}
</script>