import request from '@/utils/request';

export type GlobalSessionParam = {
  clientId?: string,
  applicationId?: string,
  resourceId?: number,
  ip?: string,
  port: boolean,
  clientRole: number,
  tansactionServiceGroup: number,
  resourceSets?: number,
  operator?: number
};

export default async function fetchData(params:GlobalSessionParam):Promise<any> {
  let result = await request('/console/globalSession/query', {
    method: 'get',
    params,
  });

  return result;
}
