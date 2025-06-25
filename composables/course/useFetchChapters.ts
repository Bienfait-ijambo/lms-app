


export type ChapterType = Array<{
    id: string;
    title: string;
    courseId: string;
    slug: string;
    videoUrl: string | null;
}
> | undefined
export function useFetchChapters() {


    const chapters = ref<ChapterType>()
    const fetchChapterLoading = ref(false)


    async function fetchChapters() {
        try {
            fetchChapterLoading.value = true
            const { data } = await useFetch('/api/admin/chapters/get')
            chapters.value = data.value?.chapters

            fetchChapterLoading.value = false



        } catch (error) {
            fetchChapterLoading.value = false
        }


    }


    return {
fetchChapters,chapters
    }
}