const queryAdapter = {
  sr: "name",
  w: "weigth",
  sz: "size",
  bd: "bread",
  sp: "specie",
  //bd: "brand",
};

// page: page, pq: productXpage, sortby, sortType; asc || des,
//minP: "minPrice" maxP: 'maxPrice'
const queryMarker = (query) => {
  if (!Object.keys(query)) return null;

  const paginationParams = {};
  const where = {};
  const order = [[]];
  const prices = [];
  for (const key in query) {
    if (["pq", "page"].includes(key)) {
      paginationParams[queryAdapter[key]] = query[key];
    } else if (key === "sortBy" || key === "sortType") {
      order[0].push(query[key]);
    } else if (key === "minP" || key === "maxP") {
      prices.push(query[key]);
    } else {
      where[queryAdapter[key]] = query[key];
    }
  }
  return { where, order, paginationParams, prices };
};

const pagination = (all, { pq, page }) => {
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
