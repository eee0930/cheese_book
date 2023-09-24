import { Helmet } from 'react-helmet-async';

interface ICheeseHead {
  title?: string;
  image?: string;
  description?: string;
}
const DEFAULT_IMG = `${process.env.PUBLIC_URL}/img/cheese_together.jpg`;
const DEFAULT_DES = '치즈북이랑 책 읽자!!';
function CheeseHead({
  title,
  image = DEFAULT_IMG,
  description = DEFAULT_DES,
}: ICheeseHead) {
  return (
    <>
      <Helmet>
        <title>{title ? title + ' | ' : ''}Cheese Book</title>
        <meta name="description" content={description} />
        <meta
          property="og:title"
          content={`${title ? title + ' | ' : ''}Cheese Book`}
        />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="Cheese Book" />
        <meta property="og:description" content={description} />

        <meta
          name="twitter:title"
          content={`${title ? title + ' | ' : ''}Cheese Book`}
        />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary" />
      </Helmet>
    </>
  );
}

export default CheeseHead;
