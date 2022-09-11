import request from '@/utils/request';
import mockData from '../mock/clientInfo.json';

export type ClientInfoParam = {
  resourceId?: string,
  applicationId?: string,
  ip?: string,
  clientRole?: 'TMROLE'|'RMROLE',
  pageSize: number,
  pageNum: number
};

interface offlineParams {
  clientId: string,
  resourceId: string,
  clientRole: string
}

export default async function fetchData(params:ClientInfoParam):Promise<any> {
  let result = await request('/console/client/query', {
    method: 'post',
    params,
  });
  return result;
}
export async function offline(params:offlineParams):Promise<any> {
  const result = await request('/console/client/offline', {
    method: 'delete',
    params,
  });
  return result;
}
