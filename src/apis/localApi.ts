const request = async (url: string) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log('❌' + error);
  }
};

export interface ICategory {
  id: string;
  name: string;
}
export interface ICategroyData {
  nation: string;
  categories: ICategory[];
}
export const fetchCategories = async () =>
  (await request(
    `${process.env.PUBLIC_URL}/data/categories.json`
  )) as ICategroyData[];

export interface ICheeseMenus {
  name: string;
  icon: string;
  path: string;
}
export const fetchCheeseMenus = async () =>
  (await request(
    `${process.env.PUBLIC_URL}/data/menuLink.json`
  )) as ICheeseMenus[];
