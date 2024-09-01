import { eventType } from "@/constants/types/types";
import getHandler from "@/handlers/get_handler";

function instantiateEventDate(data: any): eventType {
  return {
    id: data.id,
    name: data.name,
    type: data.type,
    description: data.description,
    club: data.club,
    display: data.image,
    tagline: data.tagline,
    price: data.price_per_ticket,
    slots: data.slots,
    startDate: data.start_date,
    endDate: data.end_date,
    teamSize: data.team_size,
  } as eventType;
}

export async function getEventDetails(eventId: string) {
  try {
    const response = await getHandler(`/events/${eventId}`);
    return instantiateEventDate(response.data);
  } catch (error: any) {
    throw new Error(error.message ?? "Failed to fetch event details");
  }
}
export async function getEventList({
  limit,
  page,
  name,
  type,
}: {
  limit: number;
  page: number;
  name: string;
  type: string;
}) {
  try {
    const params = {
      limit,
      page,
      name,
      type,
    };
    const response = await getHandler(`/events`, params);
    // if (!response.success) {
    //   throw new Error(response.message);
    // }
    return {
      data: response.data.events.map((event: any) =>
        instantiateEventDate(event)
      ) as eventType[],
      totalPages: response.data.totalPages,
    };
  } catch (error: any) {
    throw new Error(error.message ?? "Failed to fetch event list");
  }
}
