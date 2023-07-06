const ProductItem = ({ product }) => {
  const { title, link, image, description } = product;
  return (
    <div className="product-item">
      <a
        href="https://puce-determined-raven.cyclic.app/"
        target="_blank"
        rel="noreferrer"
        className="h-[133px] lg:h-[200px] border border-dark3 rounded-2xl block overflow-hidden group relative"
      >
        <img
          src={image}
          alt="product"
          className="w-full rounded-lg h-96 object-cover"
        />
      </a>
      <div className="flex flex-col gap-2 mt-2">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-xl font-semibold text-primary"
        >
          {title}
        </a>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
