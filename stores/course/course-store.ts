
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useCreateOrUpdatechapter } from '~/composables/course/useCreateOrUpdatechapter';
import { useCreateOrUpdateCourse } from '~/composables/course/useCreateOrUpdateCourse';
import { useFetchChapters } from '~/composables/course/useFetchChapters';
import { useFetchCourses } from '~/composables/course/useFetchCourses';
import { useUploadChapterVideo } from '~/composables/course/useUploadChapterVideo';
import { useUploadCourseImage } from '~/composables/course/useUploadCourseImage';

export const useCourseStore = defineStore('coourse-store', () => {


    // const deleteCourseProps=useDeleteCourse()
    const fetchCourseProps = useFetchCourses()
    const createOrUpdateCourseProps = useCreateOrUpdateCourse()
    const uploadImageProps = useUploadCourseImage()
    const chapterProps = useCreateOrUpdatechapter()
    const fetchChaptersProps = useFetchChapters()

    const uploadVideoProps = useUploadChapterVideo()



    return { ...uploadVideoProps, ...fetchChaptersProps, ...chapterProps, ...fetchCourseProps, ...createOrUpdateCourseProps, ...uploadImageProps }
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCourseStore, import.meta.hot))
}