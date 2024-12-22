
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    { name: 'Project Alpha', description: 'Description of Project Alpha' },
    { name: 'Project Beta', description: 'Description of Project Beta' },
    { name: 'Project Gamma', description: 'Description of Project Gamma' }
  ];
  searchTerm:string = '';

  constructor() {}

  ngOnInit(): void {}

  get filteredProjects() {
    return this.projects.filter((project) =>
      project.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewDetails(project:any) {
    alert(`Viewing details for: ${project.name}`);
    // Add navigation logic here
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
    alert('Project deleted successfully!');
  }
}












// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-projects',
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.css']
// })
// export class ProjectsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
