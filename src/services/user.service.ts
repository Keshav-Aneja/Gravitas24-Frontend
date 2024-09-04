import getHandler from "@/handlers/get_handler";

export async function getProfileDetails() {
  try {
    const response = await getHandler("/users/me");
    if (!response.success) {
      throw new Error(response.message);
    }
    return response;
  } catch (error: any) {
    throw new Error(
      error.message ?? "Something went wrong while fetching details."
    );
  }
}


export async function getRegisteredEvents() {
  try {
    const response = await getHandler("/users/events");
    if (!response.success) {
      throw new Error(response.message);
    }
    return response;
  } catch (error: any) {
    throw new Error(
      error.message ?? "Something went wrong while fetching details."
    );
  }
}



export async function getRegisteredMerch() {
  try {
    const response = await getHandler("/users/merch");
    if (!response.success) {
      throw new Error(response.message);
    }
    return response;
  } catch (error: any) {
    throw new Error(
      error.message ?? "Something went wrong while fetching details."
    );
  }
}

