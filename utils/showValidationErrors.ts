  export function  showValidationErrors(error: any) {

  const errors = error?.data?.data?.data
//   if (typeof error?.data?.message !== 'undefined') {
//     showError(error?.data?.message)

//   }

  for (const inputFieldName in errors) {
    for (const inputErrorMessage of errors[inputFieldName]) {
      showServerError(inputErrorMessage)
    }
  }

}