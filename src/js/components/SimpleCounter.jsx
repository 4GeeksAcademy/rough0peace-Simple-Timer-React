//create your first component
function SimpleCounter() {
	return (
		<div className="container">
            <div className="clock-body">
                <div className="clock-icon"><i class="fa-regular fa-clock"></i></div>
                <div className="seconds-hundredThousands">0</div>
                <div className="seconds-tenThousands">0</div>
                <div className="seconds-thousands">0</div>
                <div className="seconds-hundreds">0</div>
                <div className="seconds-tens">0</div>
                <div className="seconds-ones">0</div>
            </div>
		</div>
	)
};

export default SimpleCounter