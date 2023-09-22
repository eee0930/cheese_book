import axios from 'axios';
import * as cheerio from 'cheerio';

const VIEWER_ROOT = process.env.REACT_APP_ALADIN_VIEWER;
const DETAIL_ROOT = process.env.REACT_APP_ALADIN_DETAIL;

/**
 * book viewer 이미지 가져오기
 * @param id
 * @returns
 */
const getViewerHTMLById = async (id: number) => {
  try {
    return await axios.get(`${VIEWER_ROOT}?ItemId=${id}`);
  } catch (error) {
    console.log('❌', error);
  }
};

interface IParcedImage {
  imageUrl: string;
  imageFile: string;
}
const getScriptImages = (data: string) => {
  if (data.includes('var jsonArray = [')) {
    const dataSplit = data.split('var jsonArray = [')[1].split(']')[0];
    const parcedData = JSON.parse('[' + dataSplit + ']');
    const images: string[] = [];
    parcedData.forEach((parced: IParcedImage) => {
      images.push(parced.imageUrl + parced.imageFile);
    });
    return images;
  } else {
    return null;
  }
};

export type ICoverImages<T> = T;
export const fetchViewerImagesById = async (id: number) => {
  return await getViewerHTMLById(id).then((html) => {
    if (html) {
      const $ = cheerio.load(html.data, { xmlMode: false });
      const $sections = $('#addClass > .letslook_book > section');
      if ($sections.text()) {
        const images: ICoverImages<string[][]> = [];
        $sections.each(function () {
          const leftpage = $(this).find('.leftpage img').attr('src');
          const rightpage = $(this).find('.rightpage img').attr('src');
          const middlepage = $(this).find('.bookspine img').attr('src');
          if (leftpage && rightpage) {
            if (middlepage) {
              images.push([leftpage, rightpage, middlepage]);
            } else {
              images.push([leftpage, rightpage]);
            }
          }
        });
        return images;
      } else {
        let source = '';
        $('script').each(function (i) {
          if (i === 4) {
            source = $(this).text();
          }
        });
        return getScriptImages(source);
      }
    }
  });
};

/**
 * book detail 이미지 가져오기
 * @param id
 * @returns
 */
const getDetailHTMLById = async (id: number) => {
  try {
    return await axios.get(`${DETAIL_ROOT}?ItemId=${id}`);
  } catch (error) {
    console.log('❌', error);
  }
};
export const fetchDetailImagesById = async (id: number) => {
  return await getDetailHTMLById(id).then((html) => {
    if (html) {
      const $ = cheerio.load(html.data);
      const $imageContainer = $('#divFilpImg');
      const front = $imageContainer.find('#CoverMainImage').attr('src');
      const side = $imageContainer.find('.c_left img').attr('src');
      return [front, side];
    }
  });
};

export const getDetailImagesByIsbnId = (isbn: string, itemId: number) => {
  const itemIdStr = String(itemId);
  const [PATH_ROOT, COVER, SPIN] = [
    'https://image.aladin.co.kr/product/',
    'cover500',
    'spineflip',
  ];
  const defaultPath = [
    `${PATH_ROOT}${itemIdStr.slice(0, 5)}/${itemIdStr.slice(5, 7)}/`,
    '_1.jpg',
  ];
  const mainCoverPath = [
    `${defaultPath[0]}${COVER}/${isbn}${defaultPath[1]}`,
    `${defaultPath[0]}${SPIN}/${isbn}_d.jpg`,
  ];
  return mainCoverPath;
};

export const getViewerImagesByIsbnId = (isbn: string, itemId: number) => {
  const itemIdStr = String(itemId);
  const [PATH_ROOT, COVER] = [
    'https://image.aladin.co.kr/product/',
    'letslook',
  ];
  const REPLACE = 'HWAYEON';
  const defaultPath = `${PATH_ROOT}${itemIdStr.slice(0, 5)}/${itemIdStr.slice(
    5,
    7
  )}/${COVER}/${isbn}${REPLACE}l.jpg`;
  const mainCoverPath = [
    defaultPath.replace(REPLACE, '_f'),
    defaultPath.replace(REPLACE, '_b'),
  ];
  const pagesPath = Array.from(Array(9), (_, i) => {
    const [idx1, idx2] = [(i + 1) * 2 - 1, (i + 1) * 2];
    return [
      defaultPath.replace(REPLACE, `_t${idx1}`),
      defaultPath.replace(REPLACE, `_t${idx2}`),
    ];
  });
  return [mainCoverPath, ...pagesPath];
};
