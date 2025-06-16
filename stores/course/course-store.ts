
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useCreateOrUpdateCourse } from '~/composables/course/useCreateOrUpdateCourse';
import { useFetchCourses } from '~/composables/course/useFetchCourses';

export const useCourseStore = defineStore('coourse-store', () => {
    
    
    // const deleteCourseProps=useDeleteCourse()
    const fetchCourseProps=useFetchCourses()
    const createOrUpdateCourseProps=useCreateOrUpdateCourse()



    return { ...fetchCourseProps,...createOrUpdateCourseProps }
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCourseStore, import.meta.hot))
}