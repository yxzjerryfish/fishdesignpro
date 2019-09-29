<template>
  <div id="app">
    <a-button>按钮</a-button>
    <div id="nav">
      <router-link to="/user/login">login</router-link> |
      <router-link to="/user/register">register</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less"></style>
