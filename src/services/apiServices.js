import axios from "axios";
import axiosRetry from "axios-retry";
import appConfig from "../configs/app.config";

let sriServiceAxiosInstance = null;



const createSriServiceClient = () => {
const token = JSON.parse(localStorage.getItem('token'))

  // if (sriServiceAxiosInstance) {
  //   return sriServiceAxiosInstance;
  // }
  
  sriServiceAxiosInstance = axios.create({
    baseURL: appConfig.api.domain,
    timeout: appConfig.api.timeout,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization":token,
    },
  });
  axiosRetry(sriServiceAxiosInstance, { retries: appConfig.api.retry });
  return sriServiceAxiosInstance;
};

const createSriServiceClientForPDF = () => {
  const token = JSON.parse(localStorage.getItem('token'))
  
    sriServiceAxiosInstance = axios.create({
      baseURL: appConfig.api.domain,
      timeout: appConfig.api.timeout,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/pdf",
        "Authorization":token,
      },
      responseType: "arraybuffer", // Set the response type to "arraybuffer"
    });
    axiosRetry(sriServiceAxiosInstance, { retries: appConfig.api.retry });
    return sriServiceAxiosInstance;
  };

export const invokeSriService = async (requestParams) => {

  const client = createSriServiceClient();
  // TODO - Add authentication token

  console.debug("Request Params for axios", requestParams);
  try {
    const response = await _invokeAxios(client, requestParams);
    return response;
  } catch (error) {
    console.log("Axios error", error);
    throw error;
  }
};

export const invokeSriServiceForPDF = async (requestParams) => {

  const client = createSriServiceClientForPDF();
  // TODO - Add authentication token

  console.debug("Request Params for axios", requestParams);
  try {
    const response = await _invokeAxios(client, requestParams);
    return response;
  } catch (error) {
    console.log("Axios error", error);
    throw error;
  }
};

export const querySriService = async (requestParams) => {

  const response = await invokeSriService(requestParams);

  if (response.status === 200) {
    return response.data;
  }
  if (response.status === 404) {
    return [];
  }
  throw new Error("Error in querying OMS service");
};

export const uploadFile = async (fileBlobUrl, omsUrl) => {
  const client = createSriServiceClient();
  const fileUploadFormData = new FormData();
  if(fileBlobUrl instanceof File){
    fileUploadFormData.append("file", fileBlobUrl);
  }else{
    const blob = await fetch(fileBlobUrl).then((response) => response.blob());
    fileUploadFormData.append("file", blob);
  }
  return await client.post(omsUrl, fileUploadFormData, {});
};

const _invokeAxios = async (client, requestParams) => {
  requestParams.method = requestParams.method || "GET";
  if (requestParams.method.toLowerCase() === "post") {
    return await client.post(requestParams.url, requestParams.body);
  }
  if (requestParams.method.toLowerCase() === "put") {
    return await client.put(requestParams.url, requestParams.body);
  }
  if (requestParams.method.toLowerCase() === "patch") {
    return await client.patch(requestParams.url, requestParams.body);
  }
  if (requestParams.method.toLowerCase() === "delete") {
    return await client.put(requestParams.url, requestParams.body);
  }
  if (requestParams.method.toLowerCase() === "strict_delete") {
    return await client.delete(requestParams.url, requestParams.body);
  }
  return await client.get(requestParams.url);
};




