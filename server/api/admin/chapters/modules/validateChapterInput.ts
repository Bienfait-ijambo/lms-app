import {z} from 'zod'

export const createChapterInput = z.object({

  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "must be in letters",
  }).min(10, "Minimum 10 characters").max(100,'Maximum 100 characters'),
  courseId: z.string({
    required_error: "courseId is required",
  }),

});

