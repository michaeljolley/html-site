import moveStaticFiles from './chutney/moveStaticFiles.js';
import generateHome from './chutney/generateHome.js';
import registerHelpers from './chutney/registerHelpers.js';

async function main() {

  await registerHelpers();
  await moveStaticFiles();

  // build root page
  await generateHome();

  // build blog pages

}

main();
