import { getTramApiAuthClient } from '@tram/tram-common-api-client';
import { Logger } from '@tram/tram-common-logging';
import { getEnvironmentVariable } from '@tram/tram-common-utils';

const API_KEY = getEnvironmentVariable('API_KEY');
const BASE_URL = getEnvironmentVariable('API_BASE_URL');
const tokenizationClient = getTramApiAuthClient(BASE_URL);

export const updateTokensInSQL = async () => {
  Logger.info(`TokenClient: Request to update tokens in SQL`);

  try {
    await tokenizationClient.post(
      '/v1/backfill/tokens',
      {},
      { headers: { 'x-tram-api-key': API_KEY } }
    );
  } catch (error) {
    Logger.error(
      `TokenClient: Error while updating tokens in SQL with error: ${error}`
    );
    throw new Error(`Error while updating tokens in SQL with error: ${error}`);
  }
};
