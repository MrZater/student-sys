<!--
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-06 17:17:36
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-09-02 15:39:27
 * @FilePath: /client/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-config-provider :locale="locale">
    <div id="app">
      <div class="nav">
        <router-link class="link" to="/">HOME</router-link>
        <router-link class="link" to="/protect">PROTECT</router-link>
        <router-link to="" v-if="isLoading">Loading...</router-link>
        <template  v-else-if="data">
          <router-link to="">{{data.name}}</router-link>
          <button @click="handleLoginOut">LOGIN OUT</button>
        </template>
        <router-link v-else class="link" to="/login">LOGIN</router-link>
      </div>
      <div class="view">
        <RouterView></RouterView>
      </div>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const router = useRouter()
const locale = ref(zhCn)
const userStore = useUserStore()
const isLoading = computed(() => userStore.isLoading)
const data = computed(() => userStore.data)
userStore.whoAmI()
function handleLoginOut () {
  userStore.loginOut()
  router.push('/login')
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  text-align: center;
  margin: 20px 0;
  .link {
    margin: 0 10px;
  }
  .view {
    border: 1px solid;
    padding: 20px;
    margin-top: 20px;
  }
}
</style>
