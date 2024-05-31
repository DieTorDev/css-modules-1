import Stats from '../stats/Stats';
import styled from './summary.module.css';

const Summary = () => {
	return (
		<>
			<section className={styled.summary_container}>
				<h2 className={styled.summary_title}>Summary</h2>
				<Stats color={'red'} name={'Reaction'} value={80} />
				<Stats color={'yellow'} name={'Memory'} value={92} />
				<Stats color={'green'} name={'Verbal'} value={61} />
				<Stats color={'blue'} name={'Visual'} value={73} />
				<button className={styled.button}>Continue</button>
			</section>
		</>
	);
};

export default Summary;
