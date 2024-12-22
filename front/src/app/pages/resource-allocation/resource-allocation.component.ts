import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resource-allocation',
  templateUrl: './resource-allocation.component.html',
  styleUrls: ['./resource-allocation.component.css'],
})
export class ResourceAllocationComponent implements OnInit {
  resourceForm!: FormGroup; //Use definite assignment operator or initialize in the constructor.
  projects = [
    { name: 'Project Alpha' },
    { name: 'Project Beta' },
    { name: 'Project Gamma' },
  ];

  // Define a type for resource allocation
  resourceAllocations: { project: { name: string }; resource: string; hours: number }[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.resourceForm = this.fb.group({
      project: ['', Validators.required],
      resource: ['', Validators.required],
      hours: ['', [Validators.required, Validators.min(1)]],
    });
  }

  allocateResource() {
    const allocation = this.resourceForm.value;
    this.resourceAllocations.push(allocation); // TypeScript will now recognize the type
    this.resourceForm.reset();
  }

  removeAllocation(index: number) {
    this.resourceAllocations.splice(index, 1);
  }
}
