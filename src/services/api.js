import { datas } from "../datas/datas.js";

// Fetch all apartments from services (only id, title and cover properties)
export const fetchApartments = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve(
          datas.map((e) => {
            const { id, title, cover } = e;
            return {
              id: id,
              title: title,
              cover: cover,
            };
          })
        ),
      200
    );
  });
};

// Fetch all properties of an apartment by its id
export const fetchApartment = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve(
          datas.find((e) => {
            return e.id === id;
          })
        ),
      200
    );
  });
};
