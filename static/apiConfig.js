import webconfig from "./webConfig"
let settings = {
    user_login: "/api/Account",
    user_info: "/data/userInfo.json",
    user_role_get: "/api/services/app/user/GetRoles",
    user_get: "/api/services/app/user/Get",
    user_permission_get:"/api/services/app/permission/GetUserPermissions",
    user_all_get: "/api/services/app/user/GetAll",
    user_create: "/api/services/app/user/Create",
    user_update: "/api/services/app/user/Update",
    user_delete: "/api/services/app/user/Delete",
    organization_create: "/api/services/app/organizationUnit/CreateOrganization",
    organization_update: "/api/services/app/organizationUnit/UpdateOrganization",
    organization_get: "/api/services/app/organizationUnit/GetOrganization",
    organization_get_by_name:"/api/services/app/organizationUnit/GetOrganizationByName",
    organization_delete: "/api/services/app/organizationUnit/DeleteOrganization",
    organization_user_get: "/api/services/app/organizationUnit/GetOrganizationUnitUsers",
    organization_user_create: "/api/services/app/organizationUnit/AddUserToOrganization",
    organization_delete_user: "/api/services/app/organizationUnit/RemoveUserFromAllOrganizations",
    organization_delete_user_by_organization: "/api/services/app/organizationUnit/RemoveUserFromGivenOrganization",
    permission_get: "/api/services/app/permission/GetAllPermissionTree",
    permission_all_get:"/api/services/app/permission/GetAllPermissionTree",
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
    tenant_delete: "/api/services/app/tenant/Delete"
}

let options = webconfig.isOfficalData ? settings : settings

for (var p in options) {
    options[p] = webconfig.apiServerAddress.concat(options[p]);
}

export default options