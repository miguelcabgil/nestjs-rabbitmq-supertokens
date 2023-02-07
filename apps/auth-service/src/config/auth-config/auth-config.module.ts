import { Module } from '@nestjs/common';

import { AuthConfigService } from './auth-config.service';
import { ConfigurableModuleClass } from './auth-module-definition';
import { RmqConfigModule } from '../rmq-config/rmq-config.module';

@Module({
  imports: [RmqConfigModule],
  providers: [AuthConfigService],
  exports: [AuthConfigService],
})
export class AuthConfigModule extends ConfigurableModuleClass {}
