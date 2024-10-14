import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent {

  @Output()
  tareaEmit: EventEmitter<Tarea> = new EventEmitter();

  tarea: Tarea = {
    id:0,
    nombre:''
  }

  emitiendoTarea(){
    // Emitir una copia del objeto tarea para evitar el problema de referencia.
    this.tareaEmit.emit({...this.tarea});
    this.tarea = { id: 0, nombre: '' };
  }

}
