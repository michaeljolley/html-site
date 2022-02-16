import Handlebars from 'handlebars';
import fs from 'fs';

export default function baseHelper(file) {
  const html = fs.readFileSync(file, 'utf-8')
  const template = Handlebars.compile(html);
  const renderedContent = template();
  return new Handlebars.SafeString(renderedContent);
}
