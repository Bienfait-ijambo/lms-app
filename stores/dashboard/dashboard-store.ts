
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useDashboard } from '~/composables/dashboard/useDashboard'

export const useDashboardStore = defineStore('dashboard-store', () => {


   const dashboardProps=useDashboard()


    return { ...dashboardProps}
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useDashboardStore, import.meta.hot))
}