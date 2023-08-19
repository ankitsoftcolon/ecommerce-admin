import { AxiosResponse } from "axios";
import client from "../lib/client";

const productService = {
  getAllProducts: async (): Promise<any[]> => {
    const response: AxiosResponse<any[]> = await client.get("/products");
    return response.data;
  },
};

export default productService;
