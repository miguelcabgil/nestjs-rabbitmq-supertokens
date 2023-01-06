import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from './env.interface';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private readonly configService: ConfigService) {}

  getAppPort(): string {
    return this.configService.getOrThrow('app.port');
  }

  getGoogleClientId(): string {
    return this.configService.getOrThrow('google.clientId');
  }
  getGoogleClientSecret(): string {
    return this.configService.getOrThrow('google.clientSecret');
  }
  getGoogleScopes(): string[] {
    return this.configService.getOrThrow('google.scopes');
  }

  getRabbitmqPort(): number {
    return this.configService.getOrThrow('rabbitmq.port');
  }
  getRabbitmqHostname(): string {
    return this.configService.getOrThrow('rabbitmq.hostname');
  }
  getRabbitmqPassword(): string {
    return this.configService.getOrThrow('rabbitmq.password');
  }
  getRabbitmqQueue(): string {
    return this.configService.getOrThrow('rabbitmq.queue');
  }
  getRabbitmqUsername(): string {
    return this.configService.getOrThrow('rabbitmq.username');
  }

  getSupertokensApiKey(): string {
    return this.configService.getOrThrow('supertokens.apiKey');
  }

  getSupertokensApiDomain(): string {
    return this.configService.getOrThrow('supertokens.apiDomain');
  }

  getSupertokensAppName(): string {
    return this.configService.getOrThrow('supertokens.appName');
  }

  getSupertokensConnectionURI(): string {
    return this.configService.getOrThrow('supertokens.connectionURI');
  }

  getSupertokensWebsiteDomain(): string {
    return this.configService.getOrThrow('supertokens.websiteDomain');
  }
}
