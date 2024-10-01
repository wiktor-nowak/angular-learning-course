import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-some-reactive-form',
  templateUrl: './some-reactive-form.component.html',
  styleUrls: ['./some-reactive-form.component.scss']
})
export class SomeReactiveFormComponent implements OnInit {
  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    roleId: [1, Validators.required],
    pet: ['Pola', Validators.required]
  })
  isSubmitTriggered: boolean = false;
  roles = [
    { id: 1, title: 'dev'},
    { id: 2, title: 'qa'}
  ]
  CURRENCY_AMOUNT: number = 23.24

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm.get('roleId')?.valueChanges.subscribe(roleId => {
      console.log('do some changes', roleId)
    })
  }

  get pet() { return this.registerForm.get('pet') }

  onSubmit() {
    console.log('submitted form ', this.registerForm.value, this.registerForm.invalid)
    this.isSubmitTriggered = true
  }

  checkIsValid(field: string, whatToCheck: string = '') {
    return (whatToCheck ? this.registerForm.get(field)?.hasError(whatToCheck) : this.registerForm.get(field)?.invalid) && (this.registerForm.get(field)?.touched || this.registerForm.get(field)?.dirty || this.isSubmitTriggered)
  }
}
