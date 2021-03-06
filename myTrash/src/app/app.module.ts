import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';

import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { ConsumoPageModule } from '../pages/consumo/consumo.module';
import { InformativoPageModule } from '../pages/informativo/informativo.module';
import { LoginPageModule } from '../pages/login/login.module';
import { MeuPerfilPageModule } from '../pages/meu-perfil/meu-perfil.module';
import { QuemSomosPageModule } from '../pages/quem-somos/quem-somos.module';
import { RankingPageModule } from '../pages/ranking/ranking.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { CadastroPage} from '../pages/cadastro/cadastro';
//import { ConsumoPage} from '../pages/consumo/consumo';
//import { InformativoPage } from '../pages/informativo/informativo';
//import { MeuPerfilPage} from '../pages/meu-perfil/meu-perfil';
//import { RankingPage} from '../pages/ranking/ranking';
//import { LoginPage} from '../pages/login/login';
//import { QuemSomosPage} from '../pages/quem-somos/quem-somos'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RequestProvider } from '../providers/request/request';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //CadastroPage,
    //MeuPerfilPage,
    //RankingPage,
    //InformativoPage,
    //ConsumoPage,
    //LoginPage,
    //QuemSomosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CadastroPageModule,
    ConsumoPageModule,
    InformativoPageModule,
    LoginPageModule,
    MeuPerfilPageModule,
    QuemSomosPageModule,
    RankingPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //CadastroPage,
    //MeuPerfilPage,
    //RankingPage,
    //InformativoPage,
    //ConsumoPage,
    //LoginPage,
    //QuemSomosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RequestProvider,
  ]
})
export class AppModule {}
