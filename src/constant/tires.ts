import renderHTML from 'react-render-html';

export const STRTires = {
  tires: {
    default: {
      title: 'YOUR MAZDA. YOUR LIFESTYLE.',
      p1: 'Experience every single moment of Summer, by outfitting your vehicle with Mazda Genuine Accessories. With a number of premium accessories ranging from Alloy Pedal Set, to Bicycle Rack and Alloy Wheels, you’ll have no problem tailoring your Mazda to suit your lifestyle.',
      p2: renderHTML('No matter what winter adventures you have planned, <br/>we have the perfect accessories for the trip:'),      
      p3: renderHTML('<b>Roof Rack and Ski/Snowboard Carrier:</b> The ski/snowboard carrier lets you hit the slopes this winter with up to four snowboards or six pairs of skis'),      
      p4: renderHTML('<b>Bike Rack:</b> Haul up to two bikes to your favourite trail this winter, <br/>works great for summer biking too'),
      personalize: 'PERSONALIZE YOUR MAZDA',
      personalize_p1: renderHTML('<p>Get your Apple CarPlay integration now.</p>'),
      personalize_p2: renderHTML('<p>Includes hardware and software upgrades.</p>'),
      personalize_p3: renderHTML('<p>Android Auto&trade; compatibility is also available.*</p>'),
      quote_your_tires: 'QUOTE YOUR TIRES',
      tires_title:'Trust only Mazda-approved tires in winter temperatures',
      tires_p1: 'Mazda-Approved Tires are specifically chosen in close collaboration with leading tire manufacturers. They are selected to match your Mazda’s specifications for improved performance, enhanced safety and the highest degree of grip on the road.',
    }
  }
};
