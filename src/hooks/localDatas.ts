/**
 *
 * @param storage local storage name
 * @param data local storage data
 */
export const useSaveLocalDatas = (storage: string, data: any) => {
  const localData = useLocalDatas(storage, false);
  let newDataStr;
  if (localData) {
    const newData = [...localData, ...data];
    newDataStr = JSON.stringify(newData);
  } else {
    newDataStr = JSON.stringify(data);
  }
  localStorage.setItem(storage, newDataStr);
};

/**
 *
 * @param storage local storage name
 * @param isOnce use local data only once
 * @returns
 */
export const useLocalDatas = (storage: string, isOnce: boolean) => {
  const localData = localStorage.getItem(storage) as string;
  if (localData) {
    const parcedData = JSON.parse(localData);
    if (isOnce) {
      localStorage.removeItem(storage);
    }
    return parcedData;
  } else {
    return null;
  }
};
