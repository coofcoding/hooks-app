import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";


export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        if( description.length <= 1 ) {
            Swal.fire({
                title: 'Error!',
                text: 'No se pudo agregar la tarea, intentelo nuevamente',
                icon: 'error',
                confirmButtonText: 'OK'
              });
              return;
        };

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };

        onNewTodo(newTodo);
        onResetForm();

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Registrada exitosamente"
          });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="¿Qué hay que hacer hoy?"
                value={description}
                onChange={onInputChange}
                name="description"
            />
            <button
                type="submit"
                className="main-btn"
            >
                Agregar
            </button>
        </form>
    )
}