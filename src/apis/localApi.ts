interface ICategory {
  [key: string]: string;
}
export interface ICategories {
  Korea: ICategory;
  Overseas: ICategory;
}

const request = async (url: string) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    console.log('❌' + e);
  }
};

export const fetchCategories = async () =>
  (await request(
    `${process.env.PUBLIC_URL}/data/categories.json`
  )) as ICategories;
