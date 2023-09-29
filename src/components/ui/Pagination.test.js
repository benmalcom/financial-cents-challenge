import { usePagination } from '@/composables';

describe('usePagination', () => {
  it('should return the initial page number', () => {
    const composable = usePagination({ initialPage: 1, totalPages: 10 });

    expect(composable.currentPage.value).toBe(1);
  });

  it('should go to the previous page', () => {
    const composable = usePagination({ initialPage: 2, totalPages: 10 });

    composable.onPreviousClick();

    expect(composable.currentPage.value).toBe(1);
  });

  it('should not go to the previous page if the current page is the first page', () => {
    const composable = usePagination({ initialPage: 1, totalPages: 10 });

    composable.onPreviousClick();

    expect(composable.currentPage.value).toBe(1);
  });

  it('should go to the next page', () => {
    const composable = usePagination({ initialPage: 1, totalPages: 10 });

    composable.onNextClick();

    expect(composable.currentPage.value).toBe(2);
  });

  it('should not go to the next page if the current page is the last page', () => {
    const composable = usePagination({ initialPage: 10, totalPages: 10 });

    composable.onNextClick();

    expect(composable.currentPage.value).toBe(10);
  });

  it('should change the current page', () => {
    const composable = usePagination({ initialPage: 1, totalPages: 10 });

    composable.onPageChange(3);

    expect(composable.currentPage.value).toBe(3);
  });

  it('should not change the current page if the new page number is invalid', () => {
    const composable = usePagination({ initialPage: 1, totalPages: 10 });

    composable.onPageChange(-1);
    composable.onPageChange(11);
    composable.onPageChange(NaN);

    expect(composable.currentPage.value).toBe(1);
  });
});
