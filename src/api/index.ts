import axios from "axios";

// Interfaces

interface DataNote {
  title: string;
  content: string;
}

// Construccion de la Clase ApiService

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  // Get Data User

  public async getDataUser<T>(url: string, token: string): Promise<T> {
    try {
      const response = await axios.get(`${this.baseUrl}${url}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      // DO ====> Colocar la notificacion de error
      console.log(error);
      throw error;
    }
  }

  // Auth User
  public async authUser(url: string, obj: object) {
    try {
      const response = await axios.post(`${this.baseUrl}${url}`, {
        ...obj,
      });
      return response.data;
    } catch (error) {
      // DO ====> Colocar la notificacion de error
      console.error(error);
      throw error;
    }
  }

  // Create User
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async CreateUser<T>(url: string, data: any): Promise<T> {
    try {
      const response = await axios.post(`${this.baseUrl}${url}`, { ...data });
      // console.log(response)
      return response.data;
      // DO ====> Tipar Error

    } catch (error: any) {
      // DO ====> Colocar la notificacion de error

      return error.response.data;
    }
  }

  // Actualizar data de la nota por el Id

  public async updateDataNoteById<T>(
    url: string,
    id: string,
    content: string
  ): Promise<T> {
    try {
      const response = await axios.patch(`${this.baseUrl}${url}/${id}`, {
        content,
      });
      return response.data;
    } catch (error) {
      // DO ====> Colocar la notificacion de error

      console.error(error);
      throw error;
    }
  }
  // Eliminar nota by Id
  public async deleteNoteById<T>(
    url: string,
    id: string,
    token: string
  ): Promise<T> {
    try {
      const response = await axios.delete(`${this.baseUrl}${url}/${id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      // DO ====> Colocar la notificacion de error

      console.error(error);
      throw error;
    }
  }

  // Crear Nota
  public async createNote(url: string, data: DataNote, token: string) {
    try {
      const response = await axios.post(`${this.baseUrl}${url}`, data, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      return { data: response.data, status: response.status };
      // DO ====> Tipar el any

    } catch (error: any) {
      // DO ====> Colocar la notificacion de error

      return error;
    }
  }
  // Actualizar data del usuario
  public async updateDataUser(url: string, data: any, token: string) {
    try {
      const response = await axios.patch(`${this.baseUrl}${url}`, data, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      return { data: response.data, status: response.status };
      // DO ====> Tipar el any
    } catch (error: any) {
      return error;
    }
  }
}

export { ApiService };
