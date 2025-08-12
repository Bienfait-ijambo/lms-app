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
    invalid_type_error: " Title must be in letters",
  }).min(10, "Title Minimum 10 characters").max(100,'Title Maximum 100 characters'),


   price: z.number({
    required_error: "Price is required",
    invalid_type_error: " Price must be a number",
  }).positive("Price should be greater than 0"),


 
  categoryId: z.string({
    required_error: "categoryId is required",
  }),
 
});




export const updateCourseDescriptionSchema = z.object({
 id: z.string({
    required_error: "id is required",
  }),
 
  description: z.string({
    required_error: "Description is required",
    invalid_type_error: "Description must be in letters",
  }).min(50, "Description Minimum 50 characters").max(20000,'Description Maximum 20000 characters'),

 
});