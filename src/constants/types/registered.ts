import { eventType, merchType } from "./types";

interface User {
    id: string;
    name: string;
    email: string;
    regNum: string | null;
    phoneNumber: string | null;
    payments: any | null;
    registeredMerch: any | null;
    registeredEvents: any | null;
}


interface EventSlot {
    id: string;
    event_id: string;
    event: Partial<Event>;
    venue: string;
    total_entries: number;
    start_date: string;
    end_date: string;
    is_registrable: boolean;
}

interface Payment {
    id: string;
    user_id: string;
    user: Partial<User>;
    event_slot_id: string | null;
    event_slot: EventSlot | null;
    merch_id: string | null;
    merch: merchType | null;
    amount: number;
    status: string;
    remarks: string;
    transaction: any | null;
}

export interface EventRegistration {
    id: string;
    user_id: string;
    user: User;
    event_id: string;
    event: eventType;
    event_slot_id: string;
    event_slot: EventSlot;
    payment_id: string;
    payment: Payment;
    amount: number;
    status: string;
    remarks: string;
}
export interface MerchRegistration {
    id: string;
    user_id: string;
    user: User;
    event_id: string;
    merch: merchType;
    payment_id: string;
    payment: Payment;
    status: string;
}
