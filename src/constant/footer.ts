const date = new Date();
import renderHTML from 'react-render-html';
export const STRFooter = {
  footer: {
    default: {
      p1: '*Offer applicable to all Mazda vehicles, in-store only. $50 discount is taken off the final purchase price before applicable taxes;  additional savings of up to $70 will vary according to the coupons and rebates available from, and subject to final review and approval by,  the applicable tire manufacturer. Conditions, restrictions and expiration apply. See dealer and claim form for details.',
      mazda_link: 'https://www.mazda.ca',
      mazda: 'Mazda.ca',
      term: 'Terms',
      privacy: 'Privacy',
      year: `©${date.getFullYear()}`,
      disclaimer: 'Disclaimer',
      disclaimer_title: ` MAZDA CANADA INC. ALL RIGHTS RESERVED.`,
      disclaimer_content: renderHTML(`There are two forms of motor vehicle recalls: (1) emission recalls, and (2) safety recalls. Automobile manufacturers can initiate an emissions-related recall when a substantial number of a category of vehicles fails to meet the federal vehicle emissions standard. A safety recall involving a motor vehicle, or an item of motor vehicle equipment can either be voluntarily conducted by a manufacturer or ordered by the Minister of Transport in order to repair a safety-related defect or noncompliance with a federal motor vehicle safety standard. Mazda Canada conducts non-safety or non-regulatory repairs as Special Service Programs (SSP).
      <br><br>Special Service Programs which consist of a warranty extension may also be developed by Mazda Canada as voluntary campaigns to improve customer satisfaction. Customers are contacted by priority mail, and customer participation is voluntary. Special Service Programs that have a Warranty Extension included are not mandated recalls.`),
    }
  }
};