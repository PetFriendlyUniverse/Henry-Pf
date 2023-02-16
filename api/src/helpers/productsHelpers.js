const queryAdapter = {
  sr: "name",
  w: "weigth",
  sz: "size",
  bd: "breed",
  sp: "specie",
  c: "color",
  bd: "brand",
};

// page: page, pq: productXpage, sortby, sortType; asc || des,    !! solo funciona si sortBy viene antes que sortType
//minP: "minPrice" maxP: 'maxPrice'
const queryMarker = (query) => {
  const paginationParams = {};
  const where = {};
  const order = [[]];
  const prices = [];
  for (const key in query) {
    if (["pq", "page"].includes(key)) {
      paginationParams[key] = query[key];
    } else if (key === "sortBy" || key === "sortType") {
      order[0].push(query[key]);
    } else if (key === "minP" || key === "maxP") {
      prices.push(query[key]);
    } else if (key == "price" || key == "priceCondition") {
      //price=100&priceCondition=gt
      where[key] = query[key];
    } else {
      where[queryAdapter[key]] = query[key];
    }
  }
  const paramsConsult = {};

  if (Object.keys(where).length > 0) paramsConsult.where = where;
  if (order[0].length > 0) paramsConsult.order = order;
  if (prices.length > 0) paramsConsult.prices = prices;

  if (Object.keys(paramsConsult).length == 0)
    return { paramsConsult: null, paginationParams };
  return { paramsConsult, paginationParams };
};

const pagination = (all, { pq, page }) => {
  // console.log("pagination", pq, page);
  const lastIndex = pq * page;
  const firstIndex = lastIndex - pq;
  const totalPages = Math.ceil(all.length / pq);
  return [all.slice(firstIndex, lastIndex), totalPages];
};

const splitData = (data) => {
  const {
    name,
    img,
    price,
    description,
    stock,
    specie,
    breed,
    brand,
    weight,
    color,
    size,
    storeId,
  } = data;
  const requiredData = {
    name,
    price,
    description,
    stock,
    specie,
    breed,
    brand,
    StoreId: storeId,
  };
  const extraData = { weight, color, size, img }; // despues pondremos el img sea obligatorio
  return { requiredData, extraData };
};

const addFixedsFilters = (filters) => {
  filters.push(["Size", [{ id: "small" }, { id: "medium" }, { id: "large" }]]);
  filters.push(["Weight", [{ id: "5" }, { id: "10" }, { id: "15" }]]);
};

module.exports = { queryMarker, pagination, splitData, addFixedsFilters };
