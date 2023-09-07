import axios from 'axios';
import * as cheerio from 'cheerio';

const VIEWER_ROOT = process.env.REACT_APP_ALADIN_VIEWER;
const DETAIL_ROOT = process.env.REACT_APP_ALADIN_DETAIL;
const BANNER_ROOT = process.env.REACT_APP_GYOBO_MAIN;

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

const getScriptImages = (data: string) => {
  if (data.includes('var jsonArray = [')) {
    const dataSplit = data.split('var jsonArray = [')[1].split(']')[0];
    const parcedData = JSON.parse('[' + dataSplit + ']');
    const images: string[] = [];
    parcedData.forEach((parced: any) => {
      images.push(parced.imageUrl + parced.imageFile);
    });
    return images;
  } else {
    return null;
  }
};

export const fetchViewerImagesById = async (id: number) => {
  return await getViewerHTMLById(id).then((html) => {
    if (html) {
      const $ = cheerio.load(html.data, { xmlMode: false });
      const $sections = $('#addClass > .letslook_book > section');
      if ($sections.text()) {
        const images: any = [];
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

/**
 * Main Banner 가져오기
 * @returns
 */
const getBannerHTML = async () => {
  try {
    return await axios.get(`${BANNER_ROOT}`);
  } catch (error) {
    console.log('❌', error);
  }
};
const getBannerInfo = (
  $: cheerio.CheerioAPI,
  $bannerContainer: cheerio.Cheerio<cheerio.Element>
) => {
  const bannerArr: IFetchedBanners[] = [];
  $bannerContainer.each(function () {
    const title = $(this as cheerio.Element)
      .find('.banner_title')
      .html();
    const image = $(this as cheerio.Element)
      .find('.img_box img')
      .attr('data-src');
    if (title && image) {
      const banner = {
        title,
        image,
      } as IFetchedBanners;
      bannerArr.push(banner);
    }
  });
  return bannerArr;
};
export const fetchBanners = async () => {
  return await getBannerHTML().then((html) => {
    if (html) {
      const $ = cheerio.load(html.data);
      const $popularBanner = $('#welcome_main_banner ul li[data-group="1"]');
      const $newBanner = $('#welcome_main_banner ul li[data-group="2"]');
      const populars = getBannerInfo($, $popularBanner);
      const news = getBannerInfo($, $newBanner);
      return [...populars, ...news];
    }
  });
};
export interface IFetchedBanners {
  title: string;
  image: string;
}
