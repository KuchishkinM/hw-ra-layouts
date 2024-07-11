export default function IconSwitch({icon, onSwitch}) {
	return (
		<div className="button-container">
			<button className="icon-switch" type="button" onClick={() => onSwitch(icon)}><span class="material-icons">{ icon }</span></button>
		</div>
	)
}
