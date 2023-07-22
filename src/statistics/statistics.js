import PropTypes from 'prop-types';

export const Statistics = ({ data, title }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        <StatisticsInfo data={data} />
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  data: PropTypes.array,
};

const StatisticsInfo = ({ data }) => {
  return (
    <>
      {data.map(info => (
        <li className="item" key={info.id}>
          <span className="label">{info.label}</span>
          <span className="percentage">{info.percentage}%</span>
        </li>
      ))}
    </>
  );
};
