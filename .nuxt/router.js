import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _2cd52ddf = () => import('..\\pages\\main.vue' /* webpackChunkName: "pages_main" */).then(m => m.default || m)
const _5ae2a269 = () => import('..\\pages\\main\\users\\index.vue' /* webpackChunkName: "pages_main_users_index" */).then(m => m.default || m)
const _58314e52 = () => import('..\\pages\\main\\orgnization\\index.vue' /* webpackChunkName: "pages_main_orgnization_index" */).then(m => m.default || m)
const _16fd8724 = () => import('..\\pages\\main\\tester\\index.vue' /* webpackChunkName: "pages_main_tester_index" */).then(m => m.default || m)
const _ab20460a = () => import('..\\pages\\main\\article\\index.vue' /* webpackChunkName: "pages_main_article_index" */).then(m => m.default || m)
const _704461c0 = () => import('..\\pages\\main\\demo\\index.vue' /* webpackChunkName: "pages_main_demo_index" */).then(m => m.default || m)
const _5eb7256d = () => import('..\\pages\\main\\log\\index.vue' /* webpackChunkName: "pages_main_log_index" */).then(m => m.default || m)
const _14f18a10 = () => import('..\\pages\\main\\project\\index.vue' /* webpackChunkName: "pages_main_project_index" */).then(m => m.default || m)
const _69d72172 = () => import('..\\pages\\main\\tester\\notqualified.vue' /* webpackChunkName: "pages_main_tester_notqualified" */).then(m => m.default || m)
const _fa022046 = () => import('..\\pages\\main\\custom\\component.vue' /* webpackChunkName: "pages_main_custom_component" */).then(m => m.default || m)
const _bb4d7652 = () => import('..\\pages\\main\\project\\projectinorganization.vue' /* webpackChunkName: "pages_main_project_projectinorganization" */).then(m => m.default || m)
const _1a1cda6e = () => import('..\\pages\\main\\custom\\bizbase64image.vue' /* webpackChunkName: "pages_main_custom_bizbase64image" */).then(m => m.default || m)
const _34868586 = () => import('..\\pages\\main\\demo\\docs.vue' /* webpackChunkName: "pages_main_demo_docs" */).then(m => m.default || m)
const _969158c0 = () => import('..\\pages\\main\\demo\\tableForm.vue' /* webpackChunkName: "pages_main_demo_tableForm" */).then(m => m.default || m)
const _73567ed6 = () => import('..\\pages\\main\\demo\\importPage.vue' /* webpackChunkName: "pages_main_demo_importPage" */).then(m => m.default || m)
const _02c1b0b0 = () => import('..\\pages\\main\\tester\\edit.vue' /* webpackChunkName: "pages_main_tester_edit" */).then(m => m.default || m)
const _c12caee6 = () => import('..\\pages\\main\\demo\\router.push.vue' /* webpackChunkName: "pages_main_demo_router.push" */).then(m => m.default || m)
const _6077316d = () => import('..\\pages\\main\\tester\\quit.vue' /* webpackChunkName: "pages_main_tester_quit" */).then(m => m.default || m)
const _e27be3f0 = () => import('..\\pages\\main\\user\\list.vue' /* webpackChunkName: "pages_main_user_list" */).then(m => m.default || m)
const _ff6d4576 = () => import('..\\pages\\main\\integration\\ECharts.vue' /* webpackChunkName: "pages_main_integration_ECharts" */).then(m => m.default || m)
const _fcb4b0ca = () => import('..\\pages\\main\\demo\\urlQuery.vue' /* webpackChunkName: "pages_main_demo_urlQuery" */).then(m => m.default || m)
const _601b4f6f = () => import('..\\pages\\main\\orgnization\\userinorgnization.vue' /* webpackChunkName: "pages_main_orgnization_userinorgnization" */).then(m => m.default || m)
const _36b99f42 = () => import('..\\pages\\main\\role\\edit.vue' /* webpackChunkName: "pages_main_role_edit" */).then(m => m.default || m)
const _68e5a954 = () => import('..\\pages\\main\\project\\edit.vue' /* webpackChunkName: "pages_main_project_edit" */).then(m => m.default || m)
const _97ee17fe = () => import('..\\pages\\main\\tester\\forms.vue' /* webpackChunkName: "pages_main_tester_forms" */).then(m => m.default || m)
const _846fe0d8 = () => import('..\\pages\\main\\tester\\forms\\medItemAlcoholHistory.vue' /* webpackChunkName: "pages_main_tester_forms_medItemAlcoholHistory" */).then(m => m.default || m)
const _307015ee = () => import('..\\pages\\main\\tester\\forms\\medItemVitalSignWithDifference.vue' /* webpackChunkName: "pages_main_tester_forms_medItemVitalSignWithDifference" */).then(m => m.default || m)
const _ebb16bae = () => import('..\\pages\\main\\tester\\forms\\medItemHBVDNA.vue' /* webpackChunkName: "pages_main_tester_forms_medItemHBVDNA" */).then(m => m.default || m)
const _97866e0a = () => import('..\\pages\\main\\tester\\forms\\medItemCardiogram.vue' /* webpackChunkName: "pages_main_tester_forms_medItemCardiogram" */).then(m => m.default || m)
const _b564565e = () => import('..\\pages\\main\\tester\\forms\\medItemThyroidTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemThyroidTest" */).then(m => m.default || m)
const _6b0b8df2 = () => import('..\\pages\\main\\tester\\forms\\medItemBodyPhysicWithHalfYear.vue' /* webpackChunkName: "pages_main_tester_forms_medItemBodyPhysicWithHalfYear" */).then(m => m.default || m)
const _f02f657e = () => import('..\\pages\\main\\tester\\forms\\medItemUrineRoutineTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemUrineRoutineTest" */).then(m => m.default || m)
const _f68ac07c = () => import('..\\pages\\main\\tester\\forms\\medItemDrugCombinationRecord.vue' /* webpackChunkName: "pages_main_tester_forms_medItemDrugCombinationRecord" */).then(m => m.default || m)
const _c5a11884 = () => import('..\\pages\\main\\tester\\forms\\medItemBloodSerumTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemBloodSerumTest" */).then(m => m.default || m)
const _4f5f20dc = () => import('..\\pages\\main\\tester\\forms\\medItemBodyPhysic.vue' /* webpackChunkName: "pages_main_tester_forms_medItemBodyPhysic" */).then(m => m.default || m)
const _53e0e798 = () => import('..\\pages\\main\\tester\\forms\\medItemBellUltrasound.vue' /* webpackChunkName: "pages_main_tester_forms_medItemBellUltrasound" */).then(m => m.default || m)
const _2cbecb22 = () => import('..\\pages\\main\\tester\\forms\\medItemImmunizationTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemImmunizationTest" */).then(m => m.default || m)
const _7d1aa681 = () => import('..\\pages\\main\\tester\\forms\\medItemTlymphocytesTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemTlymphocytesTest" */).then(m => m.default || m)
const _491b37fd = () => import('..\\pages\\main\\tester\\forms\\medItemCKMBTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemCKMBTest" */).then(m => m.default || m)
const _c5e670e8 = () => import('..\\pages\\main\\tester\\forms\\medItemFertility.vue' /* webpackChunkName: "pages_main_tester_forms_medItemFertility" */).then(m => m.default || m)
const _5b5f88ea = () => import('..\\pages\\main\\tester\\forms\\medItemBloodBiochemistryTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemBloodBiochemistryTest" */).then(m => m.default || m)
const _1735e4a8 = () => import('..\\pages\\main\\tester\\forms\\medItemBloodSampleBackup.vue' /* webpackChunkName: "pages_main_tester_forms_medItemBloodSampleBackup" */).then(m => m.default || m)
const _2d5fadeb = () => import('..\\pages\\main\\tester\\forms\\medItemVitalSign.vue' /* webpackChunkName: "pages_main_tester_forms_medItemVitalSign" */).then(m => m.default || m)
const _60fe4d73 = () => import('..\\pages\\main\\tester\\forms\\medItemPatientAgreement.vue' /* webpackChunkName: "pages_main_tester_forms_medItemPatientAgreement" */).then(m => m.default || m)
const _440f3136 = () => import('..\\pages\\main\\tester\\forms\\medItemAdverseEvent.vue' /* webpackChunkName: "pages_main_tester_forms_medItemAdverseEvent" */).then(m => m.default || m)
const _6729098a = () => import('..\\pages\\main\\tester\\forms\\medItemHepatocirrhosisTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemHepatocirrhosisTest" */).then(m => m.default || m)
const _e12b32ec = () => import('..\\pages\\main\\tester\\forms\\medItemBloodRoutineTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemBloodRoutineTest" */).then(m => m.default || m)
const _a11f2fe2 = () => import('..\\pages\\main\\tester\\forms\\medItemHepatitisBHistory.vue' /* webpackChunkName: "pages_main_tester_forms_medItemHepatitisBHistory" */).then(m => m.default || m)
const _d251d900 = () => import('..\\pages\\main\\tester\\forms\\medItemHCGTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemHCGTest" */).then(m => m.default || m)
const _5f26282d = () => import('..\\pages\\main\\tester\\forms\\medItemHbA1CTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemHbA1CTest" */).then(m => m.default || m)
const _3de23cb2 = () => import('..\\pages\\main\\tester\\forms\\medItemBloodCoagulationTest.vue' /* webpackChunkName: "pages_main_tester_forms_medItemBloodCoagulationTest" */).then(m => m.default || m)
const _072be466 = () => import('..\\pages\\main\\tester\\forms\\medItemDiseaseHistory.vue' /* webpackChunkName: "pages_main_tester_forms_medItemDiseaseHistory" */).then(m => m.default || m)
const _3fff302c = () => import('..\\pages\\main\\tester\\forms\\medItemIfPatientContinueResearch.vue' /* webpackChunkName: "pages_main_tester_forms_medItemIfPatientContinueResearch" */).then(m => m.default || m)
const _44346526 = () => import('..\\pages\\main\\tester\\forms\\medItemAFP.vue' /* webpackChunkName: "pages_main_tester_forms_medItemAFP" */).then(m => m.default || m)
const _1c9065f8 = () => import('..\\pages\\main\\demo\\listForm.vue' /* webpackChunkName: "pages_main_demo_listForm" */).then(m => m.default || m)
const _0f789f36 = () => import('..\\pages\\main\\article\\category.vue' /* webpackChunkName: "pages_main_article_category" */).then(m => m.default || m)
const _5a1b5aef = () => import('..\\pages\\main\\article\\categoryedit.vue' /* webpackChunkName: "pages_main_article_categoryedit" */).then(m => m.default || m)
const _1ff28ca2 = () => import('..\\pages\\main\\demo\\fontawesome.vue' /* webpackChunkName: "pages_main_demo_fontawesome" */).then(m => m.default || m)
const _f217bc42 = () => import('..\\pages\\main\\tester\\editcrf.vue' /* webpackChunkName: "pages_main_tester_editcrf" */).then(m => m.default || m)
const _5549ee1a = () => import('..\\pages\\main\\role\\list.vue' /* webpackChunkName: "pages_main_role_list" */).then(m => m.default || m)
const _0c33e90a = () => import('..\\pages\\main\\usercenter\\changepassword.vue' /* webpackChunkName: "pages_main_usercenter_changepassword" */).then(m => m.default || m)
const _576e66ab = () => import('..\\pages\\main\\tester\\sms.vue' /* webpackChunkName: "pages_main_tester_sms" */).then(m => m.default || m)
const _59aa58d6 = () => import('..\\pages\\main\\orgnization\\edit.vue' /* webpackChunkName: "pages_main_orgnization_edit" */).then(m => m.default || m)
const _62798974 = () => import('..\\pages\\main\\demo\\form.vue' /* webpackChunkName: "pages_main_demo_form" */).then(m => m.default || m)
const _3d2f3af1 = () => import('..\\pages\\main\\article\\edit.vue' /* webpackChunkName: "pages_main_article_edit" */).then(m => m.default || m)
const _13dc08f0 = () => import('..\\pages\\main\\user\\resetpassword.vue' /* webpackChunkName: "pages_main_user_resetpassword" */).then(m => m.default || m)
const _02bc6220 = () => import('..\\pages\\main\\demo\\list.vue' /* webpackChunkName: "pages_main_demo_list" */).then(m => m.default || m)
const _0165a692 = () => import('..\\pages\\main\\custom\\loadcomponent.vue' /* webpackChunkName: "pages_main_custom_loadcomponent" */).then(m => m.default || m)
const _c1ea5d58 = () => import('..\\pages\\main\\home\\welcome.vue' /* webpackChunkName: "pages_main_home_welcome" */).then(m => m.default || m)
const _19088ef7 = () => import('..\\pages\\main\\custom\\BizTag.vue' /* webpackChunkName: "pages_main_custom_BizTag" */).then(m => m.default || m)
const _7cd09ab4 = () => import('..\\pages\\main\\custom\\nuxtloader.vue' /* webpackChunkName: "pages_main_custom_nuxtloader" */).then(m => m.default || m)
const _6572008c = () => import('..\\pages\\main\\integration\\CKEditor.vue' /* webpackChunkName: "pages_main_integration_CKEditor" */).then(m => m.default || m)
const _1c3fb81e = () => import('..\\pages\\main\\demo\\listdetail.vue' /* webpackChunkName: "pages_main_demo_listdetail" */).then(m => m.default || m)
const _02cf8a2f = () => import('..\\pages\\main\\demo\\numberForm.vue' /* webpackChunkName: "pages_main_demo_numberForm" */).then(m => m.default || m)
const _10dbbc29 = () => import('..\\pages\\main\\tester\\crf.vue' /* webpackChunkName: "pages_main_tester_crf" */).then(m => m.default || m)
const _54657e0e = () => import('..\\pages\\main\\demo\\checkedForm.vue' /* webpackChunkName: "pages_main_demo_checkedForm" */).then(m => m.default || m)
const _599d81e8 = () => import('..\\pages\\main\\project\\list.vue' /* webpackChunkName: "pages_main_project_list" */).then(m => m.default || m)
const _5108ed56 = () => import('..\\pages\\main\\demo\\tableexpand.vue' /* webpackChunkName: "pages_main_demo_tableexpand" */).then(m => m.default || m)
const _2d2c9553 = () => import('..\\pages\\main\\custom\\windowloader.vue' /* webpackChunkName: "pages_main_custom_windowloader" */).then(m => m.default || m)
const _59784ca0 = () => import('..\\pages\\main\\integration\\AMap.vue' /* webpackChunkName: "pages_main_integration_AMap" */).then(m => m.default || m)
const _c3eb9518 = () => import('..\\pages\\main\\user\\edit.vue' /* webpackChunkName: "pages_main_user_edit" */).then(m => m.default || m)
const _46b4cf13 = () => import('..\\pages\\main\\custom\\loaderwindow.vue' /* webpackChunkName: "pages_main_custom_loaderwindow" */).then(m => m.default || m)
const _2dbf7df2 = () => import('..\\pages\\main\\demo\\urlParams\\_id.vue' /* webpackChunkName: "pages_main_demo_urlParams__id" */).then(m => m.default || m)
const _3f4fa9de = () => import('..\\pages\\main\\users\\_id.vue' /* webpackChunkName: "pages_main_users__id" */).then(m => m.default || m)
const _4f456a1c = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
			component: _2cd52ddf,
			name: "main",
			children: [
				{
					path: "users",
					component: _5ae2a269,
					name: "main-users"
				},
				{
					path: "orgnization",
					component: _58314e52,
					name: "main-orgnization"
				},
				{
					path: "tester",
					component: _16fd8724,
					name: "main-tester"
				},
				{
					path: "article",
					component: _ab20460a,
					name: "main-article"
				},
				{
					path: "demo",
					component: _704461c0,
					name: "main-demo"
				},
				{
					path: "log",
					component: _5eb7256d,
					name: "main-log"
				},
				{
					path: "project",
					component: _14f18a10,
					name: "main-project"
				},
				{
					path: "tester/notqualified",
					component: _69d72172,
					name: "main-tester-notqualified"
				},
				{
					path: "custom/component",
					component: _fa022046,
					name: "main-custom-component"
				},
				{
					path: "project/projectinorganization",
					component: _bb4d7652,
					name: "main-project-projectinorganization"
				},
				{
					path: "custom/bizbase64image",
					component: _1a1cda6e,
					name: "main-custom-bizbase64image"
				},
				{
					path: "demo/docs",
					component: _34868586,
					name: "main-demo-docs"
				},
				{
					path: "demo/tableForm",
					component: _969158c0,
					name: "main-demo-tableForm"
				},
				{
					path: "demo/importPage",
					component: _73567ed6,
					name: "main-demo-importPage"
				},
				{
					path: "tester/edit",
					component: _02c1b0b0,
					name: "main-tester-edit"
				},
				{
					path: "demo/router.push",
					component: _c12caee6,
					name: "main-demo-router.push"
				},
				{
					path: "tester/quit",
					component: _6077316d,
					name: "main-tester-quit"
				},
				{
					path: "user/list",
					component: _e27be3f0,
					name: "main-user-list"
				},
				{
					path: "integration/ECharts",
					component: _ff6d4576,
					name: "main-integration-ECharts"
				},
				{
					path: "demo/urlQuery",
					component: _fcb4b0ca,
					name: "main-demo-urlQuery"
				},
				{
					path: "orgnization/userinorgnization",
					component: _601b4f6f,
					name: "main-orgnization-userinorgnization"
				},
				{
					path: "role/edit",
					component: _36b99f42,
					name: "main-role-edit"
				},
				{
					path: "project/edit",
					component: _68e5a954,
					name: "main-project-edit"
				},
				{
					path: "tester/forms",
					component: _97ee17fe,
					name: "main-tester-forms",
					children: [
						{
							path: "medItemAlcoholHistory",
							component: _846fe0d8,
							name: "main-tester-forms-medItemAlcoholHistory"
						},
						{
							path: "medItemVitalSignWithDifference",
							component: _307015ee,
							name: "main-tester-forms-medItemVitalSignWithDifference"
						},
						{
							path: "medItemHBVDNA",
							component: _ebb16bae,
							name: "main-tester-forms-medItemHBVDNA"
						},
						{
							path: "medItemCardiogram",
							component: _97866e0a,
							name: "main-tester-forms-medItemCardiogram"
						},
						{
							path: "medItemThyroidTest",
							component: _b564565e,
							name: "main-tester-forms-medItemThyroidTest"
						},
						{
							path: "medItemBodyPhysicWithHalfYear",
							component: _6b0b8df2,
							name: "main-tester-forms-medItemBodyPhysicWithHalfYear"
						},
						{
							path: "medItemUrineRoutineTest",
							component: _f02f657e,
							name: "main-tester-forms-medItemUrineRoutineTest"
						},
						{
							path: "medItemDrugCombinationRecord",
							component: _f68ac07c,
							name: "main-tester-forms-medItemDrugCombinationRecord"
						},
						{
							path: "medItemBloodSerumTest",
							component: _c5a11884,
							name: "main-tester-forms-medItemBloodSerumTest"
						},
						{
							path: "medItemBodyPhysic",
							component: _4f5f20dc,
							name: "main-tester-forms-medItemBodyPhysic"
						},
						{
							path: "medItemBellUltrasound",
							component: _53e0e798,
							name: "main-tester-forms-medItemBellUltrasound"
						},
						{
							path: "medItemImmunizationTest",
							component: _2cbecb22,
							name: "main-tester-forms-medItemImmunizationTest"
						},
						{
							path: "medItemTlymphocytesTest",
							component: _7d1aa681,
							name: "main-tester-forms-medItemTlymphocytesTest"
						},
						{
							path: "medItemCKMBTest",
							component: _491b37fd,
							name: "main-tester-forms-medItemCKMBTest"
						},
						{
							path: "medItemFertility",
							component: _c5e670e8,
							name: "main-tester-forms-medItemFertility"
						},
						{
							path: "medItemBloodBiochemistryTest",
							component: _5b5f88ea,
							name: "main-tester-forms-medItemBloodBiochemistryTest"
						},
						{
							path: "medItemBloodSampleBackup",
							component: _1735e4a8,
							name: "main-tester-forms-medItemBloodSampleBackup"
						},
						{
							path: "medItemVitalSign",
							component: _2d5fadeb,
							name: "main-tester-forms-medItemVitalSign"
						},
						{
							path: "medItemPatientAgreement",
							component: _60fe4d73,
							name: "main-tester-forms-medItemPatientAgreement"
						},
						{
							path: "medItemAdverseEvent",
							component: _440f3136,
							name: "main-tester-forms-medItemAdverseEvent"
						},
						{
							path: "medItemHepatocirrhosisTest",
							component: _6729098a,
							name: "main-tester-forms-medItemHepatocirrhosisTest"
						},
						{
							path: "medItemBloodRoutineTest",
							component: _e12b32ec,
							name: "main-tester-forms-medItemBloodRoutineTest"
						},
						{
							path: "medItemHepatitisBHistory",
							component: _a11f2fe2,
							name: "main-tester-forms-medItemHepatitisBHistory"
						},
						{
							path: "medItemHCGTest",
							component: _d251d900,
							name: "main-tester-forms-medItemHCGTest"
						},
						{
							path: "medItemHbA1CTest",
							component: _5f26282d,
							name: "main-tester-forms-medItemHbA1CTest"
						},
						{
							path: "medItemBloodCoagulationTest",
							component: _3de23cb2,
							name: "main-tester-forms-medItemBloodCoagulationTest"
						},
						{
							path: "medItemDiseaseHistory",
							component: _072be466,
							name: "main-tester-forms-medItemDiseaseHistory"
						},
						{
							path: "medItemIfPatientContinueResearch",
							component: _3fff302c,
							name: "main-tester-forms-medItemIfPatientContinueResearch"
						},
						{
							path: "medItemAFP",
							component: _44346526,
							name: "main-tester-forms-medItemAFP"
						}
					]
				},
				{
					path: "demo/listForm",
					component: _1c9065f8,
					name: "main-demo-listForm"
				},
				{
					path: "article/category",
					component: _0f789f36,
					name: "main-article-category"
				},
				{
					path: "article/categoryedit",
					component: _5a1b5aef,
					name: "main-article-categoryedit"
				},
				{
					path: "demo/fontawesome",
					component: _1ff28ca2,
					name: "main-demo-fontawesome"
				},
				{
					path: "tester/editcrf",
					component: _f217bc42,
					name: "main-tester-editcrf"
				},
				{
					path: "role/list",
					component: _5549ee1a,
					name: "main-role-list"
				},
				{
					path: "usercenter/changepassword",
					component: _0c33e90a,
					name: "main-usercenter-changepassword"
				},
				{
					path: "tester/sms",
					component: _576e66ab,
					name: "main-tester-sms"
				},
				{
					path: "orgnization/edit",
					component: _59aa58d6,
					name: "main-orgnization-edit"
				},
				{
					path: "demo/form",
					component: _62798974,
					name: "main-demo-form"
				},
				{
					path: "article/edit",
					component: _3d2f3af1,
					name: "main-article-edit"
				},
				{
					path: "user/resetpassword",
					component: _13dc08f0,
					name: "main-user-resetpassword"
				},
				{
					path: "demo/list",
					component: _02bc6220,
					name: "main-demo-list"
				},
				{
					path: "custom/loadcomponent",
					component: _0165a692,
					name: "main-custom-loadcomponent"
				},
				{
					path: "home/welcome",
					component: _c1ea5d58,
					name: "main-home-welcome"
				},
				{
					path: "custom/BizTag",
					component: _19088ef7,
					name: "main-custom-BizTag"
				},
				{
					path: "custom/nuxtloader",
					component: _7cd09ab4,
					name: "main-custom-nuxtloader"
				},
				{
					path: "integration/CKEditor",
					component: _6572008c,
					name: "main-integration-CKEditor"
				},
				{
					path: "demo/listdetail",
					component: _1c3fb81e,
					name: "main-demo-listdetail"
				},
				{
					path: "demo/numberForm",
					component: _02cf8a2f,
					name: "main-demo-numberForm"
				},
				{
					path: "tester/crf",
					component: _10dbbc29,
					name: "main-tester-crf"
				},
				{
					path: "demo/checkedForm",
					component: _54657e0e,
					name: "main-demo-checkedForm"
				},
				{
					path: "project/list",
					component: _599d81e8,
					name: "main-project-list"
				},
				{
					path: "demo/tableexpand",
					component: _5108ed56,
					name: "main-demo-tableexpand"
				},
				{
					path: "custom/windowloader",
					component: _2d2c9553,
					name: "main-custom-windowloader"
				},
				{
					path: "integration/AMap",
					component: _59784ca0,
					name: "main-integration-AMap"
				},
				{
					path: "user/edit",
					component: _c3eb9518,
					name: "main-user-edit"
				},
				{
					path: "custom/loaderwindow",
					component: _46b4cf13,
					name: "main-custom-loaderwindow"
				},
				{
					path: "demo/urlParams/:id?",
					component: _2dbf7df2,
					name: "main-demo-urlParams-id"
				},
				{
					path: "users/:id?",
					component: _3f4fa9de,
					name: "main-users-id"
				}
			]
		},
		{
			path: "/",
			component: _4f456a1c,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
