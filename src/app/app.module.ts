import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { NodeVisualComponent } from './graph/node-visual.component';
import { LinkVisualComponent } from './graph/link-visual.component';
import { D3Service } from './d3/d3.service';
import { DraggableDirective, ZoomableDirective } from './d3/directives';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';

import { GraphService } from './services/graph.service';
import { SchoolsComponent } from './schools/schools.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    NodeVisualComponent,
    LinkVisualComponent,
    DraggableDirective,
    ZoomableDirective,
    SchoolsComponent,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule, MatCheckboxModule, MatPaginatorModule,
    MatFormFieldModule, MatInputModule, MatChipsModule, MatIconModule
  ],
  providers: [
    HttpClient,
    D3Service,
    GraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
