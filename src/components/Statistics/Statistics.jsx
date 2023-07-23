import PropTypes from 'prop-types';

export const Statistics = props => {
  return (
    <section className="statistics">
      {props.title && <h2 className="title">{props.title}</h2>}

      <ul className="stat-list">
        {props.stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} className="item">
              <span className="label">{label} </span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
