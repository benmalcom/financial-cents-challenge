import { render, screen, fireEvent } from '@testing-library/vue';
import InvoiceCard from './InvoiceCard.vue';
import { SAMPLE_INVOICE } from './data';

const sampleInvoice = SAMPLE_INVOICE;

describe('InvoiceCard', () => {
  it('Renders without crash ', async () => {
    render(InvoiceCard, {
      props: {
        invoice: sampleInvoice
      }
    });

    expect(await screen.getByText(/John Doe/)).toBeInTheDocument();
    expect(await screen.getByText(/Paid/)).toBeInTheDocument();
    expect(await screen.getByText(/\$12,000.00/)).toBeInTheDocument();
    expect(await screen.getByText(/October 15, 2023/)).toBeInTheDocument();
  });

  it('Contains Dropdown Icon ', async () => {
    render(InvoiceCard, {
      props: {
        invoice: sampleInvoice
      }
    });

    expect(await screen.getByTestId('dropdown-icon')).toBeInTheDocument();
  });

  it('Displays dropdown icon on click ', async () => {
    render(InvoiceCard, {
      props: {
        invoice: sampleInvoice
      }
    });

    expect(await screen.getByTestId('dropdown-icon')).toBeInTheDocument();
    await fireEvent.click(screen.getByTestId('dropdown-icon'));
    expect(await screen.getByText(/View/)).toBeInTheDocument();
    expect(await screen.getByText(/Edit/)).toBeInTheDocument();
    expect(await screen.getByText(/Delete/)).toBeInTheDocument();

    await fireEvent.click(screen.getByTestId('dropdown-icon'));
    expect(await screen.queryByText(/View/)).not.toBeInTheDocument();
    expect(await screen.queryByText(/Edit/)).not.toBeInTheDocument();
    expect(await screen.queryByText(/Delete/)).not.toBeInTheDocument();
  });
});
