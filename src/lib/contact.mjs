export function whatsappUrl(course = '', name = '', message = '') {
 const text = `${name ? `Olá, meu nome é ${name.trim()}.` : 'Olá!'} Gostaria de informações sobre ${course || 'os cursos do Projeto Tesourinha'} e orientações para inscrição.${message.trim() ? `\n${message.trim()}` : ''}`;
 return `https://wa.me/5511999795965?text=${encodeURIComponent(text)}`;
}
export function validateInquiry(values) {
 /** @type {Record<string, string>} */
 const errors = {};
 if (values.website) errors.form = 'Não foi possível preparar a mensagem. Entre em contato pelo botão de WhatsApp.';
 if (!values.name?.trim() || values.name.trim().length < 2 || values.name.length > 100) errors.name = 'Informe seu nome, entre 2 e 100 caracteres.';
 if (!values.course?.trim()) errors.course = 'Escolha um curso ou orientações gerais.';
 if ((values.message || '').length > 1000) errors.message = 'Use até 1.000 caracteres.';
 if (!values.consent) errors.consent = 'Confirme que deseja continuar para o WhatsApp.';
 return errors;
}
