import renderHTML from 'react-render-html';
export const STRmoreInfo = {
  more_info: {
    default: {
      title: 'MORE INFORMATION',
      p1: `If you have any questions regarding this recall, our Customer Relations representatives are here to help Monday-Friday, 8:30 a.m. to 4:30 p.m., Eastern Standard Time;`,
      p2: renderHTML(`You may also contact us by <a href='https://www.mazda.ca/en/about/contact-us/'>email</a> or call <a href="tel:+18002634680" class='phone'>(800) 263-4680</a>.`),
      p3: renderHTML(`More information regarding the recall can be obtained from Transport Canada by visiting <a href='http://www.tc.gc.ca/eng/motorvehiclesafety/safevehicles-defectinvestigations-1433.html'>http://www.tc.gc.ca/eng/motorvehiclesafety/safevehicles-defectinvestigations-1433.html</a>.`),
      p4: `If Mazda or its dealers do not repair the defect free of charge, you may notify us by contacting Customer Relations.`,
    }
  }
};
