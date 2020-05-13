import { computed } from 'mobx';


export class ParallaxStore {

    @computed
    get get_height_offset () {
        return window.pageYOffset;
    }

    @computed
    get get_scroll_y () {
       return window.scrollY;
    }


    // @computed
    // get showDealerInfoPage() {
    //   if (this.ECIDValue) {
    //     return true;
    //   } else {
    //    return false;
    //   }
    // }
}

export default new ParallaxStore();