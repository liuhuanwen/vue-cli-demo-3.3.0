import * as http from '../common/http';

const base = '/api/itop-war';

export function getAllDataCenter(queryMap) {
  return http.get({
    url: `${base}/datacenter/list`,
    params: queryMap
  });
}

export function getWorkOrderList(queryMap) {
  return http.get({
    url: `${base}/workOrder/search`,
    params: queryMap
  });
}

export function getAllCountryList() {
  return http.get({
    url: `${base}/country/all`
  });
}

export function getAllCityByCountryId(countryId) {
  return http.get({
    url: `${base}/city/all`,
    params: {countryId: countryId}
  });
}

export function getSpecifiedBrand(deviceType) {
  return http.get({
    url: `${base}/brand/list`,
    params: {devicetype: deviceType}
  });
}

export function getSpecifiedModel(deviceType, brandId, seriesId) {
  return http.get({
    url: `${base}/model/list`,
    params: {
      devicetype: deviceType,
      brandId: brandId,
      serieId: seriesId
    }
  });
}

export function getSpecifiedModule(dataCenterId) {
  return http.get({
    url: `${base}/idcmodule/listNameByDataCenter`,
    params: {
      datacenterId: dataCenterId
    }
  });
}

export function getRackList(queryMap) {
  return http.get({
    url: `${base}/rack/list`,
    params: queryMap
  });
}

export function getRackListByModule(moduleId) {
  return http.get({
    url: `${base}/rack/listByIdcmodule`,
    params: {
      idcmoduelId: moduleId
    }
  });
}

export function getSpecifiedDeviceHeight(deviceType) {
  return http.get({
    url: `${base}/deviceHeightConfig/list`,
    params: {
      devicetype: deviceType
    }
  });
}
