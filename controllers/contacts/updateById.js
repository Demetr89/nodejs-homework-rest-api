const { Contact } = require('../../models/contacts');
const { RequestError } = require('../../helpers');

const updateById = async (req, res) => {
    const { contactId } = req.params;

    const contact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    if (!contact) {
        throw RequestError(404, 'contact not found')
    }

    res.json({
        status: 'success',
        code: 200,
        message: `contact with id:${contactId} updated`,
        data: {
            contact,
        }
    })
}

module.exports = updateById;
