import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { 
   MatAutocompleteModule,
  MatInputModule,
  MatDatepickerModule, 
  MatNativeDateModule,
  MatListModule,
  MatCardModule,
  MatProgressBarModule,
  MatRadioModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatStepperModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { CommonDirectivesModule } from '../../directives/common/common-directives.module';

import { AssociacaoComponent } from './associacao/associacao.component';
import { CadastroCartaoComponent } from './cadastro/cadastro-cartao.component';
import { CartaoRoutes } from "./app-cartao.routing";
import { AppLoaderModule } from '../../services/app-loader/app-loader.module';
import { AppConfirmModule } from '../../services/app-confirm/app-confirm.module';
import { CartaoService } from './app-cartao.services';

@NgModule({
  imports: [
    MatAutocompleteModule,
    CommonModule,
    FormsModule,
    AppLoaderModule,
    AppConfirmModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    FlexLayoutModule,
    QuillModule,
    NgxDatatableModule,
    FileUploadModule,
    CommonDirectivesModule,
    RouterModule.forChild(CartaoRoutes)
  ],
  declarations: [AssociacaoComponent,CadastroCartaoComponent],
  providers:[CartaoService]

})
export class CartaoModule { }