import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvConfigService } from './config/env-config/env-config.service';
import supertokens from 'supertokens-node';
import { SupertokensFilter } from './common/filters/supertokens.filter';

(async () => {
  const app = await NestFactory.create(AppModule);
  const config = app.get<EnvConfigService>(EnvConfigService);
  app.enableCors({
    origin: [config.getSupertokensWebsiteDomain()],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });
  app.useGlobalFilters(new SupertokensFilter());
  await app.listen(process.env.PORT ?? 7777);
})().catch((e) => Logger.error(e));
