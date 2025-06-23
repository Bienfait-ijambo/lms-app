


export function UseUploadCourseImage() {


    const image = ref()

    const showImageModal=ref(false)


    function toggleImageModal(){
        showImageModal.value=!showImageModal.value
    }

    async function uploadImage(courseId: string, file: string) {
        try {
            const formdata = new FormData();
            formdata.append("image", file);
            formdata.append("courseId", courseId);


            const payload = {
                method: "POST",
                body: formdata,

            };

            const res = await $fetch('/api/admin/courses/upload-image', payload as any)

        } catch (error) {
            showError(error?.message)

        }

    }

    return {
        image,
        showImageModal,
        uploadImage,
        toggleImageModal
    }
}