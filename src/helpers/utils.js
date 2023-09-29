export const getRandomAmount = (min = 100, max = 10000) => {
  const randomDecimal = Math.random() * (max - min) + min;
  return Math.round(randomDecimal * 100) / 100;
};

export const getRandomInvoicePaymentStatus = () => {
  const paymentStatusOptions = ['Paid', 'Overdue'];
  const randomIndex = Math.floor(Math.random() * paymentStatusOptions.length);
  return paymentStatusOptions[randomIndex];
};

export const isValidInvoice = (invoice) => {
  // Validate the user object
  if (!invoice.user) {
    return false;
  }

  if (!invoice.user.first_name) {
    return false;
  }

  if (!invoice.user.last_name) {
    return false;
  }

  if (!invoice.user.email) {
    return false;
  }

  // Validate the amount
  if (!invoice.amount) {
    return false;
  }

  if (typeof invoice.amount !== 'number') {
    return false;
  }

  // Validate the status
  if (!invoice.status) {
    return false;
  }

  if (!['Paid', 'Overdue'].includes(invoice.status)) {
    return false;
  }

  // Validate the due date
  if (!invoice.due_date) {
    return false;
  }

  if (!(invoice.due_date instanceof Date)) {
    return false;
  }

  return true;
};
