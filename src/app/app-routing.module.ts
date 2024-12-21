import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResourceAllocationComponent } from './pages/resource-allocation/resource-allocation.component';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'create-project', component: CreateProjectComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'resource-allocation', component: ResourceAllocationComponent },
    { path: 'reports', component: ReportsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
