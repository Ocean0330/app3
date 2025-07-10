<template>
    <div>
        身份证号码:<input type="text" v-model="form.idCardNumber">
        <br>
        姓名:
        <input type="text" v-model="form.username">
        <br>
        性别:
        <select v-model="form.gender">
            <option value="male">男</option>
            <option value="female">女</option>
        </select>
        <br>
        密码:
        <input type="password" v-model="form.password">
        <br>
    </div>
    <button @click="login">登录</button>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
import { useRouter } from "vue-router"
import { userLogin } from '../../api/user'


const router = useRouter()
const form = reactive({
    idCardNumber: '',
    username: '',
    gender: '',
    password: ''
})
const login = () => {
    console.log(form)
    if (!form.idCardNumber || !form.username || !form.gender || !form.password) {
        alert('请填写所有字段')
        return}
    userLogin(form)
        .then((res: any) => {
            alert(res.data.msg)
            router.push('/about')
        })
        .catch((err) => {
            alert(err.response.data.msg)
        })
}

</script>

<style scoped></style>
