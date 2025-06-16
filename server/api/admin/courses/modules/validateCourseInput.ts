import {z} from 'zod'

export const createCourseSchema = z.object({

  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "must be in letters",
  }).min(10, "Minimum 10 characters").max(100,'Maximum 100 characters'),
  categoryId: z.string({
    required_error: "categoryId is required",
  }),
  userId: z.string({
    required_error: "userId is required",
  }),
});


export const updateCourseSchema = z.object({
 id: z.string({
    required_error: "id is required",
  }),
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "must be in letters",
  }).min(10, "Minimum 10 characters").max(100,'Maximum 100 characters'),


   price: z.number({
    required_error: "Price is required",
    invalid_type_error: "must be a number",
  }).positive("Price should be greater than 0"),


  description: z.string({
    required_error: "Description is required",
    invalid_type_error: "must be in letters",
  }).min(200, "Minimum 200 characters").max(500,'Maximum 500 characters'),

  categoryId: z.string({
    required_error: "categoryId is required",
  }),
 
});
