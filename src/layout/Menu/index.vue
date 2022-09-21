<template>
  <el-menu
      active-text-color="#ffffff"
      background-color="#304156"
      class="el-menu-vertical-demo"
      default-active="/users"
      text-color="#fff"
      router
      unique-opened
      @open="handleOpen"
      @close="handleClose"
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
    id: 10,
    authName: '用户管理',
    children: [
      {
        authName: '用户列表',
        id: 1,
        path: 'users'
      }
    ]
  },
  {
    id: 20,
    authName: '权限管理',
    children: [
      {
        authName: '角色列表',
        id: 2,
        path: 'rights'
      },
      {
        authName: '权限列表',
        id: 3,
        path: 'roles'
      }
    ]
  },
  {
    id: 30,
    authName: '商品管理',
    children: [
      {
        authName: '商品列表',
        id: 4,
        path: 'goods'
      },
      {
        authName: '分类参数',
        id: 5,
        path: 'params'
      },
      {
        authName: '商品分类',
        id: 6,
        path: 'categories'
      }
    ]
  },
  {
    id: 40,
    authName: '订单管理',
    children: [
      {
        authName: '订单列表',
        id: 7,
        path: 'orders'
      },
    ]
  },
  {
    authName: '数据统计',
    children: [
      {
        authName: '数据统计',
        id: 7,
        path: 'reports'
      },
    ]
  }
])
const initMenusList = async () => {
  const res = await menuList()
  console.log(res);
}
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

initMenusList();
</script>

