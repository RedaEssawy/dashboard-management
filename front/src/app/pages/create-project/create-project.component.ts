import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  projectForm!: FormGroup; // Use `!` for definite assignment

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form group
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      teamMembers: [''], // Optional field
    });
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      const projectData = this.projectForm.value;
      console.log('Project Created:', projectData);
      // Add API call logic here to save the project data
    }
  }
}




// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-create-project',
//   templateUrl: './create-project.component.html',
//   styleUrls: ['./create-project.component.css']
// })
// export class CreateProjectComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
