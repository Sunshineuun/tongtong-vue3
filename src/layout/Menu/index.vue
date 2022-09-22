<template>
  <el-menu
      active-text-color="#ffffff"
      background-color="#304156"
      class="el-menu-vertical-demo"
      :default-active="defaultActive"
      text-color="#fff"
      router
      unique-opened
      @open="handleOpen"
      @close="handleClose"
      :collapse="!$store.getters.sidebarType"
  >
    <el-sub-menu
        :index="item.id"
        v-for="(item, index) in menusList"
        :key="item.id"
    >
      <template #title>
        <el-icon>
          <component :is="iconList[index]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
          :index="`/`+it.path"
          v-for="it in item.children"
          :key="it.id"
          @click="savePath(it.path)">
        <template #title>
          <el-icon>
            <component :is="icon"></component>
          </el-icon>
          <span>{{ it.authName }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import {menuList} from "@/api/menu";
import {ref} from "vue";

const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const icon = ref('menu')

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
    id: 50,
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

const defaultActive = ref(sessionStorage.getItem('path') || '/users')
const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
initMenusList();
</script>

