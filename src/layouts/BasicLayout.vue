<template>
    <div>
        <Header />
        <Menu />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "./Head";
import Menu from "./Sidemenu";
export default {
    components: {
        Header,Menu
    }
}
</script>