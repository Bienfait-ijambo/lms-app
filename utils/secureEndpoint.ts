 
  async function authGuard(event: H3Event) {

    const { userId } = event.context.auth()

    // Protect the API route by checking if the user is signed in
    if (!userId) {
        return sendRedirect(event,'/auth/signin')

    }

   
}

 
 export function secureEndpoint(handler: Parameters<typeof defineEventHandler>[0]) {
        return defineEventHandler(async (event) => {
            await authGuard(event)
            return handler(event)
        })
    }