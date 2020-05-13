import { action, observable, runInAction } from 'mobx';
import { asyncAction } from 'mobx-utils';
import asyncComputed from './utils/asyncComputed';
import { RouterStore } from './routerStore';
import axios, { AxiosResponse } from 'axios';

//console.log=function(){}
const apiBaseUrl = 'https://qa.mazdaserviceoffers.ca/';
const getDealerUrl = 'dealers.php';
const printOfferUrl = 'printoffer.php';
let postion=document.documentElement.scrollTop;
let i = 100;
let j = 0;
interface ZonalAPIData {
  listRecall;
}

export class MainStore {
  @observable lang = 'en';
  @observable offerID: string = '';
  @observable dealerNumber = '';
  @observable dealerID = '';
  @observable dealerName: string = '';
  @observable dealerShortName: string = '';
  @observable dealerAppointment: string = '';
  @observable quoteTires: string = '';
  @observable personalizeMazda: string = '';
  @observable crmcid: string = '';
  @observable isLoadingSearchRecall: boolean = false;
  @observable currentDealerInfo: any = [];
  @observable currentDealerOffers: any = [];
  @observable nationalOffers: any = [];
  @observable isEmergencyAlert: boolean;
  @observable listDealers = [];
  @observable pcCode: string = '';
  @observable searchDealerModal: boolean = false;
  @observable invalidVin: boolean = false;
  @observable isScanInvalidVin = false;
  @observable isScanInvalidVinMsg = '';
  @observable notFoundDealer = false;
  @observable urlLang = '';
  @observable term: string;
  @observable privacy: string;
  @observable mazadaWebSite: string;
  @observable getWindowHeight = Math.round(document.documentElement.clientHeight/2);
  @observable spring_first_fade=false;
  @observable now_relative_scrolled_bottom=false;
  @observable transform='';
  @observable scrollTop='';
  @observable section_2=false;
  @observable scaleFrist = 10;
  @observable section_3_transform = '';
  @observable benifits_of_mazda_brake_fade_text = false;
  @observable genuine_mazda_accessories_fade_text = false;
  @observable maintain_your_joy_fade_text = false;
  @observable setParallex = '';
  @observable setParallex_independent_left = '0%';
  @observable setParallex_independent_right = '0%';
  @observable isDealerInfoAvailable = false;
  @observable uri = '';
  @observable searchPopupActionButton: string = '';
  @observable mobileWidthCutOff = 769;
  @observable checkCarouselSlide = 1;
  @observable showStickyScheduleButton = false;
  @observable showStickyScheduleButtonYOffset_tablet = 650;
  @observable showStickyScheduleButtonYOffset_mobile = 300;



  constructor(private _routerStore: RouterStore) {
      this.checkCarouselDate();
      var bodyElement=<HTMLElement>document.querySelector('body');
      window.addEventListener('load',function(){
        if(window.innerWidth > 1200){bodyElement.classList.add('keep-front');
        }
      });
      window.addEventListener('scroll',this.listenToScroll);
      window.addEventListener('scroll',this.handleScrollSection);
      window.addEventListener('touchmove',this.handleScrollMob);
      window.addEventListener('wheel', this.handleScroll);
      if (this._routerStore.langValue) {
          this.lang = (
              this._routerStore.langValue ==='localhost.offrespecialemazda.ca:3000' ||
              this._routerStore.langValue === 'www.offrespecialemazda.ca' ||
              this._routerStore.langValue === 'qa.offrespecialemazda.ca' ||
              this._routerStore.langValue === 'fr.401dixiemazdaservice.ca'||
              this._routerStore.langValue === 'fr.agincourtmazdaservice.ca'||
              this._routerStore.langValue === 'fr.airportmazdaservice.ca'||
              this._routerStore.langValue === 'fr.ajaxmazdaservice.ca'||
              this._routerStore.langValue === 'fr.albimazdastjeromeservice.ca'||
              this._routerStore.langValue === 'fr.autohousemazdaservice.ca'||
              this._routerStore.langValue === 'fr.beauportmazdaservice.ca'||
              this._routerStore.langValue === 'fr.buddsmazdaservice.ca'||
              this._routerStore.langValue === 'fr.carlingmotorsservice.ca'||
              this._routerStore.langValue === 'fr.centennialmazdaofcharlottetownservice.ca'||
              this._routerStore.langValue === 'fr.charlevoixmazdaservice.ca'||
              this._routerStore.langValue === 'fr.coastlinemazdaservice.ca'||
              this._routerStore.langValue === 'fr.cornwallmazdaservice.ca'||
              this._routerStore.langValue === 'fr.courtenaymazdaservice.ca'||
              this._routerStore.langValue === 'fr.cowansvillemazdaservice.ca'||
              this._routerStore.langValue === 'fr.crownmazdaservice.ca'||
              this._routerStore.langValue === 'fr.elitemazdaservice.ca'||
              this._routerStore.langValue === 'fr.erinmillsmazdaservice.ca'||
              this._routerStore.langValue === 'fr.formanmazdaservice.ca'||
              this._routerStore.langValue === 'fr.freewaymazdaservice.ca'||
              this._routerStore.langValue === 'fr.garymoemazdaservice.ca'||
              this._routerStore.langValue === 'fr.gerrygordonsmazdaservice.ca'||
              this._routerStore.langValue === 'fr.guelphcitymazdaservice.ca'||
              this._routerStore.langValue === 'fr.gyromazdaservice.ca'||
              this._routerStore.langValue === 'fr.halfwaymotorsservice.ca'||
              this._routerStore.langValue === 'fr.harrismazdaservice.ca'||
              this._routerStore.langValue === 'fr.hawkesburymazdaservice.ca'||
              this._routerStore.langValue === 'fr.kentvillemazdaservice.ca'||
              this._routerStore.langValue === 'fr.kingmazdaservice.ca'||
              this._routerStore.langValue === 'fr.kingstonmazdaservice.ca'||
              this._routerStore.langValue === 'fr.kramermazdaservice.ca'||
              this._routerStore.langValue === 'fr.lallomazdaservice.ca'||
              this._routerStore.langValue === 'fr.lamazda-service.ca'||
              this._routerStore.langValue === 'fr.leggatmazdaburlingtonservice.ca'||
              this._routerStore.langValue === 'fr.londoncitymazdaservice.ca'||
              this._routerStore.langValue === 'fr.mainwaymazdaservice.ca'||
              this._routerStore.langValue === 'fr.maplemazdaservice.ca'||
              this._routerStore.langValue === 'fr.mazda220service.ca'||
              this._routerStore.langValue === 'fr.mazdademagogservice.ca'||
              this._routerStore.langValue === 'fr.mazdaderepentignyservice.ca'||
              this._routerStore.langValue === 'fr.mazdadesherbrookeservice.ca'||
              this._routerStore.langValue === 'fr.mazdadessourcesservice.ca '||
              this._routerStore.langValue === 'fr.mazdadrummondvilleservice.ca'||
              this._routerStore.langValue === 'fr.mazdaduboulevardservice.ca'||
              this._routerStore.langValue === 'fr.mazdagabrielstjacquesservice.ca'||
              this._routerStore.langValue === 'fr.mazdagabrielstlaurentservice.ca'||
              this._routerStore.langValue === 'fr.mazdagaspeservice.ca'||
              this._routerStore.langValue === 'fr.mazdaofhamiltonservice.ca'||
              this._routerStore.langValue === 'fr.mazdaofrichmondhillservice.ca'||
              this._routerStore.langValue === 'fr.mazdapapineauservice.ca'||
              this._routerStore.langValue === 'fr.mazdapointeauxtremblesservice.ca'||
              this._routerStore.langValue === 'fr.meganticmazdaservice.ca'||
              this._routerStore.langValue === 'fr.moffattsmazdaservice.ca'||
              this._routerStore.langValue === 'fr.morreymazdanorthshoreservice.ca'||
              this._routerStore.langValue === 'fr.newroadsmazdaservice.ca'||
              this._routerStore.langValue === 'fr.northbaymazdaservice.ca'||
              this._routerStore.langValue === 'fr.orilliamazdaservice.ca'||
              this._routerStore.langValue === 'fr.palladinomazdaservice.ca'||
              this._routerStore.langValue === 'fr.probartmazdaservice.ca'||
              this._routerStore.langValue === 'fr.reginamazdaservice.ca'||
              this._routerStore.langValue === 'fr.targetmazdaservice.ca'||
              this._routerStore.langValue === 'fr.truromazdaservice.ca'||
              this._routerStore.langValue === 'fr.valdormazdaservice.ca'||
              this._routerStore.langValue === 'fr.victoriavillemazdaservice.ca'||
              this._routerStore.langValue === 'fr.whitbymazdaservice.ca'||
              this._routerStore.langValue === 'fr.yarmouthmazdaservice.ca'||
              this._routerStore.langValue === 'fr.yorkdaledufferinmazdaservice.ca' ||
              this._routerStore.langValue === 'fr.gyromazdaservice.ca' ||
              this._routerStore.langValue === 'fr.kentvillemazdaservice.ca' ||
              this._routerStore.langValue === 'fr.pacificmazdaservice.ca' ||
              this._routerStore.langValue === 'fr.solutionmazdaservice.ca' ||
              this._routerStore.langValue === 'fr.motionmazdaservice.ca' ||
              this._routerStore.langValue === 'fr.kingmazdaservice.ca' ||
              this._routerStore.langValue === 'fr.paquinmazdaservice.ca' ||
              this._routerStore.langValue === 'fr.airportmazdaoftorontoservice.ca' ||
              this._routerStore.langValue === 'fr.primamazdaservice.ca' ||
              this._routerStore.langValue === 'fr.parkmazdaservice.ca' ||
              this._routerStore.langValue === 'fr.charlevoixmazdaservice.ca' ||
              this._routerStore.langValue === 'fr.coastlinemazdaservice.ca' ||
              this._routerStore.langValue === 'fr.mazdadelavalservice.ca' ||
              this._routerStore.langValue === 'fr.mazdadrummondvilleservice.ca' ||
              this._routerStore.langValue === 'fr.markhammazdaservice.ca' ||
              this._routerStore.langValue === 'fr.mazdaofstoneycreekservice.ca' ||
              this._routerStore.langValue === 'fr.mazdavaldavidservice.ca' ||
              this._routerStore.langValue === 'fr.openroadmazdaportmoodyservice.ca' ||
              this._routerStore.langValue === 'fr.duboismazdaservice.ca' ||
              this._routerStore.langValue === 'fr.pfaffmazdaservice.ca' ) ? 'fr' : 'en' ;

            console.log(this._routerStore.langValue);

            this. dealerNumber  = '00000';
            switch(this._routerStore.langValue.toLowerCase())
            {
                case 'fr.401dixiemazdaservice.ca':
                case 'www.401dixiemazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.401dixiemazdaservice.ca/' : 'https://fr.401dixiemazdaservice.ca/';
                    this.dealerNumber = '401dixiemazda';
                    break;
                case 'fr.agincourtmazdaservice.ca':
                case 'www.agincourtmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.agincourtmazdaservice.ca/' : 'https://fr.agincourtmazdaservice.ca/';
                    this.dealerNumber = 'AgincourtMazda';
                    break;
                case 'fr.buddsmazdaservice.ca':
                case 'www.buddsmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.buddsmazdaservice.ca/' : 'https://fr.buddsmazdaservice.ca/';
                    this.dealerNumber = 'BuddsMazda';
                    break;
                case 'fr.cornwallmazdaservice.ca':
                case 'www.cornwallmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.cornwallmazdaservice.ca/' : 'https://fr.cornwallmazdaservice.ca/';
                    this.dealerNumber = 'CornwallMazda';
                    break;
                case 'fr.courtenaymazdaservice.ca':
                case 'www.courtenaymazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.courtenaymazdaservice.ca/' : 'https://fr.courtenaymazdaservice.ca/';
                    this.dealerNumber = 'CourtenayMazda';
                    break;
                case 'fr.cowansvillemazdaservice.ca':
                case 'www.cowansvillemazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.cowansvillemazdaservice.ca/' : 'https://fr.cowansvillemazdaservice.ca/';
                    this.dealerNumber = 'CowansvilleMazda';
                    break;
                case 'fr.gerrygordonsmazdaservice.ca':
                case 'www.gerrygordonsmazdaservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.gerrygordonsmazdaservice.ca/' : 'https://fr.gerrygordonsmazdaservice.ca/';
                    this.dealerNumber = 'GerryGordonsMazda';
                    break;
                case 'fr.gyromazdadervice.ca':
                case 'www.gyromazdadervice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.gyromazdadervice.ca/' : 'https://fr.gyromazdadervice.ca/';
                    this.dealerNumber = 'GyroMazda';
                    break;
                case 'fr.kentvillemazdadervice.ca':
                case 'www.kentvillemazdadervice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.kentvillemazdadervice.ca/' : 'https://fr.kentvillemazdadervice.ca/';
                    this.dealerNumber = 'KentvilleMazda';
                    break;
                case 'fr.kramermazdaservice.ca':
                case 'www.kramermazdaservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.kramermazdaservice.ca/' : 'https://fr.kramermazdaservice.ca/';
                    this.dealerNumber = 'KramerMazda';
                    break;
                case 'fr.lamazda-service.ca':
                case 'www.lamazda-service.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.lamazda-service.ca/' : 'https://fr.lamazda-service.ca/';
                    this.dealerNumber = 'LAMazda';
                    break;
                case 'fr.lallomazdaservice.ca':
                case 'www.lallomazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.lallomazdaservice.ca/' : 'https://fr.lallomazdaservice.ca/';
                    this.dealerNumber = 'LalloMazda';
                    break;
                case 'fr.londoncitymazdaservice.ca':
                case 'www.londoncitymazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.londoncitymazdaservice.ca/' : 'https://fr.londoncitymazdaservice.ca/';
                    this.dealerNumber = 'LondonCityMazda';
                    break;
                case 'fr.mazda220Service.ca':
                case 'www.mazda220Service.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.mazda220Service.ca/' : 'https://fr.mazda220Service.ca/';
                    this.dealerNumber = 'Mazda220';
                    break;
                case 'fr.mazdademagogservice.ca' :
                case 'www.mazdademagogservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.mazdademagogservice.ca/' : 'https://fr.mazdademagogservice.ca/';
                    this.dealerNumber = 'MazdaDeMagog';
                    break;
                case 'www.mazdadessourcesservice.ca':
                case 'fr.mazdadessourcesservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.mazdadessourcesservice.ca/' : 'https://fr.mazdadessourcesservice.ca/';
                    this.dealerNumber = 'MazdaDesSources';
                    break;
                case 'www.mazdaduboulevardservice.ca':
                case 'fr.mazdaduboulevardservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.mazdaduboulevardservice.ca/' : 'https://fr.mazdaduboulevardservice.ca/';
                    this.dealerNumber = 'MazdaDuBoulevard';
                    break;
                case 'www.mazdagabrielstjacquesservice.ca':
                case 'fr.mazdagabrielstjacquesservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.mazdagabrielstjacquesservice.ca/' : 'https://fr.mazdagabrielstjacquesservice.ca/';
                    this.dealerNumber = 'MazdaGabrielStJacques';
                    break;
                case  'www.mazdagabrielstlaurentservice.ca':
                case 'fr.mazdagabrielstlaurentservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.mazdaGabrielstlaurentservice.ca/' : 'https://fr.mazdagabrielstlaurentservice.ca/';
                    this.dealerNumber = 'MazdaGabrielSt-Laurent';
                    break;
                case 'fr.ajaxmazdaservice.ca' :
                case 'www.ajaxmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.ajaxmazdaservice.ca/' : 'https://fr.ajaxmazdaservice.ca/';
                    this. dealerNumber  = 'ajaxmazda';
                    break;
                case 'fr.mazdaofrichmondhillservice.ca':
                case 'www.mazdaofrichmondhillservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.MazdaofRichmondHillService.ca/' : 'https://fr.mazdaofrichmondhillservice.ca/';
                    this.dealerNumber = 'MazdaofRichmondHill';
                    break;
                case 'fr.moffattsmazdaservice.ca':
                case 'www.moffattsmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.moffattsmazdaservice.ca/' : 'https://fr.moffattsmazdaservice.ca/';
                    this.dealerNumber = 'MoffattsMazda';
                    break;
                case 'fr.probartmazdaservice.ca':
                case 'www.probartmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.probartmazdaservice.ca/' : 'https://fr.probartmazdaservice.ca/';
                    this.dealerNumber = 'ProbartMazda';
                    break;
                case 'fr.truromazdaservice.ca' :
                case 'www.truromazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.truromazdaservice.ca/' : 'https://fr.truromazdaservice.ca/';
                    this.dealerNumber = 'TruroMazda';
                    break;
                case 'www.yarmouthmazdaservice.ca':
                case 'fr.yarmouthmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.yarmouthmazdaservice.ca/' : 'https://fr.yarmouthmazdaservice.ca/';
                    this.dealerNumber = 'YarmouthMazda';
                    break;
                case 'www.airportmazdaservice.ca':
                case 'fr.airportmazdaservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.airportmazdaservice.ca/' : 'https://fr.airportmazdaservice.ca/';
                    this.dealerNumber = 'airportmazda';
                    break;
                case 'www.albimazdastjeromeservice.ca':
                case 'fr.albimazdastjeromeservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.albimazdastjeromeservice.ca/' : 'https://fr.albimazdastjeromeservice.ca/';
                    this.dealerNumber = 'albimazdastjerome';
                    break;
                case 'www.autohousemazdaservice.ca':
                case 'fr.autohousemazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.autohousemazdaservice.ca/' : 'https://fr.autohousemazdaservice.ca/';
                    this.dealerNumber = 'autohousemazda';
                    break;
                case 'www.beauportmazdaservice.ca':
                case 'fr.beauportmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.beauportmazdaservice.ca/' : 'https://fr.beauportmazdaservice.ca/';
                    this.dealerNumber = 'beauportmazda';
                    break;
                case 'www.carlingmotorsservice.ca':
                case 'fr.carlingmotorsservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.carlingmotorsservice.ca/' : 'https://fr.carlingmotorsservice.ca/';
                    this.dealerNumber = 'carlingmotors';
                    break;
                case 'www.centennialmazdaofcharlottetownservice.ca':
                case 'fr.centennialmazdaofcharlottetownservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.centennialmazdaofcharlottetownservice.ca/' : 'https://fr.centennialmazdaofcharlottetownservice.ca/';
                    this.dealerNumber = 'CentennialMazda';
                    break;
                case 'www.crownmazdaservice.ca':
                case 'fr.crownmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.crownmazdaservice.ca/' : 'https://fr.crownmazdaservice.ca/';
                    this.dealerNumber = 'crownmazda';
                    break;
                case 'www.elitemazdaservice.ca':
                case 'fr.elitemazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.elitemazdaservice.ca/' : 'https://fr.elitemazdaservice.ca/';
                    this.dealerNumber = 'elitemazda';
                    break;
                case 'www.erinmillsmazdaservice.ca':
                case 'fr.erinmillsmazdaservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.erinmillsmazdaservice.ca/' : 'https://fr.erinmillsmazdaservice.ca/';
                    this.dealerNumber = 'erinmillsmazda';
                    break;
                case 'www.formanmazdaservice.ca':
                case 'fr.formanmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.formanmazdaservice.ca/' : 'https://fr.formanmazdaservice.ca/';
                    this.dealerNumber = 'formanmazda';
                    break;
                case 'www.freewaymazdaservice.ca':
                case 'fr.freewaymazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.freewaymazdaservice.ca/' : 'https://fr.freewaymazdaservice.ca/';
                    this.dealerNumber = 'freewaymazda';
                    break;
                case 'www.garymoemazdaservice.ca':
                case 'fr.garymoemazdaservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.garymoemazdaservice.ca/' : 'https://fr.garymoemazdaservice.ca/';
                    this.dealerNumber = 'garymoemazda';
                    break;
                case 'www.guelphcitymazdaservice.ca':
                case 'fr.guelphcitymazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.guelphcitymazdaservice.ca/' : 'https://fr.guelphcitymazdaservice.ca/';
                    this.dealerNumber = 'guelphcitymazda';
                    break;
                case 'www.halfwaymotorsservice.ca':
                case 'fr.halfwaymotorsservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.halfwaymotorsservice.ca/' : 'https://fr.halfwaymotorsservice.ca/';
                    this.dealerNumber = 'HalfwayMotorsMazda';
                    break;
                case 'www.harrismazdaservice.ca':
                case 'fr.harrismazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.harrismazdaservice.ca/' : 'https://fr.harrismazdaservice.ca/';
                    this.dealerNumber = 'harrismazda';
                    break;
                case 'www.hawkesburymazdaservice.ca':
                case 'fr.hawkesburymazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.hawkesburymazdaservice.ca/' : 'https://fr.hawkesburymazdaservice.ca/';
                    this.dealerNumber = 'hawkesburymazda';
                    break;
                case 'www.kingstonmazdaservice.ca':
                case 'fr.kingstonmazdaservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.kingstonmazdaservice.ca/' : 'https://fr.kingstonmazdaservice.ca/';
                    this.dealerNumber = 'kingstonmazda';
                    break;
                case 'www.leggatmazdaburlingtonservice.ca':
                case 'fr.leggatmazdaburlingtonservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.leggatmazdaburlingtonservice.ca/' : 'https://fr.leggatmazdaburlingtonservice.ca/';
                    this.dealerNumber = 'leggatmazdaburlington';
                    break;
                case 'www.mainwaymazdaservice.ca':
                case 'fr.mainwaymazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.mainwaymazdaservice.ca/' : 'https://fr.mainwaymazdaservice.ca/';
                    this.dealerNumber = 'mainwaymazda';
                    break;
                case 'www.maplemazdaservice.ca':
                case 'fr.maplemazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.maplemazdaservice.ca/' : 'https://fr.maplemazdaservice.ca/';
                    this.dealerNumber = 'maplemazda';
                    break;
                case 'www.mazdaderepentignyservice.ca':
                case 'fr.mazdaderepentignyservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.mazdaderepentignyservice.ca/' : 'https://fr.mazdaderepentignyservice.ca/';
                    this.dealerNumber = 'MazdaRepentigny';
                    break;
                case 'www.mazdadesherbrookeservice.ca':
                case 'fr.mazdadesherbrookeservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.mazdadesherbrookeservice.ca/' : 'https://fr.mazdadesherbrookeservice.ca/';
                    this.dealerNumber = 'mazdadesherbrooke';
                    break;
                case 'www.mazdaofhamiltonservice.ca':
                case 'fr.mazdaofhamiltonservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.mazdaofhamiltonservice.ca/' : 'https://fr.mazdaofhamiltonservice.ca/';
                    this.dealerNumber = 'mazdaofhamilton';
                    break;
                case 'www.mazdapapineauservice.ca':
                case'fr.mazdapapineauservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.mazdapapineauservice.ca/' : 'https://fr.mazdapapineauservice.ca/';
                    this.dealerNumber = 'mazdapapineau';
                    break;
                case 'www.mazdapointeauxtremblesservice.ca':
                case 'fr.mazdapointeauxtremblesservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.mazdapointeauxtremblesservice.ca/' : 'https://fr.mazdapointeauxtremblesservice.ca/';
                    this.dealerNumber = 'mazdapointeauxtrembles';
                    break;
                case 'www.meganticmazdaservice.ca':
                case 'fr.meganticmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.meganticmazdaservice.ca/' : 'https://fr.meganticmazdaservice.ca/';
                    this.dealerNumber = 'meganticmazda';
                    break;
                case 'www.morreymazdanorthshoreservice.ca':
                case 'fr.morreymazdanorthshoreservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.morreymazdanorthshoreservice.ca/' : 'https://fr.morreymazdanorthshoreservice.ca/';
                    this.dealerNumber = 'morreymazdanorthshore';
                    break;
                case 'www.newroadsmazdaservice.ca':
                case 'fr.newroadsmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.newroadsmazdaservice.ca/' : 'https://fr.newroadsmazdaservice.ca/';
                    this.dealerNumber = 'newroadsmazda';
                    break;

                case 'www.northbaymazdaservice.ca' :
                case 'fr.northbaymazdaservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.northbaymazdaservice.ca/' : 'https://fr.northbaymazdaservice.ca/';
                    this.dealerNumber = 'northbaymazda';
                    break;
                case 'www.orilliamazdaservice.ca' :
                case 'fr.orilliamazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.orilliamazdaservice.ca/' : 'https://fr.orilliamazdaservice.ca/';
                    this.dealerNumber = 'orilliamazda';
                    break;
                case 'www.palladinomazdaservice.ca' :
                case 'fr.palladinomazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.palladinomazdaservice.ca/' : 'https://fr.palladinomazdaservice.ca/';
                    this.dealerNumber = 'palladinomazda';
                    break;
                case 'www.reginamazdaservice.ca':
                case 'fr.reginamazdaservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.reginamazdaservice.ca/' : 'https://fr.reginamazdaservice.ca/';
                    this.dealerNumber = 'reginamazda';
                    break;
                case 'www.targetmazdaservice.ca':
                case 'fr.targetmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.targetmazdaservice.ca/' : 'https://fr.targetmazdaservice.ca/';
                    this.dealerNumber = 'targetmazda';
                    break;
                case 'www.valdormazdaservice.ca':
                case'fr.valdormazdaservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.valdormazdaservice.ca/' : 'https://fr.valdormazdaservice.ca/';
                    this.dealerNumber = 'valdormazda';
                    break;
                case 'www.victoriavillemazdaservice.ca':
                case 'fr.victoriavillemazdaservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.victoriavillemazdaservice.ca/' : 'https://fr.victoriavillemazdaservice.ca/';
                    this.dealerNumber = 'victoriavillemazda';
                    break;
                case 'www.whitbymazdaservice.ca' :
                case 'fr.whitbymazdaservice.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://www.whitbymazdaservice.ca/' : 'https://fr.whitbymazdaservice.ca/';
                    this.dealerNumber = 'whitbymazda';
                    break;
                case'www.yorkdaledufferinmazdaservice.ca':
                case 'fr.yorkdaledufferinmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.yorkdaledufferinmazdaservice.ca/' : 'https://fr.yorkdaledufferinmazdaservice.ca/';
                    this.dealerNumber = 'yorkdaledufferinmazda';
                    break;
                case'www.gyromazdaservice.ca':
                case 'fr.gyromazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.gyromazdaservice.ca/' : 'https://fr.gyromazdaservice.ca/';
                    this.dealerNumber = 'GyroMazda';
                    break;
                case'www.kentvillemazdaservice.ca':
                case 'fr.kentvillemazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.kentvillemazdaservice.ca/' : 'https://fr.kentvillemazdaservice.ca/' ;
                    this.dealerNumber = 'KentvilleMazda';
                    break;
                case'www.mazdagaspeservice.ca':
                case 'fr.mazdagaspeservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.mazdagaspeservice.ca/' : 'https://fr.mazdagaspeservice.ca/' ;
                    this.dealerNumber = 'MazdaGaspe';
                    break;
                case'www.pacificmazdaservice.ca':
                case 'fr.pacificmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.pacificmazdaservice.ca/' : 'https://fr.pacificmazdaservice.ca/' ;
                    this.dealerNumber = 'PacificMazda';
                    break;
                case'www.solutionmazdaservice.ca':
                case 'fr.solutionmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.solutionmazdaservice.ca/' : 'https://fr.solutionmazdaservice.ca/' ;
                    this.dealerNumber = 'SolutionMazda';
                    break;
                case'www.motionmazdaservice.ca':
                case 'fr.motionmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.motionmazdaservice.ca/' : 'https://fr.motionmazdaservice.ca/' ;
                    this.dealerNumber = 'MotionMazda';
                    break;
                case'www.kingmazdaservice.ca':
                case 'fr.kingmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.kingmazdaservice.ca/': 'https://fr.kingmazdaservice.ca/' ;
                    this.dealerNumber = 'KingMazda';
                    break;
                case'www.paquinmazdaservice.ca':
                case 'fr.paquinmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.paquinmazdaservice.ca/' : 'https://fr.paquinmazdaservice.ca/' ;
                    this.dealerNumber = 'PaquinMazda';
                    break;
                case'www.airportmazdaoftorontoservice.ca':
                case 'fr.airportmazdaoftorontoservice.ca':
                    this.urlLang = (this.lang === 'fr') ?   'https://www.airportmazdaoftorontoservice.ca/' : 'https://fr.airportmazdaoftorontoservice.ca/' ;
                    this.dealerNumber = 'AirportMazdaofToronto';
                    break;
                case'www.primamazdaservice.ca':
                case 'fr.primamazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.primamazdaservice.ca/' : 'https://fr.primamazdaservice.ca/' ;
                    this.dealerNumber = 'PrimaMazda';
                    break;
                case'www.parkmazdaservice.ca':
                case 'fr.parkmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.parkmazdaservice.ca/' : 'https://fr.parkmazdaservice.ca/' ;
                    this.dealerNumber = 'ParkMazda';
                    break;
                case'www.charlevoixmazdaservice.ca':
                case 'fr.charlevoixmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.charlevoixmazdaservice.ca/' : 'https://fr.charlevoixmazdaservice.ca/' ;
                    this.dealerNumber = 'CharlevoixMazda';
                    break;
                case'www.coastlinemazdaservice.ca':
                case 'fr.coastlinemazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.coastlinemazdaservice.ca/' : 'https://fr.coastlinemazdaservice.ca/' ;
                    this.dealerNumber = 'CoastlineMazda';
                    break;

                case'www.mazdadelavalservice.ca':
                case 'fr.mazdadelavalservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.mazdadelavalservice.ca/' : 'https://fr.mazdadelavalservice.ca/' ;
                    this.dealerNumber = 'MazdaDeLaval';
                    break;
                case'www.mazdadrummondvilleservice.ca':
                case 'fr.mazdadrummondvilleservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.mazdadrummondvilleservice.ca/' : 'https://fr.mazdadrummondvilleservice.ca/' ;
                    this.dealerNumber = 'MazdaDrummondville';
                    break;
                case'www.markhammazdaservice.ca':
                case 'fr.markhammazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.markhammazdaservice.ca/' : 'https://fr.markhammazdaservice.ca/' ;
                    this.dealerNumber = 'MarkhamMazda';
                    break;
                case'www.mazdaofstoneycreekservice.ca':
                case 'fr.mazdaofstoneycreekservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.mazdaofstoneycreekservice.ca/' : 'https://fr.mazdaofstoneycreekservice.ca/' ;
                    this.dealerNumber = 'MazdaofStoneyCreek';
                    break;
                case'www.duboismazdaservice.ca':
                case 'fr.duboismazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.duboismazdaservice.ca/' : 'https://fr.duboismazdaservice.ca/' ;
                    this.dealerNumber = 'DuboisMazda';
                    break;
                //added on 12/17/2018 KWu
                case'www.mazdavaldavidservice.ca':
                case 'fr.mazdavaldavidservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.mazdavaldavidservice.ca/' : 'https://fr.mazdavaldavidservice.ca/' ;
                    this.dealerNumber = 'MazdaValDavid';
                    break;
                case'www.openroadmazdaportmoodyservice.ca':
                case 'fr.openroadmazdaportmoodyservice.ca':
                    this.urlLang = (this.lang === 'fr') ?  'https://www.openroadmazdaportmoodyservice.ca/' : 'https://fr.openroadmazdaportmoodyservice.ca/' ;
                    this.dealerNumber = 'OpenRoadMazdaPortMoody';
                    break;
                //end addition on 12/17/2018
                    //added on 4/16/2019
                case 'fr.pfaffmazdaservice.ca':
                case 'www.pfaffmazdaservice.ca':
                    this.urlLang = (this.lang === 'fr') ? 'https://www.pfaffmazdaservice.ca/' : 'https://fr.pfaffmazdaservice.ca/';
                    this.dealerNumber = 'PfaffMazda';
                    break;
                    //end

                //QA env
                case 'qa.offrespecialemazda.ca' :
                case 'qa.mazdaserviceoffers.ca' :
                    this.urlLang = (this.lang === 'fr') ? 'https://qa.mazdaserviceoffers.ca/' : 'https://qa.offrespecialemazda.ca/';
                    break;
                case 'localhost.offrespecialemazda.ca:3000' :
                case 'localhost.mazdaserviceoffers.ca:3000' :
                    this.urlLang = (this.lang === 'fr') ?  'http://localhost.mazdaserviceoffers.ca:3000/' : 'http://localhost.offrespecialemazda.ca:3000/';
                    //this. dealerNumber  = 'SignatureMazda';
                    break;

                default:
                    this.urlLang = (this.lang === 'fr') ? 'https://www.mazdaserviceoffers.ca/' : 'https://www.offrespecialemazda.ca/';
                    break;
          }

          console.log(this.urlLang);

          this.dealerAppointment = this.lang === 'fr'? 'https://www.mazda.ca/fr/pieces-service/prendre-un-rendez-vous-de-service/' : ' https://www.mazda.ca/en/parts-service/book-service-appointment/';
          this.term = this.lang === 'fr' ? 'https://www.mazda.ca/fr/conditions/' : 'https://www.mazda.ca/en/terms/';
          this.privacy = this.lang === 'fr' ? 'https://www.mazda.ca/fr/politique-de-confidentialite/' : 'https://www.mazda.ca/en/privacy/';
          this.mazadaWebSite = this.lang === 'fr' ? 'https://www.mazda.ca/fr/' : 'https://www.mazda.ca';
      }
  }


  zonalApiCall = asyncComputed<ZonalAPIData>(async () => {
    let dealerInfo: any;
    if (this._routerStore.pcValue) {
      this.searchDealerModal = true;
      this.pcCode = this._routerStore.pcValue;
    }

    try {
       dealerInfo = await axios.get(`${apiBaseUrl}${getDealerUrl}?dn=${ this._routerStore.pathNameParams ? this._routerStore.pathNameParams : this.dealerNumber}&crmcid=${ this._routerStore.CUSTOMERIDValue ? this._routerStore.CUSTOMERIDValue : ''}`)
       console.log(dealerInfo);
        this.dealerShortName = this._routerStore.pathNameParams;
        this.setCustomer(dealerInfo.data.redirects.quote_your_tires_url, dealerInfo.data.redirects.personalize_your_mazda_url);
        this.setCurrentOffers(dealerInfo.data.dealer[0].dealer_offers);
        this.setNationalOffers(dealerInfo.data.national_offers);
        this.setCurrentDealer(dealerInfo.data.dealer[0]);
        console.log(this.setCurrentDealer(dealerInfo.data.dealer[0]));
    }catch {}

    return {
      listRecall: {}
    }
  });

    @action
  closeSearchDealerModal() {
        document.getElementsByTagName("META")[1].innerHTML = "<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>";
        this.searchDealerModal = false;
  }

  @action
  openSearchDealerModal(actionButton) {
      document.getElementsByTagName("META")[1].innerHTML = "<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0'>";

    this.trackingEventDealer('Not Your Dealer');
    this.searchDealerModal = true;
    this.setSearchPoupActionClick(actionButton);
  }
  
  @action
  updateVinNumber(e) {
    //this.vinNumber = e.target.value;
  }

  @action.bound
  listenToScroll () {
        //const winScroll =
        //    document.body.scrollTop || document.documentElement.scrollTop
      //alert(window.pageYOffset);
      //this.showStickyScheduleButton = false;
      //alert(window.innerWidth);
      //alert(window.outerWidth);

      if (window.pageYOffset >= this.showStickyScheduleButtonYOffset_mobile && window.innerWidth <= 450 )
          this.showStickyScheduleButton = true;
      else if (window.pageYOffset >= this.showStickyScheduleButtonYOffset_tablet && window.innerWidth <= 768)
          this.showStickyScheduleButton = true;
      else
          this.showStickyScheduleButton = false;
    }
@action.bound
  checkVisible(elm){
          var rect = elm.getBoundingClientRect();
          var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
          return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

  @action.bound
   handleScroll(e){
      var f = navigator.userAgent.search("Firefox");
      var spring_tire_eventElement = <HTMLElement>document.querySelector('.spring_tire_event')
      var hero_banner_height=<HTMLElement>document.querySelector('.hero-banner-block');
      var bodyElement=<HTMLElement>document.querySelector('body');
      var windowHeight=Math.round(this.getWindowHeight/10);
      /*var animation_done_genuine_break=<HTMLElement>document.querySelector(".animation_done_genuine_break");
      var now_relative=<HTMLElement>document.querySelector(".ani-fill-out");
      var benifits_of_mazdabreakElement=<HTMLElement>document.querySelector(".benifits-of-mazda-brake");*/
      if(e.deltaY < 0){
        this.scaleFrist += e.deltaY/10;
         //this.scrollTop= '0';
         //this.spring_first_fade=true;
         //spring_tire_eventElement.removeAttribute('style')
      }
      else if(e.deltaY > 0){
          this.scaleFrist += e.deltaY/10;
          this.scrollTop= -100+"%";
          this.spring_first_fade=true;
          console.log(this.scaleFrist >= windowHeight ? true :false)
     if(f>-1 || window.innerWidth<=991 || window.innerWidth > 991){     
      if(this.scaleFrist >= windowHeight/3 && this.checkVisible(spring_tire_eventElement) && hero_banner_height.style.transform==='translateY(-100%)'){
          this.section_2=true;
          bodyElement.classList.remove('keep-front');
          spring_tire_eventElement.style.top=-hero_banner_height.clientHeight+"px";
          spring_tire_eventElement.style.position='relative';

        }if(this.scaleFrist < windowHeight/3 && !this.checkVisible(spring_tire_eventElement) && hero_banner_height.style.transform==='translateY(0)'){
          bodyElement.classList.add('keep-front');
          this.section_2=false;
          spring_tire_eventElement.removeAttribute('style');
        }
      }else{
        if(this.scaleFrist >= windowHeight && this.checkVisible(spring_tire_eventElement)){
          this.section_2=true;
            bodyElement.classList.remove('keep-front');
             spring_tire_eventElement.style.top=-hero_banner_height.clientHeight+"px";
             spring_tire_eventElement.style.position='relative';
        }
      } 
      }
   }

   @action.bound

   parallax(item) {
        var $slider = item;

        var yPos = (window.pageYOffset/10) / $slider.dataset.speed;
        yPos = -yPos;
        
        var coords = '0% '+ yPos/10 + '%';
        
        $slider.style.backgroundPosition = coords;
        this.setParallex=yPos+"px";
    }

    @action.bound
      parallex_2(item) {
              if (document.documentElement.clientWidth > 767 && document.documentElement.clientWidth <= 991) {
                  if (this.checkVisible(item) && document.documentElement.scrollTop > postion) {
                      //console.log("down")
                      var $slider = item;

                      var yPos1 = i /*(window.pageYOffset/10) / $slider.dataset.speed;*/
                      var yPos2 = j /*(window.pageYOffset/10) / $slider.dataset.speed*/ ;
                      yPos1 = -yPos1;
                      yPos2 = yPos2;
                      this.setParallex_independent_left = Math.trunc(yPos1 / 100) + "%";
                      this.setParallex_independent_right= yPos2 / 20 + "%";
                      i = i + 5;
                      j++;
                      //j++;
                      //console.log(i);
                  } else if (this.checkVisible(item) && document.documentElement.scrollTop < postion) {
                      //console.log("up")
                      var $slider = item;

                      var yPos1 = i /*(window.pageYOffset/10) / $slider.dataset.speed;*/
                      var yPos2 = j /*(window.pageYOffset/10) / $slider.dataset.speed*/ ;
                      yPos1 = -yPos1;
                      yPos2 = yPos2;
                      this.setParallex_independent_left = Math.trunc(yPos1 / 100) + "%";
                      this.setParallex_independent_right= yPos2 / 10 + "%";
                          i = i - 10;
                          j--;
                          //console.log(i);
                      }
                      //postion=scroll;
                  } else if (document.documentElement.clientWidth <= 767) {
                      if (this.checkVisible(item) && document.documentElement.scrollTop > postion) {
                         // console.log("down")
                          var $slider = item;

                          var yPos1 = i; /*(window.pageYOffset/10) / $slider.dataset.speed;*/
                          var yPos2 = j /*(window.pageYOffset/10) / $slider.dataset.speed*/ ;
                          yPos1 = -yPos1;
                          yPos2 = yPos2;
                          this.setParallex_independent_left = Math.trunc(yPos1 / 100) + "%";
                          this.setParallex_independent_right= yPos2 / 10 + "%";
                          i = i;
                          j++;
                          //console.log(i);
                      } else if (this.checkVisible(item) && document.documentElement.scrollTop < postion) {
                         // console.log("up")
                          var $slider = item;

                          var yPos1 = i /*(window.pageYOffset/10) / $slider.dataset.speed;*/
                          var yPos2 = j /*(window.pageYOffset/10) / $slider.dataset.speed*/ ;
                          yPos1 = -yPos1;
                          yPos2 = yPos2;
                          this.setParallex_independent_left= Math.trunc(yPos1 / 100) + "%";
                          this.setParallex_independent_right= yPos2 / 10 + "%";
                          i = i;
                          j--;
                          //console.log(i);
                      }
                      // postion=scroll;


                  } else if (document.documentElement.clientWidth > 991) {
                      if (this.checkVisible(item)) {
                          var $slider = item;
                          var yPos1 = (window.pageYOffset / 10) / $slider.dataset.speed;
                          var yPos2 = (window.pageYOffset / 10) / $slider.dataset.speed;
                          yPos1 = -yPos1;
                          yPos2 = yPos2;
                          this.setParallex_independent_left= yPos1 / 10 + "%";
                          this.setParallex_independent_right= yPos2 / 10 + "%";
                      }
                  }
      }


  @action.bound
   handleScrollMob(e){
          var now_relativeElement = <HTMLElement>document.querySelector('.spring_tire_event');
          var hero_height = <HTMLElement>document.querySelector('.hero-banner-block');
          var bodyElement = <HTMLElement>document.querySelector('body');
            this.section_2=true;
            this.scrollTop= -100 + "%";
            this.spring_first_fade=true;
            console.log(this.checkVisible(hero_height) ? true :false);
             if(hero_height.style.transform==='translateY(-100%)'){
              setTimeout(function(){
                bodyElement.classList.remove('keep-front')
                now_relativeElement.style.position='relative';
                now_relativeElement.style.top =-hero_height.clientHeight+"px";
              },2000);
            }
            //console.log(window.clearTimeout(clearTimeout));
            if(hero_height.style.transform==='translateY(0)'){
               bodyElement.classList.add('keep-front')
               now_relativeElement.removeAttribute('style');
              }
        }


   @action.bound
    handleScrollSection(e) {
      var bodyElement=<HTMLElement>document.querySelector('body');
      var spring_tire_eventElement = <HTMLElement>document.querySelector('.spring_tire_event');
      //var mobileSegment = <HTMLElement>document.querySelector('.mobile-segment');
      var genuine_break_maintain = <HTMLElement>document.querySelector('.genuine-break-maintain');
      var  wrapper= <HTMLElement>document.querySelector('.wrapper');
      var benifits_of_mazdabreakElement=<HTMLElement>document.querySelector(".benifits-of-mazda-brake");
      var allHeight:NodeListOf<Element>=document.querySelectorAll(".has-fixed");
      var genuine_mazda_accessoriesElement=<HTMLElement> document.querySelector(".genuine-mazda-accessories");
      var maintain_your_joyElement=<HTMLElement> document.querySelector(".maintain-your-joy");
      var scroll=document.documentElement.scrollTop;
      var three_parallex_image=<HTMLElement>document.querySelector(".parallex");
      var three_parallex_all_element:NodeListOf<Element>=document.querySelectorAll(".parallex");
      var two_parallex_image=<HTMLElement>document.querySelector(".parallex-2");
      var two_parallex_all_element:NodeListOf<Element>=document.querySelectorAll(".parallex-2");
      var footerElement=<HTMLElement>document.querySelector("footer");
      //console.log(mobileSegment);
      three_parallex_image && (three_parallex_all_element as any as Array<HTMLElement>).forEach((item, index) => {
                if (this.checkVisible(item)) {
                    this.parallax(item);
                }
            });
      two_parallex_image &&  (two_parallex_all_element as any as Array<HTMLElement>).forEach((item,index)=>{
        if(this.checkVisible(item))
          this.parallex_2(item);
      });
      

      if (document.documentElement.clientWidth >= 991) {
          if (this.checkVisible(genuine_break_maintain) && (window.innerHeight + window.scrollY) >= wrapper.offsetHeight) {
              this.now_relative_scrolled_bottom = true;
              this.section_3_transform = -100 + "%";
              this.benifits_of_mazda_brake_fade_text = true;
              //setTimeout(()=>{
              benifits_of_mazdabreakElement.style.position="relative";
              benifits_of_mazdabreakElement.style.top=-document.documentElement.clientHeight+"px"; 
            //},2000)
          }
          if(spring_tire_eventElement.clientHeight > document.documentElement.scrollTop){
            this.section_3_transform = '0';
              this.benifits_of_mazda_brake_fade_text = false;
              benifits_of_mazdabreakElement.removeAttribute("style");
          }
          if (document.documentElement.scrollTop == 0) {
              this.scrollTop = '0';
              this.section_2 = false;
              bodyElement.classList.add('keep-front');
              spring_tire_eventElement.removeAttribute('style');
              this.spring_first_fade = false;
          }
          
          if ((spring_tire_eventElement.clientHeight + benifits_of_mazdabreakElement.clientHeight - document.documentElement.clientHeight / 2) < document.documentElement.scrollTop) {
              this.genuine_mazda_accessories_fade_text = true;

              if ((window.innerHeight + window.scrollY) >= wrapper.offsetHeight) {
                  genuine_mazda_accessoriesElement.style.top = -document.documentElement.clientHeight + "px";
                  genuine_mazda_accessoriesElement.style.position = "relative";
              }
          } else {
              this.genuine_mazda_accessories_fade_text = false;
          }
          if (this.checkVisible(genuine_mazda_accessoriesElement) && genuine_mazda_accessoriesElement.offsetTop > document.documentElement.scrollTop) {
              this.genuine_mazda_accessories_fade_text = false;
              genuine_mazda_accessoriesElement.removeAttribute("style");
          }

          if ((spring_tire_eventElement.clientHeight + benifits_of_mazdabreakElement.clientHeight + genuine_mazda_accessoriesElement.clientHeight - document.documentElement.clientHeight / 2) < document.documentElement.scrollTop) {
              this.maintain_your_joy_fade_text = true;
              if ((window.innerHeight + window.scrollY) >= wrapper.offsetHeight) {
                  maintain_your_joyElement.style.top = -document.documentElement.clientHeight + "px";
                  maintain_your_joyElement.style.position = "relative";
              }
          } else {
              this.maintain_your_joy_fade_text = false;
          }
          if (this.checkVisible(maintain_your_joyElement) && maintain_your_joyElement.offsetTop > document.documentElement.scrollTop) {
              //console.log("done");
              this.maintain_your_joy_fade_text = false;
              maintain_your_joyElement.removeAttribute("style");
          }


          if (this.checkVisible(footerElement) && (wrapper.clientHeight < document.documentElement.scrollTop + maintain_your_joyElement.clientHeight + footerElement.clientHeight)) {
            console.log("sdfn")
            //alert();
              var totalHeight = 0;
              allHeight && (allHeight as any as Array < HTMLElement > ).forEach((item, index) => {
                  totalHeight += item.clientHeight;
              });
              wrapper.style.height = totalHeight - document.documentElement.clientHeight-1  /*+ footerElement.clientHeight*/ + 'px';
          }
          if (!this.checkVisible(footerElement)) {
              wrapper.removeAttribute('style');
          }
      }

      if (document.documentElement.clientWidth < 991 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         // console.log(window.innerHeight + window.scrollY);
         // console.log(wrapper.offsetHeight);
          if ((window.innerHeight + window.scrollY) == document.documentElement.clientHeight) {
              spring_tire_eventElement && spring_tire_eventElement.removeAttribute("style")
              this.scrollTop = '0';
              this.section_2=false;
              spring_tire_eventElement.removeAttribute('style');
              this.spring_first_fade = false;

          }
          if ((window.innerHeight + window.scrollY) >=spring_tire_eventElement.clientHeight+document.documentElement.clientHeight ) {
              this.now_relative_scrolled_bottom = true;
              this.section_3_transform = -100 + "%";
              this.benifits_of_mazda_brake_fade_text = true;
              setTimeout(()=>{
              if(genuine_break_maintain.style.transform==='translateY(-100%)'){
                benifits_of_mazdabreakElement.style.position = "relative";
                benifits_of_mazdabreakElement.style.top = -document.documentElement.clientHeight + "px";
              }
              if(genuine_break_maintain.style.transform==='translateY(0)'){
                benifits_of_mazdabreakElement.removeAttribute("style");
              }
            },2000)
          } else if (spring_tire_eventElement.clientHeight >= document.documentElement.scrollTop) {
              this.section_3_transform = '0';
              this.benifits_of_mazda_brake_fade_text = false;
              benifits_of_mazdabreakElement.removeAttribute("style");
          }
          if ((spring_tire_eventElement.clientHeight + benifits_of_mazdabreakElement.clientHeight - document.documentElement.clientHeight / 2) < document.documentElement.scrollTop) {
              //console.log("yes")
              this.genuine_mazda_accessories_fade_text = true;
              if ((window.innerHeight + window.scrollY) >= spring_tire_eventElement.clientHeight + benifits_of_mazdabreakElement.clientHeight + document.documentElement.clientHeight) {
                //setTimeout(()=>{
                  genuine_mazda_accessoriesElement.style.top = -document.documentElement.clientHeight + "px";
                  genuine_mazda_accessoriesElement.style.position = "relative";
                //},2000)
              }
          } else {
              this.genuine_mazda_accessories_fade_text = false;
          }
          if (this.checkVisible(genuine_mazda_accessoriesElement) && genuine_mazda_accessoriesElement.offsetTop > document.documentElement.scrollTop && (window.innerHeight + window.scrollY) < spring_tire_eventElement.clientHeight + benifits_of_mazdabreakElement.clientHeight + document.documentElement.clientHeight) {
              //console.log("yes");
              i = 0;
              j = 0;
              this.setParallex_independent_left = '';
              this.setParallex_independent_right = '';
              genuine_mazda_accessoriesElement.removeAttribute("style");
          }
          if ((spring_tire_eventElement.clientHeight + benifits_of_mazdabreakElement.clientHeight + genuine_mazda_accessoriesElement.clientHeight - document.documentElement.clientHeight / 2) < document.documentElement.scrollTop/* && (window.innerHeight + window.scrollY) >= wrapper.offsetHeight - mobileSegment.clientHeight*/) {
              this.maintain_your_joy_fade_text = true;
              if ((window.innerHeight + window.scrollY) >= spring_tire_eventElement.clientHeight + benifits_of_mazdabreakElement.clientHeight + genuine_mazda_accessoriesElement.clientHeight + document.documentElement.clientHeight/*+mobileSegment.clientHeight*/) {
                  maintain_your_joyElement.style.top = -document.documentElement.clientHeight + "px";
                  maintain_your_joyElement.style.position = "relative";
              }
          } else {
              this.maintain_your_joy_fade_text = false;
          }
          if (this.checkVisible(maintain_your_joyElement) && maintain_your_joyElement.offsetTop > document.documentElement.scrollTop && (window.innerHeight+window.scrollY)<spring_tire_eventElement.clientHeight + benifits_of_mazdabreakElement.clientHeight + genuine_mazda_accessoriesElement.clientHeight + document.documentElement.clientHeight) {
              console.log("done");
              // this.maintain_your_joy_fade_text=false;
              maintain_your_joyElement.removeAttribute("style");
          }


          if (this.checkVisible(footerElement) /* && wrapper.clientHeight > document.documentElement.scrollTop+maintain_your_joyElement.clientHeight + footerElement.clientHeight*/ ) {
              //console.log('footer visible');
              var totalHeight = 0;
              allHeight && (allHeight as any as Array < HTMLElement > ).forEach((item, index) => {
                  totalHeight += item.clientHeight;
              });
              console.log(totalHeight);
              wrapper.style.height = totalHeight - document.documentElement.clientHeight/*-footerElement.clientHeight*/+ 'px';
          }
          if (!this.checkVisible(footerElement)) {
              wrapper.removeAttribute('style');
          }
      }
     
      if(document.documentElement.clientWidth >= 991 && window.innerHeight > window.innerWidth){
          if ((window.innerHeight + window.scrollY) >= wrapper.offsetHeight) {
          this.now_relative_scrolled_bottom=true;
          this.section_3_transform= -100+"%";
          this.benifits_of_mazda_brake_fade_text=true;
            benifits_of_mazdabreakElement.style.top=-document.documentElement.clientHeight+"px"; 
            benifits_of_mazdabreakElement.style.position="relative";
          }
        }
        postion = scroll;
    }


    @action
    heroSectionAnimate(){
      var bodyElement=<HTMLElement>document.querySelector('body');
      var now_relativeElement = <HTMLElement>document.querySelector('.spring_tire_event');
      var hero_height = <HTMLElement>document.querySelector('.hero-banner-block');
      this.scrollTop=-100+"%";
      bodyElement.classList.remove('keep-front')
      now_relativeElement.style.position='relative';
      now_relativeElement.style.top =-hero_height.clientHeight+"px";
    } 
    @action
    benifits_of_mazda_brake(){
      var bodyElement=<HTMLElement>document.querySelector('body');
      var now_relativeElement = <HTMLElement>document.querySelector('.spring_tire_event');
      var hero_height = <HTMLElement>document.querySelector('.hero-banner-block');
      var benifits_of_mazdabreakElement=<HTMLElement>document.querySelector(".benifits-of-mazda-brake");
      this.scrollTop=-100+"%";
      bodyElement.classList.remove('keep-front');
      now_relativeElement.style.position='relative';
      now_relativeElement.style.top =-hero_height.clientHeight+"px";
      this.section_3_transform = -100 + "%";
      this.benifits_of_mazda_brake_fade_text = true;
      benifits_of_mazdabreakElement.style.top=-document.documentElement.clientHeight+"px"; 
      benifits_of_mazdabreakElement.style.position="relative";
    } 
    @action
    genuine_mazda_accessories(){
      var bodyElement=<HTMLElement>document.querySelector('body');
      var now_relativeElement = <HTMLElement>document.querySelector('.spring_tire_event');
      var hero_height = <HTMLElement>document.querySelector('.hero-banner-block');
      var benifits_of_mazdabreakElement=<HTMLElement>document.querySelector(".benifits-of-mazda-brake");
      var genuine_mazda_accessoriesElement=<HTMLElement> document.querySelector(".genuine-mazda-accessories");
      this.scrollTop=-100+"%";
      bodyElement.classList.remove('keep-front');
      now_relativeElement.style.position='relative';
      now_relativeElement.style.top =-hero_height.clientHeight+"px";
      this.section_3_transform = -100 + "%";
      this.benifits_of_mazda_brake_fade_text = true;
      benifits_of_mazdabreakElement.style.position="relative";
      benifits_of_mazdabreakElement.style.top=-document.documentElement.clientHeight+"px"; 
      this.genuine_mazda_accessories_fade_text = true;
      genuine_mazda_accessoriesElement.style.position = "relative";
      genuine_mazda_accessoriesElement.style.top = -document.documentElement.clientHeight + "px";
    }

    @action
    maintain_your_joy(){
      var bodyElement=<HTMLElement>document.querySelector('body');
      var now_relativeElement = <HTMLElement>document.querySelector('.spring_tire_event');
      var hero_height = <HTMLElement>document.querySelector('.hero-banner-block');
      var benifits_of_mazdabreakElement=<HTMLElement>document.querySelector(".benifits-of-mazda-brake");
      var genuine_mazda_accessoriesElement=<HTMLElement> document.querySelector(".genuine-mazda-accessories");
      var maintain_your_joyElement=<HTMLElement> document.querySelector(".maintain-your-joy");
      this.scrollTop=-100+"%";
      bodyElement.classList.remove('keep-front');
      now_relativeElement.style.position='relative';
      now_relativeElement.style.top =-hero_height.clientHeight+"px";
      this.section_3_transform = -100 + "%";
      this.benifits_of_mazda_brake_fade_text = true;
      benifits_of_mazdabreakElement.style.position="relative";
      benifits_of_mazdabreakElement.style.top=-document.documentElement.clientHeight+"px"; 
      this.genuine_mazda_accessories_fade_text = true;
      genuine_mazda_accessoriesElement.style.position = "relative";
      genuine_mazda_accessoriesElement.style.top = -document.documentElement.clientHeight + "px";
      this.maintain_your_joy_fade_text = true;
      maintain_your_joyElement.style.position = "relative";
      maintain_your_joyElement.style.top = -document.documentElement.clientHeight + "px";
    }

    @action
    updatepcCode(e) {
        this.pcCode = e.target.value;
    }

    @action
    enterKeySearch(e) {
        if (e.key == 'Enter')
            this.searchDealer();
    }

    @action
  updateCurrentDealer(dealer) {
    this.trackingEventDealer('Dealer Search - Select');
    this.setCurrentDealer(dealer);
    this.closeSearchDealerModal();
    window.location.hash = "#authorized-dealer";
    var y = window.pageYOffset - 100;
    window.scrollTo(0, y);
  }

    openScheduleServiceAppoint(newWindow) {
      this.trackingEventDealer('Appointment Scheduler Link - Redirect');
      window.open(this.dealerAppointment, newWindow);
  }

    @action.bound
  openPhoneCallDealer() {
    //this.trackingEventDealer('Dealer Phone Call');
    //document.location.href = `tel: ${this.currentDealerInfo} && ${this.currentDealerInfo['dealer_service']}`;
  }

  @action.bound
  openAuthorizedDealerWebsite() {
    this.trackingEventDealer('Dealer Website Link');
    window.open(this.currentDealerInfo && this.currentDealerInfo['dealer_website'], '_blank');
  }

  @action.bound
  switchLanguage() {
    this.trackingEventDealer('Switch Language');
    document.location.href = (this.dealerNumber == '00000') ? this.urlLang : this.urlLang + this.dealerNumber;
  }


  @asyncAction
  *searchDealer() {
    this.trackingEventDealer('Dealer Search');
    try {
      const { data }: AxiosResponse = yield axios.get(`${apiBaseUrl}${getDealerUrl}?pc=${encodeURIComponent(this.pcCode)}`);
      this.listDealers = data.dealer;
      if (data.dealer.length === 0) {
        this.notFoundDealer = true;
      } else {
        this.notFoundDealer = false;
      }
    } catch (e) {
      this.listDealers = [];
      this.notFoundDealer = true;
    }


  }



  @asyncAction
  *printOffers() {

        this.trackOfferClick();

        try {
          axios({
              url: `${apiBaseUrl}${printOfferUrl}?id=${this.dealerID}&offer=${this.offerID}`,
              method: 'GET',
              responseType: 'text/html', // important
          }).then((response) => {

              // It is necessary to create a new blob object with mime-type explicitly set
              // otherwise only Chrome works like it should
              var newBlob = new Blob([response.data], {type: "text/html"});

              // IE doesn't allow using a blob object directly as link href
              // instead it is necessary to use msSaveOrOpenBlob
              if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                  window.navigator.msSaveOrOpenBlob(newBlob);
                  return;
              }

              const data = window.URL.createObjectURL(newBlob);
              const link = document.createElement('a');
              link.href = data;


              //set open in new tab
              if(navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") != -1) {
                  link.setAttribute('target', '_blank');

              }

              document.body.appendChild(link);
              link.click();
          });
      } catch {}
  }

  openNewRedirect(dealer)
  {
      runInAction(() => {

      try {

          var newWindow = "_self";
          if (window.innerWidth > this.mobileWidthCutOff ) { newWindow = "_blank";}

          if (this.searchPopupActionButton &&  this.searchPopupActionButton != '') {
              //redirect logic if a search is from a national offer landing page.
              if (dealer.personalize_your_mazda_url.length > 0 && this.dealerNumber != '00000' && this.searchPopupActionButton == 'PersonalizeYourMazda')
              {
                  window.open(this.personalizeMazda, newWindow);
                  this.setSearchPoupActionClick('');
              }

              if (dealer.quote_your_tires_url.length > 0 && this.dealerNumber != '00000' && this.searchPopupActionButton == 'QuoteYourTires')
              {
                  window.open(this.quoteTires, newWindow);
                  this.setSearchPoupActionClick('');
              }

              if (dealer.dealer_service_appointment.length > 0 && this.dealerNumber != '00000' && this.searchPopupActionButton == 'ScheduleAppointment')
              {
                  this.openScheduleServiceAppoint(newWindow);
                  this.setSearchPoupActionClick('');
              }
          }
      } catch {}
      });
  }

  setCurrentDealer(dealer) {
    runInAction(() => {
        try {
            if (dealer.dealer_name !== '') {
                this.isDealerInfoAvailable = true;
            } else {
                this.isDealerInfoAvailable = false;
            }

            this.currentDealerInfo = dealer;
            this.dealerID = dealer.dealer_id;
            this.dealerName = dealer.dealer_name;
            this.dealerShortName = dealer.dealer_short_name;
            this.dealerNumber = dealer.dealer_number;
            this.dealerAppointment = dealer.dealer_service_appointment;
            this.openNewRedirect(dealer);
            this.uri = `${dealer.dealer_short_name}${this._routerStore.CUSTOMERIDValue ? `?CUSTOMER_ID=${this._routerStore.CUSTOMERIDValue}` : ''}`;
            this._routerStore.history.push(this.uri);
            //console.log(this.dealerName);
        } catch {}

    });
  }

  setCustomer(tiresURL, personalizeMazdaURL) {
    runInAction(() => {
      this.quoteTires = tiresURL;
      this.personalizeMazda = personalizeMazdaURL;
    });
  }

  setNationalOffers(offers) {
    runInAction(() => {
      this.nationalOffers = offers[this.lang];
    });
  }

  setCurrentOffers(offers) {
      runInAction(() => {
          this.currentDealerOffers = offers[this.lang];
      });
  }

  trackingEventDealer(eventName) {
    window['fbq']('track', 'event', eventName, {'dealerNumber': this.dealerNumber, 'dealerShortName': this.dealerName});
    window['ga']('send', 'event', eventName, 'click', `${this.dealerNumber}-${this.dealerName}-${this.lang}`);
  }

  raiseRecallError(dealer) {}

  setEmergencyAlert(header) {
    runInAction(() => {
      this.isEmergencyAlert = header.emergency_recall_alert === 1 ? true : false;
    })
  }

  setOfferID(offerId) {
      runInAction(() => {
          this.offerID = offerId;
      })
  }

  setSearchPoupActionClick(button) {
      runInAction(() => {
          this.searchPopupActionButton = button;
      })
  }



  trackOfferClick() {
    // track print offer
    try {
        var trackingEventName = 'Print Offer - ';
        var aryOffers = this.dealerNumber == '00000' ? this.nationalOffers : this.currentDealerOffers;
        for (var i = 0; i < aryOffers.length; i++) {
            var objOffer = aryOffers[i];
            if (objOffer.offer_id == this.offerID) {
                // trackingEventName = trackingEventName + objOffer.offer_title;
                trackingEventName = trackingEventName + (i + 1);
                break;
            }
        }
        this.trackingEventDealer(trackingEventName);
    }
    catch (err) {
        console.log(err);
    }
  }

  checkCarouselDate() {
        //date in month offset by 1
        //v2 = 5/1@12am
        //v3 = 5/31@12am
        var dateSlide3 = new Date(2019, 4, 31);
        var dateSlide2 = new Date(2019, 4, 1);

        this.checkCarouselSlide = 1;
        if (new Date > dateSlide3 ) this.checkCarouselSlide = 3;
        else if (new Date > dateSlide2 ) this.checkCarouselSlide = 2;
  }

}
