import { v4 as uuid } from "uuid";
import categoryList from "../../database/categories.json";
import { writeDatabase } from "../../database/write";

let list = categoryList;

export const getCategoryIndex = (request, response) => {
  response.json(list);
};

export const postCategoryStore = (request, response) => {
  const { name } = request.body;
  const category = {
    id: uuid(),
    name,
  };
  list.push(category);
  writeDatabase("categories.json", list);
  response.json(category);
};

export const getCategoryShow = (request, response) => {
  const { id } = request.params;
  response.json(list.find((item) => item.id === id));
};

export const putCategoryUpdate = (request, response) => {
  const { id } = request.params;
  const { name } = request.body;
  const category = {
    id,
    name,
  };
  list = list.map((item) => {
    if (item.id === id) {
      return category;
    }
    return item;
  });
  writeDatabase("categories.json", list);
  response.json(category);
};

export const deleteCategoryDestroy = (request, response) => {
  const { id } = request.params;
  const index = list.findIndex((item) => item.id === id);
  if (index !== undefined) {
    list.splice(index, 1);
  }
  writeDatabase("categories.json", list);
  response.json({ message: "Ok!" });
};
