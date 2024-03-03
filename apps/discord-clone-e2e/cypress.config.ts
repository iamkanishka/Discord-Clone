import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run discord-clone:serve:development',
        production: 'nx run discord-clone:serve:production',
      },
      ciWebServerCommand: 'nx run discord-clone:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
