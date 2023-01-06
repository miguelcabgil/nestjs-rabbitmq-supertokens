import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
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
  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [
        {
          port: config.getRabbitmqPort(),
          hostname: config.getRabbitmqHostname(),
          password: config.getRabbitmqPassword(),
          username: config.getRabbitmqUsername(),
        },
      ],
      queue: config.getRabbitmqQueue(),
      queueOptions: {
        durable: true,
      },
      noAck: false,
      prefetchCount: 1,
    },
  });
  await Promise.all([
    app.startAllMicroservices(),
    app.listen(process.env.PORT ?? 7777),
  ]);
})().catch((e) => Logger.error(e));
