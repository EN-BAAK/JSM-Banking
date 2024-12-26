import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.NEXT_PUBLIC_PAID_CLIENT_ID,
      'PLAID-SECRET': process.env.NEXT_PUBLIC_PAID_CLIENT_KEY,
    }
  }
})

export const plaidClient = new PlaidApi(configuration);