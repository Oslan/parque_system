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
import { ContasRoutes } from "./app-contas.routing";
import { AppLoaderModule } from '../../services/app-loader/app-loader.module';
import { AppConfirmModule } from '../../services/app-confirm/app-confirm.module';

import { AssociacaoContaComponent } from './associacao/associacao-conta.component';
import { ExtratoFormComponent } from './extrato/extrato.component';
import { DetalheAssociacaoComponent } from './associacao/detalhe-associacao/detalhe-associacaocomponent';
import { DetalheContaComponent } from './transacoes/detalhe/detalhe-conta.component';
import { TransacoesContaComponent } from './transacoes/transacoes-conta.component';
import { DetalhadoComponent } from './extrato/detalhado/detalhado.component';

import { ContaService } from './app-contas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
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
    RouterModule.forChild(ContasRoutes)
  ],
  declarations: [AssociacaoContaComponent,
                 ExtratoFormComponent,
                 DetalheContaComponent,
                 DetalheAssociacaoComponent,
                 TransacoesContaComponent,
                 DetalhadoComponent
                 ],
  providers:[ContaService]

})
export class ContasModule { }