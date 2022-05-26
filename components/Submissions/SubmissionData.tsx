import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

const SubmissionData = ({ data }) => {
    return (
        <JSONPretty id="json-pretty" data={data}></JSONPretty>
    );
};

export default SubmissionData;