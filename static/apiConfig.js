﻿import webconfig from "./webConfig"

let settings = {
    article_author: "/api/services/app/article/GetCurrentAuthor",
    article_get: "/api/services/app/article/GetArticlePagedList",
    article_read: "/api/services/app/article/GetArticle",
    article_create: "/api/services/app/article/AddArticle",
    article_update: "/api/services/app/article/UpdateArticle",
    article_top: "/api/services/app/article/TopArticle",
    article_delete: "/api/services/app/article/DeleteArticle",
    category_get: "/api/services/app/category/GetCategoryPagedList",
    category_read: "/api/services/app/category/GetCategory",
    category_create: "/api/services/app/category/AddCategory",
    category_update: "/api/services/app/category/UpdateCategory",
    category_show: "/api/services/app/category/ShowCategory",
    category_delete: "/api/services/app/category/DeleteCategory",
    user_login: "/api/Account",
    user_info: "/data/userInfo.json",
    user_role_get: "/api/services/app/user/GetRoles",
    user_get: "/api/services/app/user/Get",
    user_permission_get: "/api/services/app/permission/GetUserPermissions",
    user_all_get: "/api/services/app/user/GetAll",
    user_create: "/api/services/app/user/Create",
    user_update: "/api/services/app/user/Update",
    user_delete: "/api/services/app/user/Delete",
    user_not_in_organization: "/api/services/app/user/GetAllUsersNotInOrganization",
    user_active: "/api/services/app/user/SetIsUserActived",
    user_resetpassword: "/api/services/app/user/ResetPassword",
    organization_create: "/api/services/app/organizationUnit/CreateOrganization",
    organization_update: "/api/services/app/organizationUnit/UpdateOrganization",
    organization_get: "/api/services/app/organizationUnit/GetOrganization",
    organization_get_by_name: "/api/services/app/organizationUnit/GetOrganizationByName",
    organization_get_by_id: "/api/services/app/organizationUnit/GetOrganizationById",
    organization_delete: "/api/services/app/organizationUnit/DeleteOrganization",
    organization_user_get: "/api/services/app/organizationUnit/GetOrganizationUnitUsers",
    organization_user_create: "/api/services/app/organizationUnit/AddUserToOrganization",
    organization_delete_user: "/api/services/app/organizationUnit/RemoveUserFromAllOrganizations",
    organization_delete_user_by_organizationiduserid: "/api/services/app/organizationUnit/RemoveUserFromGivenOrganization",
    organization_add_users: "/api/services/app/organizationUnit/AddUsersToOrganization",
    project_create: "/api/services/app/medicalExamProject/CreateMedicalExamProject",
    project_update: "/api/services/app/medicalExamProject/UpdateMedicalExamProject",
    project_delete: "/api/services/app/medicalExamProject/DeleteMedicalExamProject",
    project_read: "/api/services/app/medicalExamProject/GetProject",
    project_get: "/api/services/app/medicalExamProject/GetProjects",
    project_adds_to_organization: "/api/services/app/medicalExamProject/AddProjectsToOrganization",
    project_add_to_organization: "/api/services/app/medicalExamProject/AddProjectToOrganization",
    project_in_organization: "/api/services/app/medicalExamProject/GetProjectsInOrganization",
    project_delete_from_organization: "/api/services/app/medicalExamProject/RemoveProjectFromOrganization",
    permission_get: "/api/services/app/permission/GetAllPermissionTree",
    permission_all_get: "/api/services/app/permission/GetAllPermissionTree",
    permission_user_get: "/api/services/app/permission/GetUserPermissions",
    role_permission_all_get: "/api/services/app/role/GetAllPermissions",
    role_get: "/api/services/app/role/Get",
    role_all_get: "/api/services/app/role/GetAll",
    role_create: "/api/services/app/role/Create",
    role_update: "/api/services/app/role/Update",
    role_delete: "/api/services/app/role/Delete",
    session_get: "/api/services/app/session/GetCurrentLoginInformations",
    tenant_get: "/api/services/app/tenant/Get",
    tenant_all_get: "/api/services/app/tenant/GetAll",
    tenant_create: "/api/services/app/tenant/Create",
    tenant_udpate: "/api/services/app/tenant/Update",
    tenant_delete: "/api/services/app/tenant/Delete",
    log_audited_get: "/api/services/app/auditedLog/GetList",
    tester_create: "/api/services/app/testerProject/Create",
    tester_update: "/api/services/app/testerProject/UpdateTester",
    tester_delete: "",
    tester_read: "/api/services/app/testerProject/GetTester",
    tester_get: "/api/services/app/testerProject/GetList",
    tester_quit_reasons_get: "/api/services/app/testerProject/GetQuitReasons",
    tester_not_qualified_reasons_get: "/api/services/app/testerProject/GetNotQualifiedReasons",
    tester_quit_reason_create: "/api/services/app/testerProject/CreateQuitReason",
    tester_quit_reason_update: "",
    tester_not_qualified_reason_create: "/api/services/app/testerProject/CreateNotQualifiedReason",
    tester_not_qualified_reason_update: "",
    tester_quit_reason_read: "/api/services/app/testerProject/GetQuitReason",
    tester_not_qualified_reason_read: "/api/services/app/testerProject/GetNotQualifiedReason",
    tester_sms_red: "/api/services/app/testerProject/SendValidationSmsCode",
    tester_read_by_crf: "/api/services/app/cRF/GetTesterByCRFNumber",
    crf_create: "/api/services/app/cRF/Create",
    crf_get: "/api/services/app/cRF/GetCRFBaseInfoList",
    crf_read: "/api/services/app/cRF/GetCRFBaseInfo",
    crf_update: "/api/services/app/cRF/UpdateCRFBaseInfo",
    crf_navigation_get: "/api/services/app/cRF/GetCRFNavigation",
    crf_project_get: "/api/services/app/cRF/GetSearchMedProjectDropDownList",
    crf_phase_get: "/api/services/app/cRF/GetSearchMedPhaseDropDownList",
    crf_phases_get: "/api/services/app/cRF/GetPhases",
    crf_export_word: "/api/services/app/cRF/ExportToWord",
    menu_get: "/api/services/app/menu/GetItemsTree",
    menu_read: "/api/services/app/menu/GetMenu",
    menu_create: "/api/services/app/menu/AddMenu",
    menu_update: "/api/services/app/menu/UpdateMenu",
    menu_delete: "/api/services/app/menu/DeleteMenu",
    menu_my_tree_get: "/api/services/app/menu/MyMenuTree",
    medItemPatientAgreement_get: "/api/services/app/medItemPatientAgreement/GetOne",
    medItemPatientAgreement_put: "/api/services/app/medItemPatientAgreement/Update",
    medItemVitalSign_get: "/api/services/app/medItemVitalSign/GetOne",
    medItemVitalSign_put: "/api/services/app/medItemVitalSign/Update",
    medItemFertility_get: "/api/services/app/medItemFertility/GetOne",
    medItemFertility_put: "/api/services/app/medItemFertility/Update",
    medItemHCGTest_get: "/api/services/app/medItemHCGTest/GetOne",
    medItemHCGTest_put: "/api/services/app/medItemHCGTest/Update",
    medItemAlcoholHistory_get: "/api/services/app/medItemAlcoholHistory/GetOne",
    medItemAlcoholHistory_put: "/api/services/app/medItemAlcoholHistory/Update",
    medItemHepatitisBHistory_get: "/api/services/app/medItemHepatitisBHistory/GetOne",
    medItemHepatitisBHistory_put: "/api/services/app/medItemHepatitisBHistory/Update",
    medItemBodyPhysicWithHalfYear_get: "/api/services/app/medItemBodyPhysicWithHalfYear/GetOne",
    medItemBodyPhysicWithHalfYear_put: "/api/services/app/medItemBodyPhysicWithHalfYear/Update",
    medItemDiseaseHistory_get: "/api/services/app/medItemDiseaseHistory/GetOne",
    medItemDiseaseHistory_put: "/api/services/app/medItemDiseaseHistory/Update",
    medItemBloodRoutineTest_get: "/api/services/app/medItemBloodRoutineTest/GetOne",
    medItemBloodRoutineTest_put: "/api/services/app/medItemBloodRoutineTest/Update",
    medItemUrineRoutineTest_get: "/api/services/app/medItemUrineRoutineTest/GetOne",
    medItemUrineRoutineTest_put: "/api/services/app/medItemUrineRoutineTest/Update",
    medItemBloodBiochemistryTest_get: "/api/services/app/medItemBloodBiochemistryTest/GetOne",
    medItemBloodBiochemistryTest_put: "/api/services/app/medItemBloodBiochemistryTest/Update",
    medItemBloodCoagulationTest_get: "/api/services/app/medItemBloodCoagulationTest/GetOne",
    medItemBloodCoagulationTest_put: "/api/services/app/medItemBloodCoagulationTest/Update",
    medItemCKMBTest_get: "/api/services/app/medItemCKMBTest/GetOne",
    medItemCKMBTest_put: "/api/services/app/medItemCKMBTest/Update",
    medItemHbA1CTest_get: "/api/services/app/medItemHbA1CTest/GetOne",
    medItemHbA1CTest_put: "/api/services/app/medItemHbA1CTest/Update",
    medItemThyroidTest_get: "/api/services/app/medItemThyroidTest/GetOne",
    medItemThyroidTest_put: "/api/services/app/medItemThyroidTest/Update",
    medItemImmunizationTest_get: "/api/services/app/medItemImmunizationTest/GetOne",
    medItemImmunizationTest_put: "/api/services/app/medItemImmunizationTest/Update",
    medItemHepatocirrhosisTest_get: "/api/services/app/medItemHepatocirrhosisTest/GetOne",
    medItemHepatocirrhosisTest_put: "/api/services/app/medItemHepatocirrhosisTest/Update",
    medItemVitalSignWithDifference_get: "/api/services/app/medItemVitalSignWithDifference/GetOne",
    medItemVitalSignWithDifference_put: "/api/services/app/medItemVitalSignWithDifference/Update",
    medItemTlymphocytesTest_get: "/api/services/app/medItemTlymphocytesTest/GetOne",
    medItemTlymphocytesTest_put: "/api/services/app/medItemTlymphocytesTest/Update",
    medItemAFP_get: "/api/services/app/medItemAFP/GetOne",
    medItemAFP_put: "/api/services/app/medItemAFP/Update",
    medItemBellUltrasound_get: "/api/services/app/medItemBellUltrasound/GetOne",
    medItemBellUltrasound_put: "/api/services/app/medItemBellUltrasound/Update",
    medItemCardiogram_get: "/api/services/app/medItemCardiogram/GetOne",
    medItemCardiogram_put: "/api/services/app/medItemCardiogram/Update",
    medItemBloodSerumTest_get: "/api/services/app/medItemBloodSerumTest/GetOne",
    medItemBloodSerumTest_put: "/api/services/app/medItemBloodSerumTest/Update",
    medItemHBVDNA_get: "/api/services/app/medItemHBVDNA/GetOne",
    medItemHBVDNA_put: "/api/services/app/medItemHBVDNA/Update",
    medItemBloodSampleBackup_get: "/api/services/app/medItemBloodSampleBackup/GetOne",
    medItemBloodSampleBackup_put: "/api/services/app/medItemBloodSampleBackup/Update",
    medItemDrugCombinationRecord_get: "/api/services/app/medItemDrugCombinationRecord/GetOne",
    medItemDrugCombinationRecord_put: "/api/services/app/medItemDrugCombinationRecord/Update",
    medItemAdverseEvent_get: "/api/services/app/medItemAdverseEvent/GetOne",
    medItemAdverseEvent_put: "/api/services/app/medItemAdverseEvent/Update",
    medItemIfPatientContinueResearch_get: "/api/services/app/medItemIfPatientContinueResearch/GetOne",
    medItemIfPatientContinueResearch_put: "/api/services/app/medItemIfPatientContinueResearch/Update",
    my_org:"/api/services/app/organizationUnit/GetCurrentAdminUserOrgId",
    ping: "/api/services/app/account/Ping"
}

for (var p in settings) {
    settings[p] = webconfig.apiServerAddress.concat(settings[p]);
}

export default settings