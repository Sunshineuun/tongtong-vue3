<template>
  <el-menu
      active-text-color="#ffffff"
      background-color="#304156"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      router
  >
    <el-sub-menu
        :index="item.id"
        v-for="(item) in menusList"
        :key="item.id"
    >
      <template #title>
        <el-icon>
          <location/>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item :index="`/`+it.path" v-for="it in item.children" :key="it.id">{{ it.authName }}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import {menuList} from "@/api/menu";
import {ref} from "vue";

const menusList = ref([
  {
    authName: '用户管理',
    children: [
      {
        authName: '用户列表',
        id: 1,
        path: 'userList'
      }
    ]
  }, {
    authName: '权限管理'
  }
])
const initMenusList = async () => {
  const res = await menuList()
  console.log(res);
}

initMenusList();
</script>

