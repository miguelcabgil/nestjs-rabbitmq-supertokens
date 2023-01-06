import { ConfigurableModuleBuilder } from '@nestjs/common';

import { IAuthModuleOptions } from './auth-module-options.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<IAuthModuleOptions>()
    .setClassMethodName('forRoot')
    .build();
