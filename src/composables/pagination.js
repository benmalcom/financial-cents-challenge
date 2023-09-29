import { ref } from 'vue';
// This function provides functions and properties for managing pagination state.
//
// Args:
//   initialPage: The initial page number.
//   totalPages: The total number of pages.
//
// Returns:
//   A dictionary containing the following properties:
//     * currentPage: The current page number.
//     * onPreviousClick: A function to go to the previous page.
//     * onNextClick: A function to go to the next page.
//     * onPageChange: A function to change the current page.

const usePagination = ({ initialPage, totalPages }) => {
  // The current page number.
  const currentPage = ref(initialPage);

  // A function to go to the previous page.
  const onPreviousClick = () => {
    if (currentPage.value <= 1) {
      // The current page is the first page, so there is no previous page.
      return;
    }

    currentPage.value--;
  };

  // A function to go to the next page.
  const onNextClick = () => {
    if (currentPage.value >= totalPages) {
      // The current page is the last page, so there is no next page.
      return;
    }

    currentPage.value++;
  };

  // A function to change the current page.
  const onPageChange = (page) => {
    const newPage = parseInt(page);
    // Validate the new page number.
    if (!Number.isInteger(newPage) || newPage <= 0 || newPage > totalPages) {
      // The new page number is invalid.
      return;
    }

    // Set the current page number to the new page number.
    currentPage.value = newPage;
  };

  // Return the current page number, the onPreviousClick and onNextClick functions,
  // and the onPageChange function.
  return {
    currentPage,
    onPreviousClick,
    onNextClick,
    onPageChange
  };
};

export default usePagination;
