<!--
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-08-30 15:48:54
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-08-30 17:56:36
 * @FilePath: /client/src/views/Login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <p>
    账号：<input type="text" v-model="loginId" autocomplete="new-password" />
  </p>
  <p>
    密码：<input
      type="password"
      v-model="loginPwd"
      autocomplete="new-password"
    />
  </p>
  <p>
    <button @click="login">登录</button>
  </p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import { IUserInfo, TLoginId, TLoginPwd } from '@/types/user'
import { IResponse } from '@/types/response'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const loginId = ref<TLoginId>('')
const loginPwd = ref<TLoginPwd>('')
const userStore = useUserStore()
const router = useRouter()
const login = () => {
  if (!loginId.value || !loginPwd.value) {
    return
  }
  userStore.login({ loginId: loginId.value, loginPwd: loginPwd.value }).then((res:IResponse<IUserInfo | undefined>) => {
    if (res.data) {
      console.log(res.data)
      ElMessage.success('登录成功')
      router.push({
        name: 'Home'
      })
    }
  })
}
</script>

<style lang="scss" scoped></style>
