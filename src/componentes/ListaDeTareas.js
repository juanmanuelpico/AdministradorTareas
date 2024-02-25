import React, { useState } from "react";
import { TareaFormulario } from "./TereaFormulario";
import { Tarea } from "./Tarea";
import '../css/ListaDeTareas.css';

export function ListaDeTareas(){

    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => {
       if(tarea.texto.trim()){
        tarea.texto = tarea.texto.trim();
        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
       }
    }

    const eliminarTarea = id => {
      const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
      setTareas(tareasActualizadas);
    };

    const terminarTarea = id => {
      const tareasActualizadas = tareas.map(tarea => {
        if(tarea.id === id){
          tarea.completada = !tarea.completada;
        }
        return tarea;
      })
      setTareas(tareasActualizadas);
    };

    return(
        <>
          <TareaFormulario onSubmit = {agregarTarea}/>
          <div className='tareas-lista-contenedor'>
            {
                //la funcion map recorre toda la lista de tareas y asigna la funcion que indiquemos por cada iteracion
                tareas.map((tarea)=>
                <Tarea
                key={tarea.id}
                id={tarea.id}
                texto = {tarea.texto}
                completada = {tarea.completada}
                eliminarTarea = {eliminarTarea}
                completarTarea = {terminarTarea}
                />
                )
            }
          </div>

        </>
    );
}