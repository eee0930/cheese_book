export interface ICategory {
  id: string;
  name: string;
}
export interface ICategroyData {
  nation: string;
  categories: ICategory[];
}

const request = async (url: string) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log('❌' + error);
  }
};

export const fetchCategories = async () =>
  (await request(
    `${process.env.PUBLIC_URL}/data/categories.json`
  )) as ICategroyData[];
