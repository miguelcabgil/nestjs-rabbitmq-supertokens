import { Module } from '@nestjs/common';

import { AuthConfigService } from './auth-config.service';
import { ConfigurableModuleClass } from './auth-module-definition';

@Module({
  imports: [],
  providers: [AuthConfigService],
  exports: [AuthConfigService],
})
export class AuthConfigModule extends ConfigurableModuleClass {}
