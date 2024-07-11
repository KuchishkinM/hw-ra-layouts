export default function ShopItem({name, color, img, price}) {
	return (
		<div className="list-view__item">
			<div className="list-view__item--name">{name}</div>
			<div className="list-view__item--color">{color}</div>
			<div className="list-view__item--img-wrap"><img className="list-view__item--img" src={img} alt="item__image"/></div>
			<span className="list-view__item--price">{'$' + price}</span>
			<button className="list-view__item--button" type="button">Add to card</button>
		</div>
	)
}
