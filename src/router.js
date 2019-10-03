import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: { render: h => h("router-view") },
      children: [
        {
          path: "/user/login",
          namne: "login",
          component: () =>
            import(/* webpackChunkName: "User" */ "./views/User/Login.vue")
        },
        {
          path: "/user/register",
          namne: "register",
          component: () =>
            import(/* webpackChunkName: "User" */ "./views/User/Register.vue")
        }
      ]
    },
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "Home" */ "./layouts/BasicLayout.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
