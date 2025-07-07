


export type ChapterType = Array<{
    id: string;
    title: string;
    courseId: string;
    slug: string;
    videoUrl: string | null;
}
> | undefined  | null
export function useFetchChapters() {


    const chapters = ref<ChapterType>()
    const fetchChapterLoading = ref(false)
    const fetchVideoLoading=ref(false)
    const chapterVideoData=ref()


    async function fetchChapterVideo(videoUrl:string) {
        try {
            fetchVideoLoading.value = true
            const { data } = await useFetch('/api/admin/chapters/chapter-video',{
                query:{
                    videoUrl:videoUrl
                }
            })
            chapterVideoData.value = data.value

            fetchVideoLoading.value = false



        } catch (error) {
            fetchVideoLoading.value = false
        }


    }


    async function fetchChapters(courseId:string) {
        try {
            fetchChapterLoading.value = true
            const { data } = await useFetch('/api/admin/chapters/get',{
                query:{
                    courseId:courseId
                }
            })
            chapters.value = data.value?.chapters

            fetchChapterLoading.value = false



        } catch (error) {
            fetchChapterLoading.value = false
        }


    }


    return {
fetchChapters,chapters,chapterVideoData,fetchChapterVideo,fetchVideoLoading
    }
}