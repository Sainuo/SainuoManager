import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _afa9f50e = () => import('..\\pages\\main.vue' /* webpackChunkName: "pages_main" */).then(m => m.default || m)
const _31b22483 = () => import('..\\pages\\main\\users\\index.vue' /* webpackChunkName: "pages_main_users_index" */).then(m => m.default || m)
const _2a619734 = () => import('..\\pages\\main\\demo\\index.vue' /* webpackChunkName: "pages_main_demo_index" */).then(m => m.default || m)
const _5cef5f71 = () => import('..\\pages\\main\\orgnization\\index.vue' /* webpackChunkName: "pages_main_orgnization_index" */).then(m => m.default || m)
const _bba8db0c = () => import('..\\pages\\main\\home\\welcome.vue' /* webpackChunkName: "pages_main_home_welcome" */).then(m => m.default || m)
const _6e680ac6 = () => import('..\\pages\\main\\integration\\AMap.vue' /* webpackChunkName: "pages_main_integration_AMap" */).then(m => m.default || m)
const _a454d1a6 = () => import('..\\pages\\main\\custom\\loaderwindow.vue' /* webpackChunkName: "pages_main_custom_loaderwindow" */).then(m => m.default || m)
const _77e07be0 = () => import('..\\pages\\main\\demo\\form.vue' /* webpackChunkName: "pages_main_demo_form" */).then(m => m.default || m)
const _a85654d4 = () => import('..\\pages\\main\\user\\resetpassword.vue' /* webpackChunkName: "pages_main_user_resetpassword" */).then(m => m.default || m)
const _1ae5edea = () => import('..\\pages\\main\\demo\\listdetail.vue' /* webpackChunkName: "pages_main_demo_listdetail" */).then(m => m.default || m)
const _4727760e = () => import('..\\pages\\main\\user\\edit.vue' /* webpackChunkName: "pages_main_user_edit" */).then(m => m.default || m)
const _7c4567dd = () => import('..\\pages\\main\\custom\\loadcomponent.vue' /* webpackChunkName: "pages_main_custom_loadcomponent" */).then(m => m.default || m)
const _e24c0452 = () => import('..\\pages\\main\\demo\\docs.vue' /* webpackChunkName: "pages_main_demo_docs" */).then(m => m.default || m)
const _974d329a = () => import('..\\pages\\main\\demo\\router.push.vue' /* webpackChunkName: "pages_main_demo_router.push" */).then(m => m.default || m)
const _4a3f3ae0 = () => import('..\\pages\\main\\integration\\CKEditor.vue' /* webpackChunkName: "pages_main_integration_CKEditor" */).then(m => m.default || m)
const _312bb542 = () => import('..\\pages\\main\\integration\\ECharts.vue' /* webpackChunkName: "pages_main_integration_ECharts" */).then(m => m.default || m)
const _2fcadc8a = () => import('..\\pages\\main\\orgnization\\edit.vue' /* webpackChunkName: "pages_main_orgnization_edit" */).then(m => m.default || m)
const _e47f1e0e = () => import('..\\pages\\main\\role\\edit.vue' /* webpackChunkName: "pages_main_role_edit" */).then(m => m.default || m)
const _d022a3fa = () => import('..\\pages\\main\\custom\\component.vue' /* webpackChunkName: "pages_main_custom_component" */).then(m => m.default || m)
const _65f8ab7c = () => import('..\\pages\\main\\demo\\tableexpand.vue' /* webpackChunkName: "pages_main_demo_tableexpand" */).then(m => m.default || m)
const _3ac5e996 = () => import('..\\pages\\main\\demo\\urlQuery.vue' /* webpackChunkName: "pages_main_demo_urlQuery" */).then(m => m.default || m)
const _4a9fb940 = () => import('..\\pages\\main\\custom\\nuxtloader.vue' /* webpackChunkName: "pages_main_custom_nuxtloader" */).then(m => m.default || m)
const _37df4ea2 = () => import('..\\pages\\main\\user\\list.vue' /* webpackChunkName: "pages_main_user_list" */).then(m => m.default || m)
const _740363f0 = () => import('..\\pages\\main\\demo\\importPage.vue' /* webpackChunkName: "pages_main_demo_importPage" */).then(m => m.default || m)
const _4dfe94b8 = () => import('..\\pages\\main\\usercenter\\changepassword.vue' /* webpackChunkName: "pages_main_usercenter_changepassword" */).then(m => m.default || m)
const _d7654526 = () => import('..\\pages\\main\\custom\\windowloader.vue' /* webpackChunkName: "pages_main_custom_windowloader" */).then(m => m.default || m)
const _a84cba8c = () => import('..\\pages\\main\\demo\\list.vue' /* webpackChunkName: "pages_main_demo_list" */).then(m => m.default || m)
const _7e78498d = () => import('..\\pages\\main\\role\\list.vue' /* webpackChunkName: "pages_main_role_list" */).then(m => m.default || m)
const _4e5b2b62 = () => import('..\\pages\\main\\orgnization\\list.vue' /* webpackChunkName: "pages_main_orgnization_list" */).then(m => m.default || m)
const _2a1c3f09 = () => import('..\\pages\\main\\orgnization\\userinorgnization.vue' /* webpackChunkName: "pages_main_orgnization_userinorgnization" */).then(m => m.default || m)
const _50410921 = () => import('..\\pages\\main\\demo\\urlParams\\_id.vue' /* webpackChunkName: "pages_main_demo_urlParams__id" */).then(m => m.default || m)
const _ed1528aa = () => import('..\\pages\\main\\users\\_id.vue' /* webpackChunkName: "pages_main_users__id" */).then(m => m.default || m)
const _3eaa85c2 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'hash',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/main",
			component: _afa9f50e,
			name: "main",
			children: [
				{
					path: "users",
					component: _31b22483,
					name: "main-users"
				},
				{
					path: "demo",
					component: _2a619734,
					name: "main-demo"
				},
				{
					path: "orgnization",
					component: _5cef5f71,
					name: "main-orgnization"
				},
				{
					path: "home/welcome",
					component: _bba8db0c,
					name: "main-home-welcome"
				},
				{
					path: "integration/AMap",
					component: _6e680ac6,
					name: "main-integration-AMap"
				},
				{
					path: "custom/loaderwindow",
					component: _a454d1a6,
					name: "main-custom-loaderwindow"
				},
				{
					path: "demo/form",
					component: _77e07be0,
					name: "main-demo-form"
				},
				{
					path: "user/resetpassword",
					component: _a85654d4,
					name: "main-user-resetpassword"
				},
				{
					path: "demo/listdetail",
					component: _1ae5edea,
					name: "main-demo-listdetail"
				},
				{
					path: "user/edit",
					component: _4727760e,
					name: "main-user-edit"
				},
				{
					path: "custom/loadcomponent",
					component: _7c4567dd,
					name: "main-custom-loadcomponent"
				},
				{
					path: "demo/docs",
					component: _e24c0452,
					name: "main-demo-docs"
				},
				{
					path: "demo/router.push",
					component: _974d329a,
					name: "main-demo-router.push"
				},
				{
					path: "integration/CKEditor",
					component: _4a3f3ae0,
					name: "main-integration-CKEditor"
				},
				{
					path: "integration/ECharts",
					component: _312bb542,
					name: "main-integration-ECharts"
				},
				{
					path: "orgnization/edit",
					component: _2fcadc8a,
					name: "main-orgnization-edit"
				},
				{
					path: "role/edit",
					component: _e47f1e0e,
					name: "main-role-edit"
				},
				{
					path: "custom/component",
					component: _d022a3fa,
					name: "main-custom-component"
				},
				{
					path: "demo/tableexpand",
					component: _65f8ab7c,
					name: "main-demo-tableexpand"
				},
				{
					path: "demo/urlQuery",
					component: _3ac5e996,
					name: "main-demo-urlQuery"
				},
				{
					path: "custom/nuxtloader",
					component: _4a9fb940,
					name: "main-custom-nuxtloader"
				},
				{
					path: "user/list",
					component: _37df4ea2,
					name: "main-user-list"
				},
				{
					path: "demo/importPage",
					component: _740363f0,
					name: "main-demo-importPage"
				},
				{
					path: "usercenter/changepassword",
					component: _4dfe94b8,
					name: "main-usercenter-changepassword"
				},
				{
					path: "custom/windowloader",
					component: _d7654526,
					name: "main-custom-windowloader"
				},
				{
					path: "demo/list",
					component: _a84cba8c,
					name: "main-demo-list"
				},
				{
					path: "role/list",
					component: _7e78498d,
					name: "main-role-list"
				},
				{
					path: "orgnization/list",
					component: _4e5b2b62,
					name: "main-orgnization-list"
				},
				{
					path: "orgnization/userinorgnization",
					component: _2a1c3f09,
					name: "main-orgnization-userinorgnization"
				},
				{
					path: "demo/urlParams/:id?",
					component: _50410921,
					name: "main-demo-urlParams-id"
				},
				{
					path: "users/:id?",
					component: _ed1528aa,
					name: "main-users-id"
				}
			]
		},
		{
			path: "/",
			component: _3eaa85c2,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
