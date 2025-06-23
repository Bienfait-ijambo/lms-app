<template>
  <div>
    <input type="file" @change="onFileChange" />
    <p v-if="progress">Uploading: {{ progress }}%</p>

    <h2>All Uploaded Videos</h2>
<ul>
      <li v-for="video in videos" :key="video.id">
        <p>ID: {{ video.id }}</p>
        <p>Status: {{ video.status }}</p>
        <mux-player
          v-if="video.playback_ids?.length"
          stream-type="on-demand"
          :playback-id="video.playback_ids[0].id"
          controls
          style="width: 400px; height: 225px"
        />
      </li>
    </ul>



  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@mux/mux-player',
      defer: true,
    },
  ],
})

// const getPlaybackId = async (uploadId) => {
//   let result
//   while (true) {
//     result = await $fetch(`/api/mux-asset?uploadId=${uploadId}`)
//     if (result.playbackId) break
//     await new Promise((resolve) => setTimeout(resolve, 3000)) // wait 3 seconds
//   }
//   return result.playbackId
// }


const progress = ref(0)

const onFileChange = async (e) => {
  const file = e.target.files[0]
  if (!file) return

  // 1. Get signed upload URL from backend
  const { uploadUrl } = await $fetch('/api/mux-upload', {
    method: 'POST',
  })

  // 2. Upload the file directly to Mux
  const xhr = new XMLHttpRequest()
  xhr.open('PUT', uploadUrl)
  xhr.setRequestHeader('Content-Type', file.type)

  xhr.upload.onprogress = (event) => {
    if (event.lengthComputable) {
      progress.value = Math.round((event.loaded / event.total) * 100)
    }
  }

  xhr.onload = () => {
    if (xhr.status === 200) {
      alert('✅ Upload complete! Mux is processing the video.')
    } else {
      alert('❌ Upload failed')
    }
  }

  xhr.onerror = () => {
    alert('❌ Network error during upload')
  }

  xhr.send(file)
}



const videos = ref([])

onMounted(async () => {
  videos.value = await $fetch('/api/mux-upload')
})

</script>
