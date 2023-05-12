import axios from "axios";

interface DataNote {
  title: string;
  content: string;
}

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  // Get Data User
  public async getDataUser<T>(url: string, token: string): Promise<T> {
    try {
      console.log("entrando");
      const response = await axios.get(`${this.baseUrl}${url}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async authUser(url: string, obj: object) {
    try {
      console.log("entrando");
      const response = await axios.post(`${this.baseUrl}${url}`, {
        ...obj,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async CreateUser<T>(url: string, data: any): Promise<T> {
    console.log(data);
    try {
      const response = await axios.post(`${this.baseUrl}${url}`, { ...data });
      // console.log(response)
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }

  public async updateDataNoteById<T>(
    url: string,
    id: string,
    content: string
  ): Promise<T> {
    try {
      console.log("entrando");
      const response = await axios.patch(`${this.baseUrl}${url}/${id}`, {
        content,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async createNote(url: string, data: DataNote, token: string) {
    try {
      const response = await axios.post(`${this.baseUrl}${url}`, data, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      return {data:response.data,status:response.status};
    } catch (error: any) {
      return error;
    }
  }

  // otros métodos de solicitud HTTP como PUT, DELETE, etc.
}

export { ApiService };
