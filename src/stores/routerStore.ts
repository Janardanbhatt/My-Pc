import { computed, reaction } from 'mobx';
import UrlPattern from 'url-pattern';
import createBrowserHistory from 'mobx-history/createBrowserHistory';
import qs from 'qs';
//import omit from 'lodash/omit';

// additional page flow
const _mainPageRoute = '/';
const _cityBasedRoute = '/:cityPage';
export const mainPageRoute = new UrlPattern(_mainPageRoute + '(/*)');
export const cityPageRoute = new UrlPattern(_cityBasedRoute + '(/*)');

const routes = [mainPageRoute, cityPageRoute];
//console.log(document.querySelector('.spring_tire_event'));

export class RouterStore {
  history = createBrowserHistory();
  redirectReaction = reaction(
    () => this.activeRoutes.length,
    () => {
      if (this.activeRoutes.length === 0) {
        this.history.push(mainPageRoute.stringify({ mainPage: '/' }));
      }
    },
    { fireImmediately: true }
  );

  @computed
  get activeRoutes() {
    return routes.filter(route => !!route.match(this.history.location.pathname));
  }

  // @computed
 //  get activeRoutePage() {
 //    return this.activeRouteParams.cityPage;
 //  }

  // @computed
  // get activeRouteParams() {
  //   const params = this.activeRoutes.map(route => route.match(this.history.location.pathname));
  //   return omit(Object.assign({}, ...params), ['_']);
  // }
  

  @computed
  get pathNameParams() {
    return this.history.location.pathname.slice(1);
  }

  @computed
  get activeQueryParams() {
    return qs.parse(this.history.location.search.slice(1));
  }

  @computed
  get pcValue() {
    return this.activeQueryParams.pc;
  }

  @computed
  get vinValue() {
    return this.activeQueryParams.vin;
  }

  @computed
  get langValue() {
    return window.location.host || 'localhost';
  }

 // @computed
 // get showDealerInfoPage() {
 //   if (this.ECIDValue) {
 //     return true;
 //   } else {
  //    return false;
 //   }
 // }

  @computed
  get ECIDValue() {
    return this.activeQueryParams.ECID || this.activeQueryParams.ecid;
  }

  @computed
  get CRMCIDValue() {
    return this.activeQueryParams.CRMCID || this.activeQueryParams.crmcid;
  }

  @computed
  get CUSTOMERIDValue() {
      return this.activeQueryParams.CUSTOMER_ID || this.activeQueryParams.customer_id;
  }
}

export default new RouterStore();
