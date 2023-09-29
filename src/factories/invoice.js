import { getRandomDateInCurrentYear } from '@/factories/date';
import { getRandomUser } from '@/factories/user';
import { getRandomAmount, getRandomInvoicePaymentStatus } from '@/helpers/utils';

export const getRandomInvoice = (user = null) => {
  if (!user) {
    user = getRandomUser();
  }

  return {
    user,
    amount: getRandomAmount(),
    status: getRandomInvoicePaymentStatus(),
    due_date: getRandomDateInCurrentYear()
  };
};
