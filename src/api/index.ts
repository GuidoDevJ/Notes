import axios from 'axios';

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
// Get Data User
  public async getDataUser<T>(url: string,token:string): Promise<T> {
    try {
        console.log("entrando")
      const response = await axios.get(`${this.baseUrl}${url}`,{
        headers:{
            Authorization: `bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async authUser(url:string,obj:object){
    try {
        console.log("entrando")
      const response = await axios.post(`${this.baseUrl}${url}`,{
        
        ...obj,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async post<T>(url: string, data: any): Promise<T> {
    try {
      const response = await axios.post(`${this.baseUrl}${url}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }



  // otros métodos de solicitud HTTP como PUT, DELETE, etc.
}

export {
    ApiService
}