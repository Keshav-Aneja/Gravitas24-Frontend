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

interface Event {
    id: string;
    name: string;
    // "type": string;
    description: string;
    judgement_criteria: string;
    rules_and_regulations: string;
    prize_distribution: string;
    club: string;
    tagline: string;
    scope: string;
    price_per_ticket: number;
    image: string;
    start_date: string;
    team_size: string;
    end_date: string;
    slots: any | null;
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
    merch: Merch | null;
    amount: number;
    status: string;
    remarks: string;
    transaction: any | null;
}

interface Merch {
    id: string;
    name: string;
    type: string;
    tagline: string;
    description: string;
    category: string;
    price: number;
    total_available: number;
    sizes: string[];
    images: string[];
}

interface EventRegistration {
    id: string;
    user_id: string;
    user: User;
    event_id: string;
    event: Event;
    event_slot_id: string;
    event_slot: EventSlot;
    payment_id: string;
    payment: Payment;
    amount: number;
    status: string;
    remarks: string;
}
interface MerchTransaction {
    id: string;
    user_id: string;
    user: User;
    event_id: string;
    merch: Merch;
    payment_id: string;
    payment: Payment;
    status: string;
}
