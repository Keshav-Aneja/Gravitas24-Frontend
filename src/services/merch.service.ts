import { merchType } from "@/constants/types/types";
import getHandler from "@/handlers/get_handler";
function instantiateMerchData(data: any): merchType {
  return {
    id: data.id,
    name: data.name,
    type: data.type,
    tagline: data.tagline,
    description: data.description,
    category: data.category,
    price: data.price,
    total_available: data.total_available,
    sizes: data.sizes,
    images: data.images,
  } as merchType;
}
export async function getAllMerch() {
  try {
    const response = await getHandler("/merch");
    const merchData = [];
    if (response.data.length > 0) {
      for (let i = 0; i < response.data.length; i++) {
        const merchInfo = await getHandler(`/merch/${response.data[i].id}`);
        merchData.push(merchInfo.data);
      }
    }
    // return response.data.map((data: any) => instantiateMerchData(data));
    console.log("MERCH", merchData[0]);
    return merchData;
  } catch (error: any) {
    throw new Error(error.message ?? "Failed to fetch merch");
  }
}

export async function getMerchById(id: string) {
  try {
    const response = await getHandler(`/merch/${id}`);
    return instantiateMerchData(response.data);
  } catch (error: any) {
    throw new Error(error.message ?? "Failed to fetch merch");
  }
}
