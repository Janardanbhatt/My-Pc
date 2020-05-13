import { merge } from 'lodash';
import { STRCommon } from './common';
import { STRTopNav } from './topNav';
import { STRFooter } from './footer';
import { STRExperts } from './theexperts';
import { STRAccessories } from './accessories';
//import { STRSearchRecall } from './searchRecall';
//import { STRRecallResult } from './recallResult';
//import { STRToturial } from './toturial';
import { STRLanding } from './landing';
//import { STRVinLocation } from './vinLocation';
import { STREmergency } from './emergencyAlert';
//import { STRaboutRecall } from './aboutRecall';
//import { STRvehicleRepair } from './vehicleRepair';
//import { STRpartsAvailability } from './partsAvailability';
import { STRmoreInfo } from './moreInfo';
//import { STRCustomerNotification } from './customerNotification';
//import { STRTakataFaq } from './takataFaq';
import { STROffers } from './offers';
import { STRWhyBuy } from './whyBuy';
import { STRImportant } from './important';
import { STRMyths } from './myths';
import { STRNeed } from './need';
//import { STRRecallInfo } from './recallInfo';
import { STRSlides } from './slides';
import { STRTires } from './tires';

import { STRSearchDealer } from './searchDealer';
import { STRSpringtireevent } from './springtirevent';

export const STRCONSTANT = merge(  STRCommon,
             STRTopNav,
             STRLanding,
             STRAccessories,
             STRFooter,
             STREmergency,
             STRmoreInfo,
             STRSearchDealer,
             STROffers,
             STRWhyBuy,
             STRImportant,
             STRMyths,
             STRNeed,
             STRSlides,
             STRExperts,
             STRTires,
             STRSpringtireevent
);
