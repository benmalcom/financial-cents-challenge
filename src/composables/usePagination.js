// usePagination.js
import { ref } from 'vue';
const usePagination = ({ initialPage, totalPages }) => {
  const currentPage = ref(initialPage);

  const onPreviousClick = () => {
    if (currentPage.value <= 1) return;
    currentPage.value--;
  };

  const onNextClick = () => {
    if (currentPage.value >= totalPages) return;
    currentPage.value++;
  };

  const onPageChange = (event) => (currentPage.value = Number(event.target.value));

  return {
    currentPage,
    onPreviousClick,
    onNextClick,
    onPageChange
  };
};

export default usePagination;
