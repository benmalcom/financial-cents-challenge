import { render, screen, fireEvent } from '@testing-library/vue';
import Pagination from './Pagination.vue';

describe('Pagination', () => {
  it('Renders without crash ', async () => {
    render(Pagination, {
      props: {
        currentPage: 1,
        totalPages: 6
      }
    });

    expect(screen.getByText(/1/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Previous' })).toHaveAttribute('disabled');
  });

  it('Sets new page on click of Next/Previous ', async () => {
    const wrapper = render(Pagination, {
      props: {
        currentPage: 1,
        totalPages: 6
      }
    });
    expect(screen.getByRole('combobox')).toHaveValue('1');
    await fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    console.log('Insect ', wrapper.emitted()['page-change']);
  });
});
