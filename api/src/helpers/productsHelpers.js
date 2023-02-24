const queryAdapter = {
  sr: "name",
  w: "weight",
  sz: "size",
  bd: "breed",
  sp: "specie",
  c: "color",
  brd: "brand",
};

// page: page, pq: productXpage
// sortBy, sortType; asc || des,    !! solo funciona si sortBy viene antes que sortType
// gt: mayorQue, lt: menorQue <== (precios)

const queryMarker = (query) => {
  const paginationParams = {};
  const where = {};
  const order = [[]];
  // const prices = [];
  const { gt, lt } = query;
  const pricesBetween = (gt || lt) && [
    parseInt(gt) || 0,
    parseInt(lt) || Infinity,
  ]; // si viene gt o lt  se setean los valores [Op.between]: [min, max]
  for (const key in query) {
    if (["pq", "page"].includes(key)) {
      paginationParams[key] = query[key];
    } else if (key === "sortBy" || key === "sortType") {
      order[0].push(query[key]);
    } else {
      if (queryAdapter[key]) where[queryAdapter[key]] = query[key];
    }
  }
  const paramsConsult = {};

  if (Object.keys(where).length > 0) paramsConsult.where = where;
  if (order[0].length > 0) paramsConsult.order = order;
  if (pricesBetween) paramsConsult.pricesBetween = pricesBetween;
  console.log(paramsConsult);

  if (Object.keys(paramsConsult).length == 0) return { paginationParams };
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
  filters.push([
    "Size",
    [{ id: "chico" }, { id: "mediano" }, { id: "grande" }],
  ]);
  filters.push([
    "Weight",
    [{ id: "5" }, { id: "10" }, { id: "15" }, { id: "20" }],
  ]);
};

module.exports = { queryMarker, pagination, splitData, addFixedsFilters };
