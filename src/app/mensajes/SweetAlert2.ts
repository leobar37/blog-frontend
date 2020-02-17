import Swal from 'sweetalert2';

export class Modal {
     
  
  public mostrarError(mensaje:string){
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text:  mensaje,
      footer:  'intente loguearse con otra cuenta'
    })
  }
  public  correcto(mensaje:String){
    Swal.fire({
        icon: 'success',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
      })
  }

}
