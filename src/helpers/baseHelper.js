import Handlebars from 'handlebars';

export default function baseHelper(html, data) {
  const template = Handlebars.compile(html);
  const renderedContent = template(data);
  return new Handlebars.SafeString(renderedContent);
}
