export function ConverterEstados(val: string) {
  var data;
  if (!val) {
    return "";
  }
  switch (val.toUpperCase()) {
    /* UFs */
    case "AC":
      data = "Acre";
      break;
    case "AL":
      data = "Alagoas";
      break;
    case "AM":
      data = "Amazonas";
      break;
    case "AP":
      data = "Amapá";
      break;
    case "BA":
      data = "Bahia";
      break;
    case "CE":
      data = "Ceará";
      break;
    case "DF":
      data = "Distrito Federal";
      break;
    case "ES":
      data = "Espírito Santo";
      break;
    case "GO":
      data = "Goiás";
      break;
    case "MA":
      data = "Maranhão";
      break;
    case "MG":
      data = "Minas Gerais";
      break;
    case "MS":
      data = "Mato Grosso do Sul";
      break;
    case "MT":
      data = "Mato Grosso";
      break;
    case "PA":
      data = "Pará";
      break;
    case "PB":
      data = "Paraíba";
      break;
    case "PE":
      data = "Pernambuco";
      break;
    case "PI":
      data = "Piauí";
      break;
    case "PR":
      data = "Paraná";
      break;
    case "RJ":
      data = "Rio de Janeiro";
      break;
    case "RN":
      data = "Rio Grande do Norte";
      break;
    case "RO":
      data = "Rondônia";
      break;
    case "RR":
      data = "Roraima";
      break;
    case "RS":
      data = "Rio Grande do Sul";
      break;
    case "SC":
      data = "Santa Catarina";
      break;
    case "SE":
      data = "Sergipe";
      break;
    case "SP":
      data = "São Paulo";
      break;
    case "TO":
      data = "Tocantíns";
      break;

    default:
      break;
  }

  return data;
}

export function mTel(tel: string) {
  tel = tel.replace(/\D/g, "");
  tel = tel.replace(/^0/, "");
  if (tel.length > 10) {
    tel = tel.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (tel.length > 5) {
    tel = tel.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (tel.length > 2) {
    tel = tel.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    tel = tel.replace(/^(\d*)/, "($1");
  }
  return tel;
}

export function tirarFormatCep(cep: string) {
  cep = cep.replace(/[^0-9]+/g, "");
  return cep;
}

export function mCEP(cep: string) {
  cep = cep.replace(/\D/g, "");
  cep = cep.replace(/^(\d{2})(\d)/, "$1.$2");
  cep = cep.replace(/\.(\d{3})(\d)/, ".$1-$2");
  return cep;
}

export function returnSelecionados(selecionado: boolean, index: number) {
  if (selecionado) {
    switch (index) {
      case 0:
        return "Gestor de Vendas";
      case 1:
        return "Pedidos Online";
      case 2:
        return "Relatórios Financeiros";
      case 3:
        return "Controle de Estoque";
      case 4:
        return "App próprio";
      case 5:
        return "Emissão de Nota Fiscal";
      case 6:
        return "Integração com o ifood";
      case 7:
        return "Gestão de Mesas";
    }
  }
}
