import Result from '../result/Result';
import Summary from '../summary/Summary';
import style from './main-container.module.css';

const MainContainer = () => {
	return (
		<main className={style.main_container}>
			<Result />
			<Summary />
		</main>
	);
};

export default MainContainer;
