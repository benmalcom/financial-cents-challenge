import usePagination from './pagination';

describe('usePagination', () => {
  it('should initialize currentPage with the provided initialPage', () => {
    const initialPage = 3;
    const totalPages = 10;
    const { currentPage } = usePagination({ initialPage, totalPages });
    expect(currentPage.value).toBe(initialPage);
  });

  it('should increment currentPage when onPreviousClick is called', () => {
    const initialPage = 2;
    const totalPages = 10;
    const { currentPage, onPreviousClick } = usePagination({ initialPage, totalPages });
    onPreviousClick();
    expect(currentPage.value).toBe(initialPage - 1);
  });

  it('should not decrement currentPage below 1 when onPreviousClick is called', () => {
    const initialPage = 1;
    const totalPages = 10;
    const { currentPage, onPreviousClick } = usePagination({ initialPage, totalPages });
    onPreviousClick();
    expect(currentPage.value).toBe(1);
  });

  it('should increment currentPage when onNextClick is called', () => {
    const initialPage = 2;
    const totalPages = 10;
    const { currentPage, onNextClick } = usePagination({ initialPage, totalPages });
    onNextClick();
    expect(currentPage.value).toBe(initialPage + 1);
  });

  it('should not increment currentPage beyond totalPages when onNextClick is called', () => {
    const initialPage = 10;
    const totalPages = 10;
    const { currentPage, onNextClick } = usePagination({ initialPage, totalPages });
    onNextClick();
    expect(currentPage.value).toBe(totalPages);
  });

  it('should change currentPage to the selected page when onPageChange is called with a valid page number', () => {
    const initialPage = 3;
    const totalPages = 10;
    const { currentPage, onPageChange } = usePagination({ initialPage, totalPages });
    onPageChange('5');
    expect(currentPage.value).toBe(5);
  });

  it('should not change currentPage when onPageChange is called with an invalid page number', () => {
    const initialPage = 3;
    const totalPages = 10;
    const { currentPage, onPageChange } = usePagination({ initialPage, totalPages });
    onPageChange({ target: { value: 'invalid' } });
    expect(currentPage.value).toBe(initialPage);
  });
});
