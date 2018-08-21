<template>
  <div id="app">
    <!-- <Row>
      <Menu>
        <Menu-item>
          <router-link to="/login">登录</router-link>
        </Menu-item>
        <Menu-item>
          <router-link to="/main">主页</router-link>
        </Menu-item>
      </Menu>
    </Row> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
