import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


export function showServerError(message:string) {
  toast.error(message, {
    position: 'bottom-right',
    theme: "colored",
    type:"warning"
  })
}

export function successMsg(message:string) {
  toast.success(message, {
    position: 'bottom-right',
     theme: "colored",
    type:"success"
  })
}