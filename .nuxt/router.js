import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _65ded10a = () => import('..\\pages\\main.vue' /* webpackChunkName: "pages_main" */).then(m => m.default || m)
const _38270b05 = () => import('..\\pages\\main\\users\\index.vue' /* webpackChunkName: "pages_main_users_index" */).then(m => m.default || m)
const _7289dc73 = () => import('..\\pages\\main\\orgnization\\index.vue' /* webpackChunkName: "pages_main_orgnization_index" */).then(m => m.default || m)
const _3a7b14b8 = () => import('..\\pages\\main\\demo\\index.vue' /* webpackChunkName: "pages_main_demo_index" */).then(m => m.default || m)
const _ae2e34f8 = () => import('..\\pages\\main\\integration\\AMap.vue' /* webpackChunkName: "pages_main_integration_AMap" */).then(m => m.default || m)
const _603a3642 = () => import('..\\pages\\main\\custom\\nuxtloader.vue' /* webpackChunkName: "pages_main_custom_nuxtloader" */).then(m => m.default || m)
const _224b7d1e = () => import('..\\pages\\main\\demo\\router.push.vue' /* webpackChunkName: "pages_main_demo_router.push" */).then(m => m.default || m)
const _5b20ee7e = () => import('..\\pages\\main\\custom\\component.vue' /* webpackChunkName: "pages_main_custom_component" */).then(m => m.default || m)
const _229b6c79 = () => import('..\\pages\\main\\orgnization\\edit.vue' /* webpackChunkName: "pages_main_orgnization_edit" */).then(m => m.default || m)
const _1afa9cd9 = () => import('..\\pages\\main\\demo\\docs.vue' /* webpackChunkName: "pages_main_demo_docs" */).then(m => m.default || m)
const _1353450d = () => import('..\\pages\\main\\orgnization\\list.vue' /* webpackChunkName: "pages_main_orgnization_list" */).then(m => m.default || m)
const _596fd5e0 = () => import('..\\pages\\main\\user\\edit.vue' /* webpackChunkName: "pages_main_user_edit" */).then(m => m.default || m)
const _4f46de8d = () => import('..\\pages\\main\\demo\\listdetail.vue' /* webpackChunkName: "pages_main_demo_listdetail" */).then(m => m.default || m)
const _37fa41bc = () => import('..\\pages\\main\\demo\\list.vue' /* webpackChunkName: "pages_main_demo_list" */).then(m => m.default || m)
const _005969e1 = () => import('..\\pages\\main\\integration\\ECharts.vue' /* webpackChunkName: "pages_main_integration_ECharts" */).then(m => m.default || m)
const _a586bc22 = () => import('..\\pages\\main\\custom\\windowloader.vue' /* webpackChunkName: "pages_main_custom_windowloader" */).then(m => m.default || m)
const _4f38869e = () => import('..\\pages\\main\\integration\\CKEditor.vue' /* webpackChunkName: "pages_main_integration_CKEditor" */).then(m => m.default || m)
const _0a98e88f = () => import('..\\pages\\main\\role\\list.vue' /* webpackChunkName: "pages_main_role_list" */).then(m => m.default || m)
const _5e858d1c = () => import('..\\pages\\main\\demo\\importPage.vue' /* webpackChunkName: "pages_main_demo_importPage" */).then(m => m.default || m)
const _5b692692 = () => import('..\\pages\\main\\orgnization\\editTree.vue' /* webpackChunkName: "pages_main_orgnization_editTree" */).then(m => m.default || m)
const _04011ae2 = () => import('..\\pages\\main\\demo\\form.vue' /* webpackChunkName: "pages_main_demo_form" */).then(m => m.default || m)
const _fd8298ca = () => import('..\\pages\\main\\custom\\loadcomponent.vue' /* webpackChunkName: "pages_main_custom_loadcomponent" */).then(m => m.default || m)
const _7fe9490b = () => import('..\\pages\\main\\orgnization\\userinorgnization.vue' /* webpackChunkName: "pages_main_orgnization_userinorgnization" */).then(m => m.default || m)
const _1f725937 = () => import('..\\pages\\main\\demo\\urlQuery.vue' /* webpackChunkName: "pages_main_demo_urlQuery" */).then(m => m.default || m)
const _780024b8 = () => import('..\\pages\\main\\user\\list.vue' /* webpackChunkName: "pages_main_user_list" */).then(m => m.default || m)
const _727648a2 = () => import('..\\pages\\main\\custom\\loaderwindow.vue' /* webpackChunkName: "pages_main_custom_loaderwindow" */).then(m => m.default || m)
const _bf0cf38c = () => import('..\\pages\\main\\demo\\tableexpand.vue' /* webpackChunkName: "pages_main_demo_tableexpand" */).then(m => m.default || m)
const _6a537c38 = () => import('..\\pages\\main\\home\\welcome.vue' /* webpackChunkName: "pages_main_home_welcome" */).then(m => m.default || m)
const _69304da3 = () => import('..\\pages\\main\\demo\\urlParams\\_id.vue' /* webpackChunkName: "pages_main_demo_urlParams__id" */).then(m => m.default || m)
const _15960aad = () => import('..\\pages\\main\\users\\_id.vue' /* webpackChunkName: "pages_main_users__id" */).then(m => m.default || m)
const _93119800 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
			component: _65ded10a,
			name: "main",
			children: [
				{
					path: "users",
					component: _38270b05,
					name: "main-users"
				},
				{
					path: "orgnization",
					component: _7289dc73,
					name: "main-orgnization"
				},
				{
					path: "demo",
					component: _3a7b14b8,
					name: "main-demo"
				},
				{
					path: "integration/AMap",
					component: _ae2e34f8,
					name: "main-integration-AMap"
				},
				{
					path: "custom/nuxtloader",
					component: _603a3642,
					name: "main-custom-nuxtloader"
				},
				{
					path: "demo/router.push",
					component: _224b7d1e,
					name: "main-demo-router.push"
				},
				{
					path: "custom/component",
					component: _5b20ee7e,
					name: "main-custom-component"
				},
				{
					path: "orgnization/edit",
					component: _229b6c79,
					name: "main-orgnization-edit"
				},
				{
					path: "demo/docs",
					component: _1afa9cd9,
					name: "main-demo-docs"
				},
				{
					path: "orgnization/list",
					component: _1353450d,
					name: "main-orgnization-list"
				},
				{
					path: "user/edit",
					component: _596fd5e0,
					name: "main-user-edit"
				},
				{
					path: "demo/listdetail",
					component: _4f46de8d,
					name: "main-demo-listdetail"
				},
				{
					path: "demo/list",
					component: _37fa41bc,
					name: "main-demo-list"
				},
				{
					path: "integration/ECharts",
					component: _005969e1,
					name: "main-integration-ECharts"
				},
				{
					path: "custom/windowloader",
					component: _a586bc22,
					name: "main-custom-windowloader"
				},
				{
					path: "integration/CKEditor",
					component: _4f38869e,
					name: "main-integration-CKEditor"
				},
				{
					path: "role/list",
					component: _0a98e88f,
					name: "main-role-list"
				},
				{
					path: "demo/importPage",
					component: _5e858d1c,
					name: "main-demo-importPage"
				},
				{
					path: "orgnization/editTree",
					component: _5b692692,
					name: "main-orgnization-editTree"
				},
				{
					path: "demo/form",
					component: _04011ae2,
					name: "main-demo-form"
				},
				{
					path: "custom/loadcomponent",
					component: _fd8298ca,
					name: "main-custom-loadcomponent"
				},
				{
					path: "orgnization/userinorgnization",
					component: _7fe9490b,
					name: "main-orgnization-userinorgnization"
				},
				{
					path: "demo/urlQuery",
					component: _1f725937,
					name: "main-demo-urlQuery"
				},
				{
					path: "user/list",
					component: _780024b8,
					name: "main-user-list"
				},
				{
					path: "custom/loaderwindow",
					component: _727648a2,
					name: "main-custom-loaderwindow"
				},
				{
					path: "demo/tableexpand",
					component: _bf0cf38c,
					name: "main-demo-tableexpand"
				},
				{
					path: "home/welcome",
					component: _6a537c38,
					name: "main-home-welcome"
				},
				{
					path: "demo/urlParams/:id?",
					component: _69304da3,
					name: "main-demo-urlParams-id"
				},
				{
					path: "users/:id?",
					component: _15960aad,
					name: "main-users-id"
				}
			]
		},
		{
			path: "/",
			component: _93119800,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
