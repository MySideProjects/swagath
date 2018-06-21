<template>
<div class="header-container">
  <div class="header-contents">
  <h1 class="logo">Swagath</h1>
  <div v-for="(navItem, index) in navigationMenu" :key="index" :id="index" class="item" @click="handler(index)">
    <a href="#">{{navItem}}</a>
  </div>
  <dropdown v-bind:class="{ current: isActive(index) && clickedOnSameElement }" :current-item="navItem" />
  </div>
</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import dropdown from '~/components/dropdown';

export default {
  components: {
    dropdown
  },
  data () {
    return {
      activeItemId: '',
      clickedOnSameElement: true
    }
  },
  computed: {
    ...mapState({
      navigationMenu: state => state.navigation.navigationMenu,
      toggleDropDown: state => state.dropdown.toggleDropDown
    })
  },
  methods: {
    setActive(itemId) {
      if(this.activeItemId === itemId) {
        this.activeItemId = ''
      }
      this.activeItemId = itemId
    },
    isActive(itemId) {
      return this.activeItemId === itemId
    },
    isClickedTwice(itemId) {
        if(this.activeItemId === itemId) {
        this.clickedOnSameElement = !this.clickedOnSameElement
        } else if(this.activeItemId !== itemId) {
        this.clickedOnSameElement = !!this.clickedOnSameElement
        }
    },
    handler(itemId) {
      if(this.activeItemId === itemId) {
        this.isClickedTwice(itemId)
      }
      this.setActive(itemId)
    }
  }
}
</script>