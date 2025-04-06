const path = require('path');

function getContext(modulePath) {
  return path.basename(modulePath, '.js');
}

const logger = (modulePath) => {
  const context = getContext(modulePath);

  return {
    info: (msg, meta = {}) => console.info(`[INFO]  ${msg} [${context}] `, meta),
    debug: (msg, meta = {}) => process.env.NODE_ENV === 'development' && console.debug(`[DEBUG] ${msg} [${context}] `, meta),
    warn: (msg, meta = {}) => console.warn(`[WARN]  ${msg} [${context}] `, meta),
    error: (msg, meta = {}) => console.error(`[ERROR] ${msg} [${context}] `, meta),
  };
};
module.exports = logger;
  /* 🔴🟡🟢
  Nível	Quando usar
    info	Fluxos esperados, sucesso de conexões, requisições etc.
    error	Erros de execução, falha de conexão, exceções.
    warn	Algo incomum mas não crítico (ex: tentativa inválida).
    debug	Mensagens detalhadas para desenvolvimento.
    log	    Para mensagens rápidas ou neutras (pode evitar).
  
    Se quiser um log limpo, prefira info para operações normais e evite log() direto, 
    a não ser que seja algo rápido de debug ou que você vá tirar depois. 
    Em produção, info, error e warn são os níveis mais úteis.
  */