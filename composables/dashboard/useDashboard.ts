


export function useDashboard(){

const fetchLoading=ref(false)
const dashboardData=ref({})
    

    async function fetchDataboardData(){
         try {
            fetchLoading.value = true
            const { data } = await useFetch('/api/admin/dashboard/dashboard-data')
            dashboardData.value = data.value as any
          
            fetchLoading.value = false
            return data.value
           

        } catch (error) {
            fetchLoading.value = false
        }

    }

    return {
        dashboardData,
        fetchDataboardData
    }



}

