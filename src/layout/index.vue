<template>
  <div>
    <el-container class="app-wraaper">
      <el-aside :width="asideWidth" class="sidebar-container">
        <Menu></Menu>
      </el-aside>
      <el-container
          class="container"
          :class="{ hiddenContainer: !$store.getters.sidebarType }">
        <el-header>
         <Headers></Headers>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from './Menu';
import Headers from './Headers';
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore();
const asideWidth = computed(() => {
  return store.getters.sidebarType ? '210px' : '67px'
})
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.container {
  width: calc(100% - 210px);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;

  &.hiddenContainer {
    width: calc(100% - 67px);
  }
}

::v-deep .el-header {
  padding: 0;
}
</style>