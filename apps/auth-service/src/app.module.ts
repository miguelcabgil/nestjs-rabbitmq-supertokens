import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SupertokensModule } from './supertokens/supertokens.module';
import { EnvConfigModule } from './config/env-config/env-config.module';

@Module({
  imports: [EnvConfigModule, SupertokensModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
