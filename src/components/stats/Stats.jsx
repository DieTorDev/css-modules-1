import style from './stats.module.css';

const Stats = ({ color, name, value }) => {
	return (
		<article className={`${style.stat} ${style[color]}`}>
			<img
				src={`../../../public/images/icon-${name.toLowerCase()}.svg`}
				alt=''
			/>
			<p className={style.stat_title}>{name}</p>
			<span className={style.value_info}>
				{value}
				<span className={style.value_total}> / 100</span>
			</span>
		</article>
	);
};

export default Stats;
