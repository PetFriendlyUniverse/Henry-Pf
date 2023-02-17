const queryAdapter = {
  name: "sr",
  Breeds: "bd",
  Brands: "brd",
  Weight: "w",
  Species: "sp",
  Size: "sz",
  // c: "color",
};

// page: page, pq: productXpage, sortby, sortType; asc || des,    !! solo funciona si sortBy viene antes que sortType
//minP: "minPrice" maxP: 'maxPrice'

//  /products?pq=12&page=1

const queryMarker = (productsPerPage, currentPage, setFilters) => {
  let query = `?pq=${productsPerPage}&page=${currentPage}`;
  for (let property in setFilters) {
    query += `&${queryAdapter[property]}=${setFilters[property]}`;
  }
  return query;
};
export { queryMarker };
