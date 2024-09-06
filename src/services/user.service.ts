import { Payment } from "@/constants/types/registered";
import getHandler from "@/handlers/get_handler";
import { EventRegistration } from "@/constants/types/registered";

export function instantiateEventRegistrationData(data: any): EventRegistration {
  console.log(data);
  return {
    id: data.id,
    user_id: data.user_id,
    user: data.user,
    event_id: data.event_id,
    event: data.event,
    event_slot_id: data.event_slot_id,
    event_slot: data.event_slot,
    payment_id: data.payment_id,
    payment: data.payment,
    amount: data.amount,
    status: data.status,
    remarks: data.remarks,
  } as EventRegistration;
}

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
      data:response.data.map((temp:any,index:number) => instantiateEventRegistrationData(temp)) as EventRegistration[],
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
