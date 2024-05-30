import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
  
  name: string = '';
  email: string = '';

  onSubmit(form: any): void {
    console.log('Formulario enviado', form);
  }
}


