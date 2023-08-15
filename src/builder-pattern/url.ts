import { IUrl } from './url-interface';

class Url implements IUrl {
  protocol: string;
  hostname: string;
  port: string;
  pathparam: string;
  queryparam: string;

  constructor(builder: UrlBuilder) {
    this.protocol = builder.protocol;
    this.hostname = builder.hostname;
    this.port = builder.port;
    this.pathparam = builder.pathparam;
    this.queryparam = builder.queryparam;
  }
}

export class UrlBuilder {
  protocol: string;
  hostname: string;
  port: string;
  pathparam: string;
  queryparam: string;

  constructor() {
    this.protocol = '';
    this.hostname = '';
    this.port = '';
    this.pathparam = '';
    this.queryparam = '';
  }

  setProtocol(protocol: string): UrlBuilder {
    this.protocol = protocol;
    return this;
  }

  setHostname(hostname: string): UrlBuilder {
    this.hostname = hostname;
    return this;
  }

  setPort(port: string): UrlBuilder {
    this.port = port;
    return this;
  }

  setPathparam(pathparam: string): UrlBuilder {
    this.pathparam = pathparam;
    return this;
  }

  setQueryparam(queryparam: string): UrlBuilder {
    this.queryparam = queryparam;
    return this;
  }

  build(): Url {
    return new Url(this);
  }
}
