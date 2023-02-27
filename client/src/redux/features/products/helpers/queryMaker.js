const queryAdapter = {
  name: "sr",
  Breeds: "bd",
  Brands: "brd",
  Weight: "w",
  Species: "sp",
  Size: "sz",
  sortBy: "sortBy",
  sortType: "sortType",
};

// page: page, pq: productXpage
// sortBy, sortType; asc || des,    !! solo funciona si sortBy viene antes que sortType
// gt: mayorQue, lt: menorQue <== (precios)

//  /products?pq=12&page=1

const queryMarker = (productsPerPage, currentPage, setFilters) => {
  let query = `?pq=${productsPerPage}&page=${currentPage}`;

  for (let property in setFilters) {
    if (property !== "priceRange")
      query += `&${queryAdapter[property]}=${setFilters[property]}`;
  }
  if (setFilters.priceRange) {
    query += `&gt=${setFilters.priceRange[0]}&lt=${setFilters.priceRange[1]}`;
  }
  return query;
};
export { queryMarker };
