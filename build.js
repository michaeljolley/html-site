// import moveStaticFiles from './chutney/moveStaticFiles.js';
// import registerPages from './chutney/registerPages.js';
// import registerHelpers from './chutney/registerHelpers.js';
// import gatherData from './chutney/gatherData.js';

// async function main() {

//   // Get data to be used across the entire site.
//   const data = await gatherData();

//   await registerHelpers();
//   await registerPages(data);
//   await moveStaticFiles();
// }

// main();


import chutney from 'chutney';


chutney();