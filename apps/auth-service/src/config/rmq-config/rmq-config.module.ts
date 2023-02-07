import { Module } from '@nestjs/common';
import { EnvConfigService } from '../env-config/env-config.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { ExchangeEnum } from './exchange.constant';

@Module({
  imports: [
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      useFactory: (config: EnvConfigService) => ({
        exchanges: [
          {
            name: ExchangeEnum.USER,
            type: 'topic',
          },
        ],
        uri: config.getRabbitmqUri(),
        prefetchCount: 10,
      }),
      inject: [EnvConfigService],
    }),
  ],
  providers: [],
  exports: [RabbitMQModule],
})
export class RmqConfigModule {}
