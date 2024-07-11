import ShopItem from "./ShopItem";

export default function ListView({ products }) {
  return (
    <div className="list-view">
      {products.map(item =>
        <ShopItem
          name={item.name}
          color={item.color}
          img={item.img}
          price={item.price}
        />
      )}
    </div>
  )
}
