import styled from './result.module.css';

const Result = () => {
	return (
		<>
			<section className={`${styled.result_container}`}>
				<h4 className={`${styled.result_title}`}>Your Result</h4>
				<div className={`${styled.result_points}`}>
					<span className={`${styled.result_points_main}`}>76</span>
					<span className={`${styled.result_points_second}`}>of 100</span>
				</div>
				<div className={`${styled.result_valoration}`}>Great</div>
				<p className={`${styled.result_msg}`}>
					Your performance exceed 65% of the people conducting the test here!
				</p>
			</section>
		</>
	);
};

export default Result;
