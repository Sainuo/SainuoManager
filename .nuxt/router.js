import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _afa9f50e = () => import('..\\pages\\main.vue' /* webpackChunkName: "pages_main" */).then(m => m.default || m)
const _31b22483 = () => import('..\\pages\\main\\users\\index.vue' /* webpackChunkName: "pages_main_users_index" */).then(m => m.default || m)
const _5cef5f71 = () => import('..\\pages\\main\\orgnization\\index.vue' /* webpackChunkName: "pages_main_orgnization_index" */).then(m => m.default || m)
const _1a1e484a = () => import('..\\pages\\main\\tester\\index.vue' /* webpackChunkName: "pages_main_tester_index" */).then(m => m.default || m)
const _07d46607 = () => import('..\\pages\\main\\log\\index.vue' /* webpackChunkName: "pages_main_log_index" */).then(m => m.default || m)
const _2a619734 = () => import('..\\pages\\main\\demo\\index.vue' /* webpackChunkName: "pages_main_demo_index" */).then(m => m.default || m)
const _567e9e92 = () => import('..\\pages\\main\\project\\index.vue' /* webpackChunkName: "pages_main_project_index" */).then(m => m.default || m)
const _e932e262 = () => import('..\\pages\\main\\tester\\crf.vue' /* webpackChunkName: "pages_main_tester_crf" */).then(m => m.default || m)
const _4dfe94b8 = () => import('..\\pages\\main\\usercenter\\changepassword.vue' /* webpackChunkName: "pages_main_usercenter_changepassword" */).then(m => m.default || m)
const _4a9fb940 = () => import('..\\pages\\main\\custom\\nuxtloader.vue' /* webpackChunkName: "pages_main_custom_nuxtloader" */).then(m => m.default || m)
const _37df4ea2 = () => import('..\\pages\\main\\user\\list.vue' /* webpackChunkName: "pages_main_user_list" */).then(m => m.default || m)
const _44e93185 = () => import('..\\pages\\main\\tester\\editcrf.vue' /* webpackChunkName: "pages_main_tester_editcrf" */).then(m => m.default || m)
const _77e07be0 = () => import('..\\pages\\main\\demo\\form.vue' /* webpackChunkName: "pages_main_demo_form" */).then(m => m.default || m)
const _e24c0452 = () => import('..\\pages\\main\\demo\\docs.vue' /* webpackChunkName: "pages_main_demo_docs" */).then(m => m.default || m)
const _6c066a7a = () => import('..\\pages\\main\\project\\edit.vue' /* webpackChunkName: "pages_main_project_edit" */).then(m => m.default || m)
const _312bb542 = () => import('..\\pages\\main\\integration\\ECharts.vue' /* webpackChunkName: "pages_main_integration_ECharts" */).then(m => m.default || m)
const _1ae5edea = () => import('..\\pages\\main\\demo\\listdetail.vue' /* webpackChunkName: "pages_main_demo_listdetail" */).then(m => m.default || m)
const _5cbe430e = () => import('..\\pages\\main\\project\\list.vue' /* webpackChunkName: "pages_main_project_list" */).then(m => m.default || m)
const _a85654d4 = () => import('..\\pages\\main\\user\\resetpassword.vue' /* webpackChunkName: "pages_main_user_resetpassword" */).then(m => m.default || m)
const _2fcadc8a = () => import('..\\pages\\main\\orgnization\\edit.vue' /* webpackChunkName: "pages_main_orgnization_edit" */).then(m => m.default || m)
const _974d329a = () => import('..\\pages\\main\\demo\\router.push.vue' /* webpackChunkName: "pages_main_demo_router.push" */).then(m => m.default || m)
const _4a3f3ae0 = () => import('..\\pages\\main\\integration\\CKEditor.vue' /* webpackChunkName: "pages_main_integration_CKEditor" */).then(m => m.default || m)
const _91ac95b2 = () => import('..\\pages\\main\\tester\\forms.vue' /* webpackChunkName: "pages_main_tester_forms" */).then(m => m.default || m)
const _ab8b3496 = () => import('..\\pages\\main\\tester\\forms\\medItemHepatitisBHistory.vue' /* webpackChunkName: "pages_main_tester_forms_medItemHepatitisBHistory" */).then(m => m.default || m)
const _b9069cde = () => import('..\\pages\\main\\tester\\forms\\medItemVitalSign.vue' /* webpackChunkName: "pages_main_tester_forms_medItemVitalSign" */).then(m => m.default || m)
const _638cc8a6 = () => import('..\\pages\\main\\tester\\forms\\medItemHCGTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemHCGTest" */).then(m => m.default || m)
const _0b8b80bc = () => import('..\\pages\\main\\tester\\forms\\medItemImmunizationTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemImmunizationTest" */).then(m => m.default || m)
const _3fcb030d = () => import('..\\pages\\main\\tester\\forms\\medItemPatientAgreement.vue' /* webpackChunkName: "pages_main_tester_forms_medItemPatientAgreement" */).then(m => m.default || m)
const _14fd3880 = () => import('..\\pages\\main\\tester\\forms\\medItemDiseaseHistory.vue' /* webpackChunkName: "pages_main_tester_forms_medItemDiseaseHistory" */).then(m => m.default || m)
const _6e371c24 = () => import('..\\pages\\main\\tester\\forms\\medItemBloodRoutineTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemBloodRoutineTest" */).then(m => m.default || m)
const _5472d568 = () => import('..\\pages\\main\\tester\\forms\\medItemBloodCoagulationTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemBloodCoagulationTest" */).then(m => m.default || m)
const _083886f7 = () => import('..\\pages\\main\\tester\\forms\\medItemThyroidTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemThyroidTest" */).then(m => m.default || m)
const _5579a85a = () => import('..\\pages\\main\\tester\\forms\\medItemHbA1CTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemHbA1CTest" */).then(m => m.default || m)
const _c987afe8 = () => import('..\\pages\\main\\tester\\forms\\medItemBodyPhysicWithHalfYear.vue' /* webpackChunkName: "pages_main_tester_forms_medItemBodyPhysicWithHalfYear" */).then(m => m.default || m)
const _131c2797 = () => import('..\\pages\\main\\tester\\forms\\medItemCKMBTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemCKMBTest" */).then(m => m.default || m)
const _1329cb32 = () => import('..\\pages\\main\\tester\\forms\\medItemFertility.vue' /* webpackChunkName: "pages_main_tester_forms_medItemFertility" */).then(m => m.default || m)
const _66b502db = () => import('..\\pages\\main\\tester\\forms\\medItemUrineRoutineTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemUrineRoutineTest" */).then(m => m.default || m)
const _68cd38a4 = () => import('..\\pages\\main\\tester\\forms\\medItemAlcoholHistory.vue' /* webpackChunkName: "pages_main_tester_forms_medItemAlcoholHistory" */).then(m => m.default || m)
const _3caca761 = () => import('..\\pages\\main\\tester\\forms\\medItemHepatocirrhosisTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemHepatocirrhosisTest" */).then(m => m.default || m)
const _65f8ab7c = () => import('..\\pages\\main\\demo\\tableexpand.vue' /* webpackChunkName: "pages_main_demo_tableexpand" */).then(m => m.default || m)
const _5c0d8d5e = () => import('..\\pages\\main\\tester\\sms.vue' /* webpackChunkName: "pages_main_tester_sms" */).then(m => m.default || m)
const _3ac5e996 = () => import('..\\pages\\main\\demo\\urlQuery.vue' /* webpackChunkName: "pages_main_demo_urlQuery" */).then(m => m.default || m)
const _e47f1e0e = () => import('..\\pages\\main\\role\\edit.vue' /* webpackChunkName: "pages_main_role_edit" */).then(m => m.default || m)
const _d022a3fa = () => import('..\\pages\\main\\custom\\component.vue' /* webpackChunkName: "pages_main_custom_component" */).then(m => m.default || m)
const _6e680ac6 = () => import('..\\pages\\main\\integration\\AMap.vue' /* webpackChunkName: "pages_main_integration_AMap" */).then(m => m.default || m)
const _7c4567dd = () => import('..\\pages\\main\\custom\\loadcomponent.vue' /* webpackChunkName: "pages_main_custom_loadcomponent" */).then(m => m.default || m)
const _a84cba8c = () => import('..\\pages\\main\\demo\\list.vue' /* webpackChunkName: "pages_main_demo_list" */).then(m => m.default || m)
const _5522ac7c = () => import('..\\pages\\main\\tester\\edit.vue' /* webpackChunkName: "pages_main_tester_edit" */).then(m => m.default || m)
const _4727760e = () => import('..\\pages\\main\\user\\edit.vue' /* webpackChunkName: "pages_main_user_edit" */).then(m => m.default || m)
const _32353761 = () => import('..\\pages\\main\\tester\\notqualified.vue' /* webpackChunkName: "pages_main_tester_notqualified" */).then(m => m.default || m)
const _740363f0 = () => import('..\\pages\\main\\demo\\importPage.vue' /* webpackChunkName: "pages_main_demo_importPage" */).then(m => m.default || m)
const _3746b387 = () => import('..\\pages\\main\\tester\\quit.vue' /* webpackChunkName: "pages_main_tester_quit" */).then(m => m.default || m)
const _6c5a3471 = () => import('..\\pages\\main\\project\\projectinorganization.vue' /* webpackChunkName: "pages_main_project_projectinorganization" */).then(m => m.default || m)
const _d7654526 = () => import('..\\pages\\main\\custom\\windowloader.vue' /* webpackChunkName: "pages_main_custom_windowloader" */).then(m => m.default || m)
const _7e78498d = () => import('..\\pages\\main\\role\\list.vue' /* webpackChunkName: "pages_main_role_list" */).then(m => m.default || m)
const _bba8db0c = () => import('..\\pages\\main\\home\\welcome.vue' /* webpackChunkName: "pages_main_home_welcome" */).then(m => m.default || m)
const _a454d1a6 = () => import('..\\pages\\main\\custom\\loaderwindow.vue' /* webpackChunkName: "pages_main_custom_loaderwindow" */).then(m => m.default || m)
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
					path: "orgnization",
					component: _5cef5f71,
					name: "main-orgnization"
				},
				{
					path: "tester",
					component: _1a1e484a,
					name: "main-tester"
				},
				{
					path: "log",
					component: _07d46607,
					name: "main-log"
				},
				{
					path: "demo",
					component: _2a619734,
					name: "main-demo"
				},
				{
					path: "project",
					component: _567e9e92,
					name: "main-project"
				},
				{
					path: "tester/crf",
					component: _e932e262,
					name: "main-tester-crf"
				},
				{
					path: "usercenter/changepassword",
					component: _4dfe94b8,
					name: "main-usercenter-changepassword"
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
					path: "tester/editcrf",
					component: _44e93185,
					name: "main-tester-editcrf"
				},
				{
					path: "demo/form",
					component: _77e07be0,
					name: "main-demo-form"
				},
				{
					path: "demo/docs",
					component: _e24c0452,
					name: "main-demo-docs"
				},
				{
					path: "project/edit",
					component: _6c066a7a,
					name: "main-project-edit"
				},
				{
					path: "integration/ECharts",
					component: _312bb542,
					name: "main-integration-ECharts"
				},
				{
					path: "demo/listdetail",
					component: _1ae5edea,
					name: "main-demo-listdetail"
				},
				{
					path: "project/list",
					component: _5cbe430e,
					name: "main-project-list"
				},
				{
					path: "user/resetpassword",
					component: _a85654d4,
					name: "main-user-resetpassword"
				},
				{
					path: "orgnization/edit",
					component: _2fcadc8a,
					name: "main-orgnization-edit"
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
					path: "tester/forms",
					component: _91ac95b2,
					name: "main-tester-forms",
					children: [
						{
							path: "medItemHepatitisBHistory",
							component: _ab8b3496,
							name: "main-tester-forms-medItemHepatitisBHistory"
						},
						{
							path: "medItemVitalSign",
							component: _b9069cde,
							name: "main-tester-forms-medItemVitalSign"
						},
						{
							path: "medItemHCGTest",
							component: _638cc8a6,
							name: "main-tester-forms-medItemHCGTest"
						},
						{
							path: "medItemImmunizationTest",
							component: _0b8b80bc,
							name: "main-tester-forms-medItemImmunizationTest"
						},
						{
							path: "medItemPatientAgreement",
							component: _3fcb030d,
							name: "main-tester-forms-medItemPatientAgreement"
						},
						{
							path: "medItemDiseaseHistory",
							component: _14fd3880,
							name: "main-tester-forms-medItemDiseaseHistory"
						},
						{
							path: "medItemBloodRoutineTest",
							component: _6e371c24,
							name: "main-tester-forms-medItemBloodRoutineTest"
						},
						{
							path: "medItemBloodCoagulationTest",
							component: _5472d568,
							name: "main-tester-forms-medItemBloodCoagulationTest"
						},
						{
							path: "medItemThyroidTest",
							component: _083886f7,
							name: "main-tester-forms-medItemThyroidTest"
						},
						{
							path: "medItemHbA1CTest",
							component: _5579a85a,
							name: "main-tester-forms-medItemHbA1CTest"
						},
						{
							path: "medItemBodyPhysicWithHalfYear",
							component: _c987afe8,
							name: "main-tester-forms-medItemBodyPhysicWithHalfYear"
						},
						{
							path: "medItemCKMBTest",
							component: _131c2797,
							name: "main-tester-forms-medItemCKMBTest"
						},
						{
							path: "medItemFertility",
							component: _1329cb32,
							name: "main-tester-forms-medItemFertility"
						},
						{
							path: "medItemUrineRoutineTest",
							component: _66b502db,
							name: "main-tester-forms-medItemUrineRoutineTest"
						},
						{
							path: "medItemAlcoholHistory",
							component: _68cd38a4,
							name: "main-tester-forms-medItemAlcoholHistory"
						},
						{
							path: "medItemHepatocirrhosisTest",
							component: _3caca761,
							name: "main-tester-forms-medItemHepatocirrhosisTest"
						}
					]
				},
				{
					path: "demo/tableexpand",
					component: _65f8ab7c,
					name: "main-demo-tableexpand"
				},
				{
					path: "tester/sms",
					component: _5c0d8d5e,
					name: "main-tester-sms"
				},
				{
					path: "demo/urlQuery",
					component: _3ac5e996,
					name: "main-demo-urlQuery"
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
					path: "integration/AMap",
					component: _6e680ac6,
					name: "main-integration-AMap"
				},
				{
					path: "custom/loadcomponent",
					component: _7c4567dd,
					name: "main-custom-loadcomponent"
				},
				{
					path: "demo/list",
					component: _a84cba8c,
					name: "main-demo-list"
				},
				{
					path: "tester/edit",
					component: _5522ac7c,
					name: "main-tester-edit"
				},
				{
					path: "user/edit",
					component: _4727760e,
					name: "main-user-edit"
				},
				{
					path: "tester/notqualified",
					component: _32353761,
					name: "main-tester-notqualified"
				},
				{
					path: "demo/importPage",
					component: _740363f0,
					name: "main-demo-importPage"
				},
				{
					path: "tester/quit",
					component: _3746b387,
					name: "main-tester-quit"
				},
				{
					path: "project/projectinorganization",
					component: _6c5a3471,
					name: "main-project-projectinorganization"
				},
				{
					path: "custom/windowloader",
					component: _d7654526,
					name: "main-custom-windowloader"
				},
				{
					path: "role/list",
					component: _7e78498d,
					name: "main-role-list"
				},
				{
					path: "home/welcome",
					component: _bba8db0c,
					name: "main-home-welcome"
				},
				{
					path: "custom/loaderwindow",
					component: _a454d1a6,
					name: "main-custom-loaderwindow"
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
