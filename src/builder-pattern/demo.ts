import { Url, UrlBuilder } from './url';

const url: Url = new UrlBuilder()
  .setProtocol('https://')
  .setHostname('localhost')
  .setPort('5000')
  .build();

console.log('url generated----------->');
console.log(url.protocol + url.hostname + url.port);
