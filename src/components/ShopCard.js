export default function ShopCard({name, color, img, price}) {
	return (
		<div className="cards-view__item">
			<div className="cards-view__item--name">{name}</div>
			<div className="cards-view__item--color">{color}</div>
			<div><img className="cards-view__item--img" src={img} alt="item__image"/></div>
			<span className="cards-view__item--price">{'$' + price}</span>
			<button className="cards-view__item--button" type="button">Add to card</button>
		</div>
	)
}
