import { getRandomDateInCurrentYear } from '@/factories/date';
import { getStaticUser } from '@/factories/user';
import { getRandomAmount, getRandomInvoicePaymentStatus } from '@/helpers/utils';

export const getRandomInvoice = (user = null) => {
  if (!user) {
    user = getStaticUser();
  }

  return {
    user,
    amount: getRandomAmount(),
    status: getRandomInvoicePaymentStatus(),
    due_date: getRandomDateInCurrentYear()
  };
};
