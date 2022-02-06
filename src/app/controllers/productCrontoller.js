import { v4 as uuid } from "uuid";
import productList from "../../database/products.json";
import { writeDatabase } from "../../database/write";

let list = productList;

export const getProductIndex = (request, response) => {
  const { categoryId } = request.query;
  if (categoryId) {
    const filtrado = list.filter((item) => item.categoryId === categoryId);
    return response.json(filtrado);
  }
  response.json(list);
};

export const postProductStore = (request, response) => {
  const { name, price, image, categoryId } = request.body;
  const product = {
    id: uuid(),
    name,
    price,
    image,
    categoryId,
  };
  list.push(product);
  writeDatabase("products.json", list);
  response.json(product);
};

export const getProductShow = (request, response) => {
  const { id } = request.params;
  response.json(list.find((item) => item.id === id));
};

export const putProductUpdate = (request, response) => {
  const { id } = request.params;
  const { name, price, image, categoryId } = request.body;
  const product = {
    id,
    name,
    price,
    image,
    categoryId,
  };
  list = list.map((item) => {
    if (item.id === id) {
      return product;
    }
    return item;
  });
  writeDatabase("products.json", list);
  response.json(product);
};

export const deleteProductDestroy = (request, response) => {
  const { id } = request.params;
  const index = list.findIndex((item) => item.id === id);
  if (index !== undefined) {
    list.splice(index, 1);
  }
  writeDatabase("products.json", list);
  response.json({ message: "Ok!" });
};
