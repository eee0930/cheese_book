import axios from 'axios';
import * as cheerio from 'cheerio';

const VIEWER_ROOT = process.env.REACT_APP_ALADIN_VIEWER;

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

export const fetchViewerImagesById = async (id: number) => {
  return await getViewerHTMLById(id).then((html) => {
    if (html) {
      const $ = cheerio.load(html.data, { xmlMode: false });
      const $sections = $('#addClass > .letslook_book > section');
      if ($sections.text()) {
        const images: any[][] = [];
        $sections.each(function () {
          const leftpage = $(this).find('.leftpage img').attr('src');
          const rightpage = $(this).find('.rightpage img').attr('src');
          const middlepage = $(this).find('.bookspine img').attr('src');
          if (middlepage) {
            images.push([leftpage, rightpage, middlepage]);
          } else {
            images.push([leftpage, rightpage]);
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

const getScriptImages = (data: string) => {
  const dataSplit = data.split('var jsonArray = ')[1].split(']')[0] + ']';
  const parcedData = JSON.parse(dataSplit);
  const images: string[] = [];
  parcedData.forEach((parced: any) => {
    images.push(parced.imageUrl + parced.imageFile);
  });
  return images;
};
