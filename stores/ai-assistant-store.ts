
import { defineStore, acceptHMRUpdate } from 'pinia'



export const useAIAssistantStore = defineStore('ai-store', () => {
    const loading = ref(false)
    const query=ref()
    const aiModal=ref(false)
    const messages = ref<{ type: 'ai' | 'human', id: string, message: string }[]>([])
    const data = ref<ResponseType>()

    async function sendMessage() {
        const message=query.value
        messages.value.push({
            type: 'human',
            id: '',
            message: message
        })
        
        await queryAssistant()
    }
    async function queryAssistant() {

        try {

            loading.value = true
            const result = await $fetch('http://localhost:5000/query-vector-db', {
                method: 'POST',
                body: JSON.stringify({ userId: 'user-id123', query: query.value })
            })
            const message = (result as { data: string })?.data
            query.value=''
            messages.value.push({
                type:'ai',
                id: '',
                message: message
            })
            loading.value = false


        } catch (error) {
            loading.value = false
            showValidationErrors((error as Error))

        }
    }



    return { queryAssistant, data,query, loading, messages ,sendMessage,aiModal}
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAIAssistantStore, import.meta.hot))
}