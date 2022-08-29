import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pokemons, pokelimit, setOffSet, offSet }) => {
  const { count } = pokemons;
  const Pcount = Math.ceil(count / pokelimit);
  return (
    <div>
      <div className="mt-5 sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p class="text-sm  text-gray-700">
            Showing
            <span class="font-medium"> {offSet} </span>
            to
            <span class="font-medium"> {pokelimit} </span>
            of
            <span class="font-medium"> {count} </span>
            results
          </p>
        </div>
        <ReactPaginate
          pageCount={Pcount}
          pageRange={2}
          marginPagesDisplayed={4}
          onPageChange={(selectedObject) =>
            setOffSet(selectedObject.selected * pokelimit)
          }
          containerClassName={
            "relative z-0 inline-flex rounded-md shadow-md -space-x-px"
          }
          previousLinkClassName={
            "bg-white border-gray-300 text-gray-500 hover:bg-gray-100  md:inline-flex relative items-center px-4 py-2 border text-md font-medium"
          }
          breakClassName={
            "bg-white border-gray-300 text-gray-500 hover:bg-gray-100  md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
          }
          nextLinkClassName={
            "bg-white border-gray-300 text-gray-500 hover:bg-gray-100  md:inline-flex relative items-center px-4 py-2 border text-md font-medium"
          }
          pageClassName={
            "bg-white-100  border-gray-300 text-gray-500 hover:bg-gray-100  md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
          }
          disabledClassName={"opacity-60 "}
          activeClassName={"border-solid border-2 border-purple-600"}
        />
      </div>
    </div>
  );
};

export default Pagination;
