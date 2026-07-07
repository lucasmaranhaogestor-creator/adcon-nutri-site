# Leads do formulário → Google Sheets

## Passo a passo

1. Crie uma planilha nova em [sheets.google.com](https://sheets.google.com)
2. Na linha 1, cole os cabeçalhos: `Data | Nome | WhatsApp | Foco de atendimento | Pacientes ativos`
3. Menu **Extensões → Apps Script**
4. Apague o conteúdo padrão e cole o conteúdo do arquivo `apps-script.gs` (nessa mesma pasta)
5. Clique em **Implantar → Nova implantação**
   - Tipo: **App da Web**
   - Executar como: **Eu** (seu e-mail)
   - Quem tem acesso: **Qualquer pessoa**
6. Clique **Implantar** e autorize as permissões pedidas (é a sua própria planilha, pode aceitar)
7. Copie a URL do App da Web (termina em `/exec`)
8. Cole essa URL no lugar de `COLE_AQUI_A_URL_DO_APPS_SCRIPT` em `site/nutri.html`, na linha marcada com `GOOGLE_SHEETS_URL`

## Testar

Depois de colar a URL, envie o formulário da landing normalmente. Uma linha nova deve aparecer na planilha em poucos segundos. Se não aparecer, confira em **Implantações → Gerenciar implantações** se o deploy está ativo, e nos logs do Apps Script (**Execuções**, no menu lateral) se algum erro apareceu.

## Atualizar o script depois

Se você editar o `apps-script.gs` no futuro, sempre crie uma **Nova implantação** (ou edite a implantação existente em "Gerenciar implantações" e clique no ícone de editar) — só salvar o código sem reimplantar não atualiza o App da Web já publicado.
