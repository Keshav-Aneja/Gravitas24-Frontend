import { Payment } from "@/constants/types/registered";
import getHandler from "@/handlers/get_handler";
import { instantiateEventData } from "./event.service";
import { eventType } from "@/constants/types/types";

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

    return {
      data:response.data.map((temp:any,index:number) => instantiateEventData(temp.event)) as eventType[],
      status:response.data.map((temp:any,index:number) => temp.status) as string[],
    };
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

export async function getUserTransactions() {
  try {
    const response = await getHandler("/users/transaction");
    if (!response.success) {
      throw new Error(response.message);
    }
    return response.data as Payment[];
  } catch (error: any) {
    throw new Error(
      error.message ?? "Something went wrong while fetching details."
    );
  }
}
