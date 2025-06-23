
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useCreateOrUpdateCourse } from '~/composables/course/useCreateOrUpdateCourse';
import { useFetchCourses } from '~/composables/course/useFetchCourses';
import { UseUploadCourseImage } from '~/composables/course/useUploadCourseImage';

export const useCourseStore = defineStore('coourse-store', () => {
    
      
    // const deleteCourseProps=useDeleteCourse()
    const fetchCourseProps=useFetchCourses()
    const createOrUpdateCourseProps=useCreateOrUpdateCourse()
    const uploadImageProps=UseUploadCourseImage()



    return { ...fetchCourseProps,...createOrUpdateCourseProps,...uploadImageProps }
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCourseStore, import.meta.hot))
}