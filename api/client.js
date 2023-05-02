
const url = "https://localhost:7276"

export const getItems = async () => {
  try {
    const response = await fetch(`${url}/items`);
    const json = await response.json();
    return json.items;
  }
  catch (error) {
    console.error(error);
  }
};


export const getItem = async (id) => {
  try {
    const response = await fetch(`${url}/item/${id}`);
    const json = await response.json();
    return json.item;
  }
  catch (error) {
    console.error(error);
  }
};