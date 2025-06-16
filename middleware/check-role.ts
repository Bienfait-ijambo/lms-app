
import { USER_ROLE } from "~/utils/user-role";


export default defineNuxtRouteMiddleware(to => {
  if (import.meta.server) return


 const { isSignedIn, user, isLoaded } = useUser();

 async function updateRole(){
    const userId=user.value?.id as any
       const { data } = await useFetch("/api/auth/update-role", {
            query: {
                userId: userId,
            } 
        } as any);
        console.log(data)
 }


async function checkRole(role:string){


    if(typeof role==='undefined'){
        await updateRole()
        window.location.href="/learner/home"
    }else if(role===USER_ROLE.LEANER){
        window.location.href="/learner/home"
    }else if(role===USER_ROLE.ADMIN){
        window.location.href="/admin/dashboard"
    }
}

watchEffect(async ()=>{
    if(isLoaded.value){
         const role=user.value?.publicMetadata?.role as string
   await checkRole(role)
    }
})



})