
import { USER_ROLE } from "~/utils/user-role";


export default defineNuxtRouteMiddleware(to => {
  if (import.meta.server) return

  const pathName = to.fullPath

  const { isSignedIn, user, isLoaded } = useUser();

  async function checkRole(role: string) {

    if (pathName === '/admin/dashboard' && role !== USER_ROLE.ADMIN) {
      window.location.href = "/auth/signin";
    }

  }

  watchEffect(async () => {
    if (isLoaded.value) {
      const role = user.value?.publicMetadata?.role as string
      await checkRole(role);
    }
  });
})