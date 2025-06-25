
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useCreateOrUpdatechapter } from '~/composables/course/useCreateOrUpdatechapter';
import { useCreateOrUpdateCourse } from '~/composables/course/useCreateOrUpdateCourse';
import { useFetchChapters } from '~/composables/course/useFetchChapters';
import { useFetchCourses } from '~/composables/course/useFetchCourses';
import { UseUploadCourseImage } from '~/composables/course/useUploadCourseImage';

export const useCourseStore = defineStore('coourse-store', () => {
    
      
    // const deleteCourseProps=useDeleteCourse()
    const fetchCourseProps=useFetchCourses()
    const createOrUpdateCourseProps=useCreateOrUpdateCourse()
    const uploadImageProps=UseUploadCourseImage()
    const chapterProps=useCreateOrUpdatechapter()
    const fetchChaptersProps=useFetchChapters()



    return {...fetchChaptersProps, ...chapterProps,...fetchCourseProps,...createOrUpdateCourseProps,...uploadImageProps }
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCourseStore, import.meta.hot))
}