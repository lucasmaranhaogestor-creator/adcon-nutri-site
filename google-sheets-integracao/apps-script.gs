/**
 * Apps Script — recebe os leads do formulário da landing (site/nutri.html)
 * e grava uma linha nova na planilha vinculada.
 *
 * COMO INSTALAR:
 * 1. Crie a planilha, cole os cabeçalhos na linha 1:
 *    Data | Nome | WhatsApp | Foco de atendimento | Pacientes ativos
 * 2. Extensões > Apps Script > apague o conteúdo padrão > cole este arquivo inteiro
 * 3. Deploy > Nova implantação > tipo "App da Web"
 *    - Executar como: Eu (seu e-mail)
 *    - Quem tem acesso: Qualquer pessoa
 * 4. Autorize as permissões pedidas (é a sua própria planilha, é seguro)
 * 5. Copie a URL do App da Web (termina em /exec) e me envie
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var nome = e.parameter.nome || '';
  var whats = e.parameter.whats || '';
  var foco = e.parameter.foco || '';
  var pacientes = e.parameter.pacientes || '';

  sheet.appendRow([
    new Date(),
    nome,
    whats,
    foco,
    pacientes
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
