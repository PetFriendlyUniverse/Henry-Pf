const queryAdapter = {
  sr: "name",
  w: "weigth",
  sz: "size",
  bd: "bread",
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
    price,
    description,
    stock,
    specie,
    breed,
    storeId,
    weight,
    color,
    size,
  } = data;
  const requiredData = {
    name,
    price,
    description,
    stock,
    specie,
    breed,
    StoreId: storeId,
  };
  const extraData = { weight, color, size };
  return { requiredData, extraData };
};

module.exports = { queryMarker, pagination, splitData };
