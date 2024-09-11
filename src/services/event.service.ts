import { eventType, slotType } from "@/constants/types/types";
import getHandler from "@/handlers/get_handler";
function instantiateSlotData(data: any): slotType {
  return {
    slotId: data.id,
    eventId: data.event_id,
    venue: data.venue,
    startDate: data.start_date,
    endDate: data.end_date,
    totalEntries: data.total_entries,
    isRegistrable: data.is_registrable,
  } as slotType;
}
export function instantiateEventData(data: any): eventType {
  console.log(data);
  return {
    id: data.id,
    name: data.name,
    type: data.type,
    description: data.description,
    short_description: data.short_description,
    club: data.club,
    display: data.image,
    tagline: data.tagline,
    price: data.price_per_ticket,
    slots: null,
    startDate: data.start_date,
    endDate: data.end_date,
    teamSize: data.team_size,
    scope: data.scope,
  } as eventType;
}

export async function getEventDetails(eventId: string) {
  try {
    const response = await getHandler(`/events/${eventId}`);

    return {
      data: instantiateEventData(response.data.event),
      slots: response.data.eventSlots.map((slot: any) =>
        instantiateSlotData(slot)
      ),
    };
  } catch (error: any) {
    throw new Error(error.message ?? "Failed to fetch event details");
  }
}
export async function getEventList({
  limit,
  page,
  name,
  scope,
  type,
}: {
  limit: number;
  page: number;
  name: string;
  type: string;
  scope: string;
}) {
  try {
    const params = {
      limit,
      page,
      name,
      type,
      scope,
    };
    const response = await getHandler(`/events`, params);
    // if (!response.success) {
    //   throw new Error(response.message);
    // }
    return {
      data: response.data.events.map((event: any) =>
        instantiateEventData(event)
      ) as eventType[],
      totalPages: response.data.totalPages,
    };
  } catch (error: any) {
    throw new Error(error.message ?? "Failed to fetch event list");
  }
}

