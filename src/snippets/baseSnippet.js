import Handlebars from 'handlebars';
import fs from 'fs/promises';

export default async function baseHelper(file) {
  const html = await fs.readFile(file, 'utf-8');
  const template = Handlebars.compile(html);
  const renderedContent = template();
  return new Handlebars.SafeString(renderedContent);
}
