import PropTypes from "prop-types";
import "./CourseListRow.css";
const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <>
      {isHeader ? (
        !textSecondCell ? (
          <tr>
            <th colSpan="2">{textFirstCell}</th>
          </tr>
        ) : (
          <tr>
            <th>{textFirstCell}</th> <th>{textSecondCell}</th>
          </tr>
        )
      ) : (
        <tr>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      )}
    </>
  );
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.prototype = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
