import emailjs from 'emailjs-com';

const serviceId = 'my_mail';
const templateId = 'template_vCNglM1Q';
const userId = 'user_RstMCmmr6oqQJ3543ikzu';

export const sendMessage = async (feedback, name, email) => {
    const data = { message_html: feedback, from_name: name, reply_to: email };
    return await emailjs.send(serviceId, templateId, data, userId);
};