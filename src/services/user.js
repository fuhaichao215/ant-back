import request from '@/utils/request';

export async function query(params) {
  return request('/empty-item/sysUser/userList', {
    method: 'POST',
    data: params,
  });
}
export async function queryCurrent(params) {
  const id = encodeURIComponent(params);
  return request(`/empty-item/sysUser/toUserDetails?id=${id}`);
}
export async function queryAuthority(params) {
  const id = encodeURIComponent(params);
  return request(`/empty-item/sysUser/authority?id=${id}`);
}
export async function resetUserPwd(params) {
  const id = encodeURIComponent(params.id);
  return request(`/empty-item/sysUser/resetPassword?encryptionId=${id}`);
}
export async function addUser(params) {
  return request('/empty-item/sysUser/saveOrUpdateUser', {
    method: 'POST',
    data: params,
  });
}
export async function deleteUser(opType, params) {
  return request('/empty-item/sysUser/deleteByUser/' + opType, {
    method: 'POST',
    data: params,
  });
}
export async function updateUser(params) {
  return request('/empty-item/sysUser/saveOrUpdateUser', {
    method: 'POST',
    data: params,
  });
}
export async function updateUserImg(params) {
  return request('/empty-item/sysUser/uploadUserImg', {
    method: 'POST',
    data: params,
  });
}
export async function queryMsg(params) {
  return request(`/empty-item/sysUser/sendMsg?phone=${params}`);
}
export async function updatePwd(params) {
  return request('/empty-item/sysUser/changePassword', {
    method: 'POST',
    data: params,
  });
}