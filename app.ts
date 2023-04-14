import { Logger } from '@tram/tram-common-logging';
import { runCron } from '@tram/tram-base-cron';
import { updateTokensInSQL } from './clients/TokenClient';

async function cronLogic() {
  Logger.info('Starting updating tokens in sql once Job');

  await updateTokensInSQL();
  
  Logger.info('Successfully finished updating tokens in sql once Job');
}

(async function () {
  await runCron(cronLogic);
})();
