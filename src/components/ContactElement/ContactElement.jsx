import PropTypes from 'prop-types';

export const ContactElement = ({contact}) => (
    <li>{contact.name}: {contact.number}</li>
)

ContactElement.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired
}