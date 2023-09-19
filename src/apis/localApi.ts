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

export const fetchTasteResult = () =>
  request(`${process.env.PUBLIC_URL}/data/cheeseTaste.json`);
