//create your first component
function SimpleCounter(props) {
	return (
		<div className="container">
            <div className="clock-body">
                <div className="clock-icon"><i className="fa-regular fa-clock"></i></div>
                <div className="seconds-hundredThousands">{props.hundredThousandsPlace}</div>
                <div className="seconds-tenThousands">{props.tenThousandsPlace}</div>
                <div className="seconds-thousands">{props.thousandsPlace}</div>
                <div className="seconds-hundreds">{props.hundredsPlace}</div>
                <div className="seconds-tens">{props.tensPlace}</div>
                <div className="seconds-ones">{props.onesPlace}</div>
            </div>
		</div>
	)
};

export default SimpleCounter