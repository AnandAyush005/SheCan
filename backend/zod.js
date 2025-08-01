import { z } from 'zod';

export const validateInput = z.object({
  username: z.string().min(1, "Username is required"),
  refferalCode: z.string().min(1, "Referral code is required"), 
  amountRaised: z.number().min(0, "Amount must be a non-negative number")
});
