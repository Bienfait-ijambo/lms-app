


export function useUploadCourseImage() {


    const uploadImageInput = ref({
        courseId: '',
        image: ""
    })

    const showImageModal = ref(false)
    const uploadImageLoading = ref(false)

    function toggleImageModal(courseId: string) {
        uploadImageInput.value.courseId = courseId
        showImageModal.value = !showImageModal.value
    }


    function selectImage(event: any) {
        const selectedImage = event.target.files[0];
        const output = document.querySelector("#outputImage") as HTMLImageElement
        output.src = URL.createObjectURL(selectedImage)

        output.onload = function () {
            URL.revokeObjectURL(selectedImage);
        };
        uploadImageInput.value.image = selectedImage
    }

    async function uploadImage() {
        try {
            const formdata = new FormData();
            formdata.append("file", uploadImageInput.value.image);
            formdata.append("courseId", uploadImageInput.value.courseId);


            const payload = {
                method: "POST",
                body: formdata,

            };
            uploadImageLoading.value = true
            const res: { message: string } = await $fetch('/api/admin/courses/upload-image', payload as any);
            (document.querySelector("#outputImage") as HTMLImageElement).src = '';
            (document.querySelector('#imageInput') as HTMLInputElement).value = ''

            successMsg(res?.message)


            uploadImageLoading.value = false

        } catch (error) {
            uploadImageLoading.value = false

            showError((error as Error)?.message)

        }

    }

    return {

        selectImage,
        showImageModal,
        uploadImage,
        toggleImageModal
    }
}