

import {z} from 'zod'
export const validatePaymentInput = z.object({
courseId: z.string({
    required_error: "courseId is required",
  }),
  userId: z.string({
    required_error: "userId is required",
  }),
   email: z.string({
    required_error: "userId is required",
  }),
 price: z.number().positive('Price should be greather than 0'),
   

});