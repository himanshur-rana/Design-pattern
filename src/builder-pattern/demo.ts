import { UrlBuilder } from './url';
import { IUrl } from './url-interface';

const url: IUrl = new UrlBuilder()
  .setProtocol('https://')
  .setHostname('localhost')
  .setPort('5000')
  .build();

console.log(url);
