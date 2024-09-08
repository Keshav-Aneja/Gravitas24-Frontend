export interface CreateTransactionResponse {
  success: boolean;
  message: string;
  data: {
    registrationNo: string;
    name: string;
    email: string;
    mobileNo: string;
    amount: number;
  };
  redirect?: boolean;
  link?: string;
}
export interface Payment {
  id: string;
  userId: string;
  user: any;
  eventSlotId?: string;
  eventSlot?: any;
  merchId?: string;
  merch?: any;
  amount: number;
  status: string;
  remarks: string;
  // transaction?: Transaction | null;
  createdAt: Date;
  updatedAt: Date;
}
