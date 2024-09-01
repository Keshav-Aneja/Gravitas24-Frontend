import { merchType } from "@/constants/types/types";
import getHandler from "@/handlers/get_handler";
function instantiateMerchData(data: any): merchType {
  return {
    id: data.id,
    type: data.type,
    price: data.price,
    totalAvailable: data.totalAvailable,
    description: data.description,
    images: data.images,
  } as merchType;
}
export async function getAllMerch() {
  try {
    const response = await getHandler("/merch");
    return response.data.map((data: any) => instantiateMerchData(data));
  } catch (error: any) {
    throw new Error(error.message ?? "Failed to fetch merch");
  }
}
