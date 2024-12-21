import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResourceAllocationComponent } from './pages/resource-allocation/resource-allocation.component';
import { ReportsComponent } from './pages/reports/reports.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateProjectComponent,
    ProjectsComponent,
    ResourceAllocationComponent,
    ReportsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
