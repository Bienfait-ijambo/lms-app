

import { z } from 'zod'




export const createCategorySchema = z.object({

  name: z.string({
    required_error: "categoryName is required",
    invalid_type_error: "must be in letters",
  }).min(4, "Minimum 4 characters").max(25,'Maximum 25 characters'),
});



export const updatecategorySchema = z.object({
id: z.string({
    required_error: "id is required",
  }),
   name: z.string({
    required_error: "categoryName is required",
    invalid_type_error: "must be in letters",
  }).min(4, "Minimum 4 characters").max(25,'Maximum 25 characters'),
});