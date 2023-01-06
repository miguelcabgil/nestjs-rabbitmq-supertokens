import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthConfigModule } from '../config/auth-config/auth-config.module';
import { EnvConfigService } from '../config/env-config/env-config.service';
import { AuthMiddleware } from '../config/auth-config/auth.middleware';

@Module({
  imports: [
    AuthConfigModule.forRootAsync({
      useFactory: (config: EnvConfigService) => ({
        appInfo: {
          appName: config.getSupertokensAppName(),
          apiDomain: config.getSupertokensApiDomain(),
          websiteDomain: config.getSupertokensWebsiteDomain(),
        },
        google: {
          clientId: config.getGoogleClientId(),
          clientSecret: config.getGoogleClientSecret(),
          scopes: config.getGoogleScopes(),
        },
        apiKey: config.getSupertokensApiKey(),
        connectionURI: config.getSupertokensConnectionURI(),
      }),
      inject: [EnvConfigService],
    }),
  ],
  providers: [EnvConfigService],
  exports: [AuthConfigModule],
  controllers: [],
})
export class SupertokensModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
