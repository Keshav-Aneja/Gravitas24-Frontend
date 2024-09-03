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
}
