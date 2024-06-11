import { ChangeEvent } from "react";
import { Container } from "./style";

type PaginationProps = {
  page: number;
  step?: number;
  totalPages: number;
  prevPage: () => void;
  nextPage: () => void;
  changeLimit: (number: number) => void;
};

export function Pagination({
  page,
  step = 5,
  changeLimit,
  prevPage,
  nextPage,
  totalPages,
}: PaginationProps) {
  function handleChangeLimit(event: ChangeEvent<HTMLSelectElement>) {
    changeLimit(Number(event.target.value));
  }
  return (
    <Container>
      <div className="limitBox">
        <span>Quantidade por página</span>
        <select defaultValue={step * 2} onChange={handleChangeLimit}>
          <option value={step * 1}>{step * 1}</option>
          <option value={step * 2}>{step * 2}</option>
          <option value={step * 3}>{step * 3}</option>
          <option value={step * 4}>{step * 4}</option>
        </select>
      </div>

      <div className="pageNumbers">
        <span>{totalPages ? page : "-"}</span>
        <span>/</span>
        <span>{totalPages || "-"}</span>
      </div>

      <div className="paginationButtons">
        <button onClick={prevPage}>
          <i className="material-icons">arrow_back_ios</i>
        </button>

        <button onClick={nextPage}>
          <i className="material-icons">arrow_forward_ios</i>
        </button>
      </div>
    </Container>
  );
}
