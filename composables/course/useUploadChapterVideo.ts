


export function useUploadChapterVideo() {


    const uploadVideoInput = ref({
        chapterId: '',
        video: ""
    })

    const progressBar = ref(0)

    const showVideoModal = ref(false)
    const uploadVideoLoading = ref(false)

    function toggleVideoModal(chapterId: string) {
        uploadVideoInput.value.chapterId = chapterId
        showVideoModal.value = !showVideoModal.value
    }


    function selectVideo(event: any) {
        const selectedVideo = event.target.files[0];

        uploadVideoInput.value.video = selectedVideo
    }

    async function uploadVideo() {
        try {
            uploadVideoLoading.value = true

            const videoInput = document.querySelector('#videoInput') as HTMLInputElement
            if (videoInput.value === '') {
                showServerError('Please select a file')
                return
            }

            const { uploadUrl } = await $fetch('/api/admin/chapters/upload-video', {
                method: 'POST',
                body: JSON.stringify({ chapterId: uploadVideoInput.value.chapterId })
            });

            const xhr = new XMLHttpRequest();

            xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                    const percent = (event.loaded / event.total) * 100;
                    progressBar.value = percent;
                    console.log(`Upload progress: ${Math.round(percent)}%`);
                }
            });

            // Handle success
            xhr.onload = () => {
                if (xhr.status === 200) {
                videoInput.value=''
                    successMsg('Video upload successfully !')
                } else {
                    showServerError('Upload video failed!');
                }
            };


            xhr.open('PUT', uploadUrl);
            xhr.setRequestHeader('Content-Type', uploadVideoInput.value?.video?.type)
            xhr.send(uploadVideoInput.value?.video);

            uploadVideoLoading.value = false

        } catch (error) {
            uploadVideoLoading.value = false

            showError((error as Error)?.message)

        }

    }

    return {

        selectVideo,
        uploadVideoInput,
        showVideoModal,
        uploadVideoLoading,
        uploadVideo,
        toggleVideoModal,
        progressBar
    }
}