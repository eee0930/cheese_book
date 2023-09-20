import { Helmet } from 'react-helmet-async';

interface ICheeseHead {
  title?: string;
}
function CheeseHead({ title }: ICheeseHead) {
  return (
    <>
      <Helmet>
        <title>{title ? title + ' | ' : ''}Cheese Book</title>
      </Helmet>
    </>
  );
}

export default CheeseHead;
