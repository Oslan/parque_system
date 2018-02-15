import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { 
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
import { RecargaFormComponent } from './recarga/app-recarga.component';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { ExtratoComponent } from './transacoes/extrato-detalhe/extrato.component';
import { BilheteriaRoutes } from "./app-bilheteria.routing";
import { AppLoaderModule } from '../../services/app-loader/app-loader.module';
import { AppConfirmModule } from '../../services/app-confirm/app-confirm.module';
import { TransacaoRecargaService } from './transacoes-recarga.service';

@NgModule({
  imports: [
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
    RouterModule.forChild(BilheteriaRoutes)
  ],
  declarations: [RecargaFormComponent,TransacoesComponent,ExtratoComponent],
  providers:[TransacaoRecargaService]
})
export class BilheteriaModule { }