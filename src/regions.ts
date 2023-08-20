import {timezones, Timezone} from './timezones'
export interface Region {
  timezone: string
  abbr: string
  country: string
  offset: number
  points: string
}

export const regionId = (region: Region): string => {
  let offset = zoneFromRegion(region)?.offset
  if (offset === undefined) {
    offset = region.offset
  }
  return `${(region.timezone).replace(/_/g, ' ')} GMT${offset > 0 ? '+' : ''}${offset !== 0 ? offset : ''}`
}

export const zoneFromRegion = (region: {timezone: string}): Timezone | undefined => {
  return timezones.find(tz => tz.name === region.timezone)
}

export const regions: Region[] = [
  {
    timezone: "Africa/Abidjan",
    country: "CI",
    points: "241,118,246,118,245,116,247,113,246,111,244,112,243,111,239,111,238,116,241,118",
    abbr: "GMT"
  },
  {
    timezone: "Africa/Accra",
    country: "GH",
    points: "251,117,251,116,251,113,250,110,246,110,247,114,246,118,251,117",
    abbr: "GMT"
  },
  {
    timezone: "Africa/Addis_Ababa",
    country: "ET",
    points: "313,118,317,114,310,112,308,110,309,108,307,105,301,105,299,110,298,110,296,114,299,116,300,119,305,120,307,119,308,120,311,118,313,118",
    abbr: "EAT"
  },
  {
    timezone: "Africa/Algiers",
    country: "DZ",
    points: "263,83,263,81,260,78,262,77,261,74,254,74,247,76,249,80,246,81,243,83,239,85,238,87,250,95,252,97,254,97,255,99,258,98,267,92,264,91,263,89,264,88,263,83",
    abbr: "CET"
  },
  {
    timezone: "Africa/Asmera",
    country: "ER",
    points: "306,104,304,100,301,101,301,105,303,105,306,105,309,108,310,107,306,104",
    abbr: "EAT"
  },
  {
    timezone: "Africa/Bamako",
    country: "ML",
    points: "244,107,245,107,246,105,249,104,255,104,256,101,256,98,255,99,254,97,252,96,243,90,241,90,242,103,237,103,235,104,234,103,233,105,234,108,237,108,240,111,242,109,244,107",
    abbr: "GMT"
  },
  {
    timezone: "Africa/Bangui",
    country: "CF",
    points: "284,118,288,118,283,111,280,110,276,114,272,115,270,117,270,119,272,122,273,120,276,120,277,118,281,119,284,118",
    abbr: "WAT"
  },
  {
    timezone: "Africa/Banjul",
    country: "GM",
    points: "228,105,228,107,226,107,226,105",
    abbr: "GMT"
  },
  {
    timezone: "Africa/Bissau",
    country: "GW",
    points: "229,108,229,110,227,110,227,108",
    abbr: "GMT"
  },
  {
    timezone: "Africa/Blantyre",
    country: "MW",
    points: "298,144,299,141,298,139,296,138,297,142,295,144,298,145,299,149,300,146,298,144",
    abbr: "CAT"
  },
  {
    timezone: "Africa/Brazzaville",
    country: "CG",
    points: "266,131,268,131,270,132,275,126,276,120,273,120,272,123,268,122,269,125,270,128,268,128,267,130,266,131",
    abbr: "WAT"
  },
  {
    timezone: "Africa/Bujumbura",
    country: "BI",
    points: "290,129,290,131,292,131,292,129",
    abbr: "CAT"
  },
  {
    timezone: "Asia/Oral",
    country: "KZ",
    points: "316,55,315,58,319,58,321,57,323,58,326,56,326,54,323,53,320,53,316,55",
    abbr: "ORAT"
  },
  {
    timezone: "Africa/Cairo",
    country: "EG",
    points: "294,94,297,95,300,92,295,84,296,85,298,86,298,82,295,82,294,81,290,82,285,81,284,83,285,94,294,94",
    abbr: "EET"
  },
  {
    timezone: "Africa/Casablanca",
    country: "MA",
    points: "242,84,243,82,245,81,248,80,248,77,242,75,241,78,236,81,237,83,232,87,238,87,238,85,242,84",
    abbr: "WET"
  },
  {
    timezone: "Africa/Ceuta",
    country: "ES",
    points: "244,74,244,76,242,76,242,74",
    abbr: "CET"
  },
  {
    timezone: "Africa/Conakry",
    country: "GN",
    points: "238,114,239,114,237,108,231,107,231,109,229,109,233,111,236,113,237,115,238,114",
    abbr: "GMT"
  },
  {
    timezone: "Africa/Dakar",
    country: "SN",
    points: "227,107,229,107,234,108,233,105,230,102,227,102,226,105,227,107",
    abbr: "GMT"
  },
  {
    timezone: "Africa/Dar_es_Salaam",
    country: "TZ",
    points: "306,139,304,134,304,131,302,129,297,126,292,126,293,130,291,132,291,134,293,137,297,138,299,141,302,141,306,140,306,139",
    abbr: "EAT"
  },
  {
    timezone: "Asia/Yekaterinburg",
    country: "RU",
    points: "333,53,335,52,335,50,341,50,346,48,348,48,350,46,348,44,353,44,356,42,357,40,364,41,369,40,367,39,369,36,367,35,366,32,364,32,365,29,360,28,362,27,362,25,356,25,359,27,355,26,354,25,351,26,353,27,353,29,358,29,358,31,356,29,353,30,354,31,350,33,346,33,346,32,350,32,352,30,350,26,351,24,346,24,343,27,345,28,345,30,340,29,342,31,333,35,332,39,329,40,322,40,325,43,326,46,324,47,325,49,322,50,321,53,324,53,327,55,329,54,333,55,335,54,333,53",
    abbr: "YEKT"
  },
  {
    timezone: "Africa/Djibouti",
    country: "DJ",
    points: "311,108,311,110,309,110,309,108",
    abbr: "EAT"
  },
  {
    timezone: "Africa/Douala",
    country: "CM",
    points: "270,117,272,114,269,112,272,111,271,110,271,107,270,109,266,115,265,115,262,117,262,119,264,122,270,122,272,123,272,121,270,119,270,117",
    abbr: "WAT"
  },
  {
    timezone: "Africa/Freetown",
    country: "SL",
    points: "235,115,236,114,235,112,233,111,232,114,235,115",
    abbr: "GMT"
  },
  {
    timezone: "Africa/Gaborone",
    country: "BW",
    points: "287,158,291,156,289,155,289,153,286,152,285,150,283,151,282,150,279,150,279,156,278,156,278,159,279,161,281,162,282,160,285,161,287,158",
    abbr: "CAT"
  },
  {
    timezone: "Africa/Harare",
    country: "ZW",
    points: "293,156,295,155,296,153,295,151,296,148,291,147,288,150,285,150,286,152,289,153,289,155,293,156",
    abbr: "CAT"
  },
  {
    timezone: "Africa/El_Aaiun",
    country: "EH",
    points: "233,89,238,89,238,87,232,87,226,95,227,95,232,95,233,92,233,89",
    abbr: "WET"
  },
  {
    timezone: "Africa/Johannesburg",
    country: "ZA",
    points: "283,172,286,172,289,171,295,165,296,162,294,161,293,156,290,156,285,161,282,160,279,162,278,159,278,164,273,165,275,169,276,173,278,173,283,172",
    abbr: "SAST"
  },
  {
    timezone: "Africa/Juba",
    country: "SS",
    points: "299,117,296,114,297,111,295,110,290,112,287,112,286,111,284,113,287,116,289,119,293,120,297,120,300,119,299,117",
    abbr: "EAT"
  },
  {
    timezone: "Africa/Kampala",
    country: "UG",
    points: "293,126,297,126,299,122,297,120,293,120,293,122,291,127,293,126",
    abbr: "EAT"
  },
  {
    timezone: "Africa/Khartoum",
    country: "SD",
    points: "300,107,301,106,301,101,304,100,302,99,302,96,301,94,299,93,297,95,294,94,285,94,285,97,283,97,283,103,282,103,280,107,281,107,283,113,285,111,287,112,290,112,295,110,296,108,297,112,299,110,300,107",
    abbr: "EAT"
  },
  {
    timezone: "Africa/Kinshasa",
    country: "CD",
    points: "271,131,270,132,268,131,267,133,273,133,274,136,277,136,278,135,278,131,279,131,279,128,284,127,282,126,283,125,281,123,283,122,281,120,283,120,277,118,276,119,275,126,271,131",
    abbr: "WAT"
  },
  {
    timezone: "Africa/Lagos",
    country: "NG",
    points: "261,119,264,115,266,115,270,109,269,106,267,107,265,106,263,107,261,106,260,107,256,106,254,112,254,116,256,116,258,119,261,119",
    abbr: "WAT"
  },
  {
    timezone: "Africa/Libreville",
    country: "GA",
    points: "269,125,270,123,266,122,266,124,263,124,263,125,263,128,266,131,267,130,266,128,270,128,269,125",
    abbr: "WAT"
  },
  {
    timezone: "Africa/Lome",
    country: "TG",
    points: "252,116,253,116,252,111,250,110,251,113,251,116,252,116",
    abbr: "GMT"
  },
  {
    timezone: "Africa/Kigali",
    country: "RW",
    points: "292,128,292,126,290,129,292,128",
    abbr: "CAT"
  },
  {
    timezone: "Africa/Luanda",
    country: "AO",
    points: "281,140,280,138,280,135,277,135,277,136,274,136,273,133,267,133,269,137,268,138,269,142,267,144,266,149,276,149,279,150,283,149,281,148,281,143,283,143,283,140,281,140",
    abbr: "WAT"
  },
  {
    timezone: "Africa/Lubumbashi",
    country: "CD",
    points: "291,132,290,128,291,127,293,120,288,118,282,118,281,120,283,122,281,122,283,125,282,126,284,127,279,128,279,131,278,131,277,134,280,135,281,141,283,140,286,142,288,141,290,144,291,142,289,141,290,139,289,138,293,136,291,134,291,132",
    abbr: "CAT"
  },
  {
    timezone: "Africa/Lusaka",
    country: "ZM",
    points: "290,147,292,146,296,144,297,142,296,138,293,136,290,137,290,139,289,141,290,144,288,141,287,142,283,140,283,143,281,143,281,148,287,150,290,148,290,147",
    abbr: "CAT"
  },
  {
    timezone: "Africa/Malabo",
    country: "GQ",
    points: "266,123,266,122,263,123,266,124,266,123",
    abbr: "WAT"
  },
  {
    timezone: "Africa/Maputo",
    country: "MZ",
    points: "296,160,299,158,298,152,305,148,306,146,306,140,302,141,298,141,298,144,300,146,299,149,296,144,292,146,292,147,296,148,295,151,296,153,295,155,293,156,295,162,296,160",
    abbr: "CAT"
  },
  {
    timezone: "Africa/Mbabane",
    country: "SZ",
    points: "294,161,294,163,292,163,292,161",
    abbr: "SAST"
  },
  {
    timezone: "Africa/Mogadishu",
    country: "SO",
    points: "310,125,317,119,321,112,321,109,312,111,310,109,309,110,311,113,317,114,312,118,308,119,307,121,307,126,308,127,310,125",
    abbr: "EAT"
  },
  {
    timezone: "Africa/Monrovia",
    country: "LR",
    points: "239,118,240,117,238,116,239,115,236,113,234,116,238,119,239,118",
    abbr: "GMT"
  },
  {
    timezone: "Africa/Nairobi",
    country: "KE",
    points: "308,127,307,126,307,121,308,119,305,120,300,119,297,119,299,122,297,126,302,129,304,131,308,127",
    abbr: "EAT"
  },
  {
    timezone: "Africa/Maseru",
    country: "LS",
    points: "289,165,289,167,287,167,287,165",
    abbr: "SAST"
  },
  {
    timezone: "Africa/Ndjamena",
    country: "TD",
    points: "278,112,280,110,282,110,281,107,280,107,282,103,283,103,283,98,272,92,271,93,272,97,272,102,269,105,271,107,271,110,272,111,269,112,272,115,276,114,278,112",
    abbr: "WAT"
  },
  {
    timezone: "Africa/Niamey",
    country: "NE",
    points: "256,106,260,107,261,106,263,107,265,106,267,107,269,105,272,102,272,97,270,94,267,92,258,98,256,98,256,101,255,104,250,104,251,106,253,107,255,109,256,106",
    abbr: "WAT"
  },
  {
    timezone: "Africa/Nouakchott",
    country: "MR",
    points: "234,103,235,104,237,103,242,103,241,90,243,90,238,87,238,89,233,89,233,92,232,95,226,96,227,95,228,97,227,98,228,100,227,102,230,102,233,105,234,103",
    abbr: "GMT"
  },
  {
    timezone: "Africa/Ouagadougou",
    country: "BF",
    points: "249,110,252,110,253,109,252,106,250,104,247,105,244,108,242,109,243,112,246,111,246,110,249,110",
    abbr: "GMT"
  },
  {
    timezone: "Africa/Porto-Novo",
    country: "BJ",
    points: "254,114,255,110,254,108,251,111,252,112,252,116,254,116,254,114",
    abbr: "WAT"
  },
  {
    timezone: "Africa/Tunis",
    country: "TN",
    points: "266,80,264,78,266,76,264,73,261,74,262,76,260,78,263,80,263,83,266,80",
    abbr: "CET"
  },
  {
    timezone: "Africa/Sao_Tome",
    country: "ST",
    points: "260,124,260,126,258,126,258,124",
    abbr: "GMT"
  },
  {
    timezone: "Africa/Tripoli",
    country: "LY",
    points: "285,88,284,83,285,81,281,79,278,80,278,82,276,83,271,80,266,79,264,81,263,83,264,86,263,89,264,91,270,94,272,92,283,98,285,97,285,88",
    abbr: "EET"
  },
  {
    timezone: "Africa/Windhoek",
    country: "NA",
    points: "278,163,278,156,279,156,279,150,282,150,283,151,285,150,284,149,279,150,276,149,266,149,270,156,271,162,272,164,274,165,277,165,278,163",
    abbr: "WAST"
  },
  {
    timezone: "America/Adak",
    country: "US",
    points: "6,52,6,54,4,54,4,52",
    abbr: "HST"
  },
  {
    timezone: "America/Argentina/Salta",
    country: "AR",
    points: "162,180,162,174,160,175,155,175,155,177,153,177,152,175,151,176,152,179,150,180,150,183,160,183,160,182,163,182,162,180",
    abbr: "ART"
  },
  {
    timezone: "America/Argentina/Salta",
    country: "AR",
    points: "159,156,160,158,159,159,158,157,157,158,155,160,158,160,158,162,162,161,163,159,163,156,159,156",
    abbr: "ART"
  },
  {
    timezone: "America/Anchorage",
    country: "US",
    points: "42,42,47,40,46,41,50,42,54,41,54,28,51,28,39,27,34,26,25,27,25,32,25,35,27,35,25,37,25,44,27,43,29,44,32,43,31,45,27,47,27,48,30,47,36,44,36,43,40,40,43,41,40,41,39,42,42,42",
    abbr: "AKST"
  },
  {
    timezone: "America/Anguilla",
    country: "AI",
    points: "163,99,163,101,161,101,161,99",
    abbr: "AST"
  },
  {
    timezone: "America/Antigua",
    country: "AG",
    points: "165,100,165,102,163,102,163,100",
    abbr: "AST"
  },
  {
    timezone: "America/Araguaina",
    country: "BR",
    points: "185,136,183,132,182,137,180,140,180,143,182,143,186,143,186,139,185,136",
    abbr: "BRT"
  },
  {
    timezone: "America/Buenos_Aires",
    country: "AR",
    points: "167,171,162,173,162,182,164,181,163,179,169,178,171,176,171,174,167,171",
    abbr: "ART"
  },
  {
    timezone: "America/Catamarca",
    country: "AR",
    points: "159,188,159,186,161,185,160,183,150,184,151,186,150,187,151,189,156,189,159,188",
    abbr: "ART"
  },
  {
    timezone: "America/Catamarca",
    country: "AR",
    points: "160,167,159,162,157,161,158,160,155,160,154,164,158,164,160,167",
    abbr: "ART"
  },
  {
    timezone: "America/Cordoba",
    country: "AR",
    points: "163,173,166,171,169,172,170,167,173,164,175,163,175,161,173,163,169,163,170,160,165,158,163,156,163,159,161,161,159,164,160,166,159,168,160,170,160,174,163,173",
    abbr: "ART"
  },
  {
    timezone: "America/Jujuy",
    country: "AR",
    points: "157,157,159,159,160,158,158,155,157,157",
    abbr: "ART"
  },
  {
    timezone: "America/Argentina/La_Rioja",
    country: "AR",
    points: "156,167,157,169,159,169,160,167,158,164,153,164,156,167",
    abbr: "ART"
  },
  {
    timezone: "America/Mendoza",
    country: "AR",
    points: "152,170,153,171,152,174,153,177,155,177,155,175,157,175,157,171,156,170,152,170",
    abbr: "ART"
  },
  {
    timezone: "America/Argentina/Rio_Gallegos",
    country: "AR",
    points: "151,189,150,192,148,193,148,195,150,195,149,197,155,198,154,195,159,191,156,189,151,189",
    abbr: "ART"
  },
  {
    timezone: "America/Argentina/San_Juan",
    country: "AR",
    points: "153,167,152,170,154,169,156,170,156,167,154,166,153,167",
    abbr: "ART"
  },
  {
    timezone: "America/Argentina/San_Luis",
    country: "AR",
    points: "159,169,156,169,157,175,160,175,160,170,159,169",
    abbr: "ART"
  },
  {
    timezone: "America/Argentina/Tucuman",
    country: "AR",
    points: "158,161,158,163,160,164,160,161,158,161",
    abbr: "ART"
  },
  {
    timezone: "America/Aruba",
    country: "AW",
    points: "154,107,154,109,152,109,152,107",
    abbr: "AST"
  },
  {
    timezone: "America/Argentina/Ushuaia",
    country: "AR",
    points: "156,200,156,202,154,202,154,200",
    abbr: "ART"
  },
  {
    timezone: "America/Asuncion",
    country: "PY",
    points: "174,161,175,158,173,158,172,156,169,156,169,152,164,152,163,156,165,158,170,160,169,163,173,163,174,161",
    abbr: "PYST"
  },
  {
    timezone: "America/Bahia_Banderas",
    country: "MX",
    points: "105,95,105,97,103,97,103,95",
    abbr: "CST"
  },
  {
    timezone: "America/Toronto",
    country: "CA",
    points: "124,56,124,58,122,58,122,56",
    abbr: "EST"
  },
  {
    timezone: "America/Bahia",
    country: "BR",
    points: "187,146,189,145,192,146,194,149,195,150,196,147,196,143,198,141,198,139,197,137,193,137,189,138,189,140,187,139,186,141,186,146,187,146",
    abbr: "BRT"
  },
  {
    timezone: "America/Barbados",
    country: "BB",
    points: "168,106,168,108,166,108,166,106",
    abbr: "AST"
  },
  {
    timezone: "America/Belem",
    country: "BR",
    points: "179,126,181,123,178,119,177,122,174,122,176,123,178,129,177,130,178,134,177,136,178,138,180,139,182,137,183,133,182,132,185,130,186,127,183,126,182,127,183,125,180,125,179,126",
    abbr: "BRT"
  },
  {
    timezone: "America/Belize",
    country: "BZ",
    points: "129,100,129,102,127,102,127,100",
    abbr: "CST"
  },
  {
    timezone: "America/Blanc-Sablon",
    country: "CA",
    points: "172,53,172,55,170,55,170,53",
    abbr: "AST"
  },
  {
    timezone: "America/Boa_Vista",
    country: "BR",
    points: "167,118,163,120,160,119,161,122,163,122,163,126,164,127,168,125,167,122,167,118",
    abbr: "AMT"
  },
  {
    timezone: "America/Bogota",
    country: "CO",
    points: "154,126,153,123,156,122,157,123,157,120,156,117,154,117,153,115,149,115,148,112,151,108,145,110,145,112,143,113,142,115,143,117,142,119,143,120,140,123,146,125,149,128,152,128,153,131,154,126",
    abbr: "COT"
  },
  {
    timezone: "America/Boise",
    country: "US",
    points: "96,66,96,63,93,63,92,62,89,62,88,61,86,64,87,67,96,67,96,66",
    abbr: "MST"
  },
  {
    timezone: "America/Cambridge_Bay",
    country: "CA",
    points: "99,18,97,19,97,21,103,21,104,20,101,19,99,18",
    abbr: "MST"
  },
  {
    timezone: "America/Cambridge_Bay",
    country: "CA",
    points: "108,36,108,32,126,32,126,29,124,29,121,28,121,27,120,25,116,26,116,28,120,28,120,30,116,30,113,31,109,31,106,30,105,31,103,29,100,30,103,30,100,31,101,32,97,31,90,31,92,30,89,29,81,28,81,30,92,34,95,34,97,35,108,36",
    abbr: "MST"
  },
  {
    timezone: "America/Cambridge_Bay",
    country: "CA",
    points: "115,24,110,23,111,24,107,24,113,26,115,24",
    abbr: "MST"
  },
  {
    timezone: "America/Cambridge_Bay",
    country: "CA",
    points: "100,23,101,25,100,26,99,24,97,24,97,28,87,28,88,29,93,29,93,30,99,30,102,28,104,29,107,29,107,28,110,28,110,27,105,26,103,24,100,23",
    abbr: "MST"
  },
  {
    timezone: "America/Campo_Grande",
    country: "BR",
    points: "176,150,173,150,172,149,170,150,169,156,172,156,173,158,175,158,179,153,179,152,176,150",
    abbr: "AMST"
  },
  {
    timezone: "America/Cancun",
    country: "MX",
    points: "128,95,126,98,127,100,130,96,128,95",
    abbr: "EST"
  },
  {
    timezone: "America/Caracas",
    country: "VE",
    points: "163,111,161,110,160,111,158,110,155,110,155,109,151,110,151,112,149,110,149,112,150,115,153,115,154,117,156,116,156,121,158,124,161,122,160,119,163,120,163,119,166,118,165,117,167,113,165,113,163,111",
    abbr: "VET"
  },
  {
    timezone: "America/Cayenne",
    country: "GF",
    points: "176,117,174,118,175,122,177,122,178,119,176,117",
    abbr: "GFT"
  },
  {
    timezone: "America/Cayman",
    country: "KY",
    points: "138,97,138,99,136,99,136,97",
    abbr: "EST"
  },
  {
    timezone: "America/Chicago",
    country: "US",
    points: "128,72,128,68,130,67,128,66,129,63,128,61,122,60,126,58,118,57,105,57,106,59,110,59,111,61,109,64,110,67,109,67,109,70,109,73,107,74,107,81,104,81,105,84,107,85,109,84,112,87,112,88,115,89,116,85,120,83,125,85,126,83,129,83,132,84,132,80,131,76,132,74,128,72",
    abbr: "CST"
  },
  {
    timezone: "America/Chihuahua",
    country: "MX",
    points: "106,85,102,81,99,82,99,86,98,86,101,89,103,88,106,88,106,85",
    abbr: "MST"
  },
  {
    timezone: "America/Coral_Harbour",
    country: "",
    points: "131,33,130,34,131,37,135,36,137,37,139,36,136,36,136,35,131,33",
    abbr: "EST"
  },
  {
    timezone: "America/Costa_Rica",
    country: "CR",
    points: "132,112,135,114,134,110,131,109,132,112",
    abbr: "CST"
  },
  {
    timezone: "America/Creston",
    country: "CA",
    points: "89,56,89,58,87,58,87,56",
    abbr: "MST"
  },
  {
    timezone: "America/Cuiaba",
    country: "BR",
    points: "179,146,180,143,180,139,171,138,169,137,164,137,165,140,167,141,166,144,166,148,169,148,170,150,172,149,173,150,176,148,179,146",
    abbr: "AMST"
  },
  {
    timezone: "America/Curacao",
    country: "CW",
    points: "155,107,155,109,153,109,153,107",
    abbr: "AST"
  },
  {
    timezone: "America/Danmarkshavn",
    country: "GL",
    points: "223,15,219,14,218,20,223,20,220,19,223,19,218,18,225,18,221,17,223,15",
    abbr: "GMT"
  },
  {
    timezone: "America/Dawson",
    country: "CA",
    points: "57,35,57,37,55,37,55,35",
    abbr: "PST"
  },
  {
    timezone: "America/Dawson_Creek",
    country: "CA",
    points: "83,45,78,46,79,48,83,50,83,45",
    abbr: "MST"
  },
  {
    timezone: "America/Denver",
    country: "US",
    points: "93,63,96,63,96,67,92,67,92,74,95,74,96,76,99,76,99,81,104,81,107,81,107,74,109,73,109,70,108,70,110,67,109,64,111,62,109,61,106,59,105,57,89,57,89,59,91,60,91,62,93,63",
    abbr: "MST"
  },
  {
    timezone: "America/Detroit",
    country: "US",
    points: "132,67,134,67,136,65,135,64,133,65,134,63,132,61,132,63,130,63,129,67,132,67",
    abbr: "EST"
  },
  {
    timezone: "America/Detroit",
    country: "US",
    points: "125,60,129,62,131,61,134,61,132,60,130,61,125,60",
    abbr: "EST"
  },
  {
    timezone: "America/Dominica",
    country: "DM",
    points: "166,103,166,105,164,105,164,103",
    abbr: "AST"
  },
  {
    timezone: "America/Edmonton",
    country: "CA",
    points: "92,57,97,57,97,51,97,42,83,42,83,51,86,52,85,53,88,55,88,56,92,57",
    abbr: "MST"
  },
  {
    timezone: "America/Eirunepe",
    country: "BR",
    points: "156,138,153,131,150,131,148,135,156,138",
    abbr: "ACT"
  },
  {
    timezone: "America/El_Salvador",
    country: "SV",
    points: "127,105,127,107,125,107,125,105",
    abbr: "CST"
  },
  {
    timezone: "America/Fortaleza",
    country: "BR",
    points: "201,134,201,132,198,132,194,129,191,129,188,128,186,126,185,130,182,132,184,133,185,138,189,140,189,138,192,138,194,135,197,136,198,135,199,137,201,134",
    abbr: "BRT"
  },
  {
    timezone: "America/Glace_Bay",
    country: "CA",
    points: "168,60,168,62,166,62,166,60",
    abbr: "AST"
  },
  {
    timezone: "America/Godthab",
    country: "GL",
    points: "188,42,189,41,191,40,190,38,191,37,194,37,193,35,198,33,202,33,205,30,213,30,219,28,213,27,209,27,210,26,212,25,216,26,215,24,212,24,212,23,216,23,214,22,219,23,222,22,219,22,224,22,219,21,223,21,223,20,218,20,219,14,222,14,229,13,234,12,228,11,217,13,221,11,213,12,216,11,204,11,220,10,214,10,214,9,196,9,199,10,186,10,191,11,188,11,180,10,181,12,176,11,166,11,166,12,162,12,156,13,162,14,158,15,161,19,169,20,172,21,170,22,172,23,174,24,173,26,176,26,179,26,179,27,174,27,180,28,179,30,180,31,176,30,175,31,180,32,175,32,176,33,177,34,177,35,180,35,178,36,180,38,182,39,183,41,187,40,186,41,188,42",
    abbr: "WGT"
  },
  {
    timezone: "America/Goose_Bay",
    country: "CA",
    points: "171,53,170,51,171,50,166,51,170,49,166,49,164,47,165,46,161,43,160,41,160,44,162,45,161,49,157,48,156,50,158,51,158,53,161,53,171,53",
    abbr: "AST"
  },
  {
    timezone: "America/Grand_Turk",
    country: "TC",
    points: "152,94,152,96,150,96,150,94",
    abbr: "AST"
  },
  {
    timezone: "America/Grenada",
    country: "GD",
    points: "165,107,165,109,163,109,163,107",
    abbr: "AST"
  },
  {
    timezone: "America/Guadeloupe",
    country: "GP",
    points: "166,101,166,103,164,103,164,101",
    abbr: "AST"
  },
  {
    timezone: "America/Guatemala",
    country: "GT",
    points: "125,106,127,103,126,103,126,100,124,100,124,103,122,104,125,106",
    abbr: "CST"
  },
  {
    timezone: "America/Guayaquil",
    country: "EC",
    points: "141,130,146,126,141,123,139,124,137,128,139,129,138,131,140,132,141,130",
    abbr: "ECT"
  },
  {
    timezone: "America/Guyana",
    country: "GY",
    points: "170,116,167,113,165,116,167,118,166,119,168,123,172,122,169,119,170,116",
    abbr: "GYT"
  },
  {
    timezone: "America/Halifax",
    country: "CA",
    points: "161,63,160,62,158,63,159,65,163,62,161,61,161,63",
    abbr: "AST"
  },
  {
    timezone: "America/Havana",
    country: "CU",
    points: "146,96,138,93,134,93,132,95,136,93,137,94,141,95,142,97,147,97,146,96",
    abbr: "CST"
  },
  {
    timezone: "America/Hermosillo",
    country: "MX",
    points: "90,81,93,82,94,85,97,86,96,87,98,88,99,86,99,81,96,81,91,80,90,81",
    abbr: "MST"
  },
  {
    timezone: "America/Indiana/Petersburg",
    country: "US",
    points: "130,71,130,73,128,73,128,71",
    abbr: "EST"
  },
  {
    timezone: "America/Indiana/Tell_City",
    country: "US",
    points: "130,71,130,73,128,73,128,71",
    abbr: "CST"
  },
  {
    timezone: "America/Indiana/Vevay",
    country: "US",
    points: "133,70,133,72,131,72,131,70",
    abbr: "EST"
  },
  {
    timezone: "America/Indianapolis",
    country: "US",
    points: "132,71,132,67,128,68,128,71,132,71",
    abbr: "EST"
  },
  {
    timezone: "America/Indiana/Knox",
    country: "US",
    points: "131,67,131,69,129,69,129,67",
    abbr: "CST"
  },
  {
    timezone: "America/Indiana/Marengo",
    country: "US",
    points: "131,71,131,73,129,73,129,71",
    abbr: "EST"
  },
  {
    timezone: "America/Indiana/Vincennes",
    country: "US",
    points: "129,70,129,72,127,72,127,70",
    abbr: "EST"
  },
  {
    timezone: "America/Indiana/Winamac",
    country: "US",
    points: "131,67,131,69,129,69,129,67",
    abbr: "EST"
  },
  {
    timezone: "America/Inuvik",
    country: "CA",
    points: "65,29,65,31,63,31,63,29",
    abbr: "MST"
  },
  {
    timezone: "America/Iqaluit",
    country: "CA",
    points: "139,20,132,20,132,21,140,21,139,20",
    abbr: "EST"
  },
  {
    timezone: "America/Iqaluit",
    country: "CA",
    points: "139,10,137,10,135,11,140,11,132,10,132,12,132,13,139,13,140,12,143,12,140,13,134,13,139,14,132,14,132,15,137,15,134,16,132,15,132,17,134,17,132,19,138,19,141,19,141,18,142,17,145,17,146,16,142,15,148,15,146,14,153,14,152,13,156,13,156,12,156,10,145,10,139,10",
    abbr: "EST"
  },
  {
    timezone: "America/Iqaluit",
    country: "CA",
    points: "132,30,132,32,134,33,137,31,135,30,136,29,132,28,132,30",
    abbr: "EST"
  },
  {
    timezone: "America/Iqaluit",
    country: "CA",
    points: "144,24,142,23,138,23,140,24,144,24",
    abbr: "EST"
  },
  {
    timezone: "America/Iqaluit",
    country: "CA",
    points: "133,23,133,25,132,28,138,28,142,28,145,29,148,30,150,32,147,33,148,34,142,34,142,36,149,36,156,39,156,37,156,33,156,30,153,28,156,27,152,28,155,27,152,27,151,28,151,26,147,25,144,25,146,24,139,24,138,25,137,23,133,23",
    abbr: "EST"
  },
  {
    timezone: "America/La_Paz",
    country: "BO",
    points: "164,154,164,152,168,152,170,153,170,150,169,148,166,148,166,144,160,142,159,138,153,140,155,142,154,147,153,149,155,152,156,157,158,155,161,157,163,156,164,154",
    abbr: "BOT"
  },
  {
    timezone: "America/Jamaica",
    country: "JM",
    points: "144,99,144,101,142,101,142,99",
    abbr: "EST"
  },
  {
    timezone: "America/Juneau",
    country: "US",
    points: "59,43,60,44,63,44,66,45,62,42,59,43",
    abbr: "AKST"
  },
  {
    timezone: "America/Louisville",
    country: "US",
    points: "132,71,132,73,130,73,130,71",
    abbr: "EST"
  },
  {
    timezone: "America/Kentucky/Monticello",
    country: "US",
    points: "133,73,133,75,131,75,131,73",
    abbr: "EST"
  },
  {
    timezone: "America/Kralendijk",
    country: "BQ",
    points: "156,107,156,109,154,109,154,107",
    abbr: "AST"
  },
  {
    timezone: "America/Lima",
    country: "PE",
    points: "153,149,154,148,155,142,152,138,150,139,149,137,147,135,149,132,152,131,153,129,149,128,146,125,146,126,141,130,140,132,137,131,139,135,144,144,144,145,151,149,153,149",
    abbr: "PET"
  },
  {
    timezone: "America/Managua",
    country: "NI",
    points: "132,110,134,110,135,104,132,104,131,106,128,107,131,110,132,110",
    abbr: "CST"
  },
  {
    timezone: "America/Manaus",
    country: "BR",
    points: "167,125,166,126,163,126,162,122,159,124,156,122,153,123,153,124,154,127,153,131,156,138,157,139,160,138,162,136,164,137,169,137,169,134,172,128,169,127,167,125",
    abbr: "AMT"
  },
  {
    timezone: "America/Los_Angeles",
    country: "US",
    points: "91,62,91,60,89,59,89,57,80,57,80,58,77,58,78,60,77,66,78,67,77,69,78,71,80,72,82,77,85,78,87,80,91,79,92,75,92,67,87,67,86,64,88,62,91,62",
    abbr: "PST"
  },
  {
    timezone: "America/Lower_Princes",
    country: "SX",
    points: "163,99,163,101,161,101,161,99",
    abbr: "AST"
  },
  {
    timezone: "America/Maceio",
    country: "BR",
    points: "199,140,201,137,197,138,199,140",
    abbr: "BRT"
  },
  {
    timezone: "America/Marigot",
    country: "MF",
    points: "163,99,163,101,161,101,161,99",
    abbr: "AST"
  },
  {
    timezone: "America/Martinique",
    country: "MQ",
    points: "166,104,166,106,164,106,164,104",
    abbr: "AST"
  },
  {
    timezone: "America/Matamoros",
    country: "MX",
    points: "113,89,115,89,112,88,112,87,109,84,112,89,113,89",
    abbr: "CST"
  },
  {
    timezone: "America/Mazatlan",
    country: "MX",
    points: "104,93,101,90,100,88,98,88,100,90,103,94,106,95,104,93",
    abbr: "MST"
  },
  {
    timezone: "America/Mazatlan",
    country: "MX",
    points: "91,86,93,88,94,91,98,93,93,86,91,86",
    abbr: "MST"
  },
  {
    timezone: "America/Menominee",
    country: "US",
    points: "129,61,129,63,127,63,127,61",
    abbr: "CST"
  },
  {
    timezone: "America/Mexico_City",
    country: "MX",
    points: "119,103,119,102,122,105,124,102,122,99,119,100,117,99,114,94,111,93,110,91,108,91,106,92,105,94,106,95,104,98,114,103,118,102,119,103",
    abbr: "CST"
  },
  {
    timezone: "America/Merida",
    country: "MX",
    points: "124,96,122,100,126,100,126,98,128,95,125,95,124,96",
    abbr: "CST"
  },
  {
    timezone: "America/Metlakatla",
    country: "US",
    points: "68,47,68,49,66,49,66,47",
    abbr: "PST"
  },
  {
    timezone: "America/Miquelon",
    country: "PM",
    points: "173,59,173,61,171,61,171,59",
    abbr: "PMST"
  },
  {
    timezone: "America/Moncton",
    country: "CA",
    points: "157,58,154,59,156,60,156,62,161,61,160,59,157,58",
    abbr: "AST"
  },
  {
    timezone: "America/Monterrey",
    country: "MX",
    points: "107,90,110,91,111,93,114,94,114,90,115,89,112,89,109,84,106,85,106,88,103,88,101,90,104,94,106,92,108,91,107,90",
    abbr: "CST"
  },
  {
    timezone: "America/Montevideo",
    country: "UY",
    points: "172,173,175,173,176,170,173,168,170,167,169,172,172,173",
    abbr: "UYT"
  },
  {
    timezone: "America/Tortonto",
    country: "",
    points: "146,63,151,63,155,58,159,58,160,57,157,57,149,61,152,60,155,57,158,55,167,55,171,53,161,53,161,52,158,53,158,51,156,52,156,50,159,49,161,48,162,45,160,43,156,45,154,45,154,43,153,42,153,40,151,39,148,38,146,39,142,38,142,40,143,42,141,44,143,44,144,47,139,49,140,50,140,53,139,59,141,61,144,62,147,62,146,63",
    abbr: "EST"
  },
  {
    timezone: "America/Montserrat",
    country: "MS",
    points: "165,101,165,103,163,103,163,101",
    abbr: "AST"
  },
  {
    timezone: "America/Nassau",
    country: "BS",
    points: "144,89,144,91,142,91,142,89",
    abbr: "EST"
  },
  {
    timezone: "America/New_York",
    country: "US",
    points: "132,82,131,84,133,83,135,84,135,87,137,90,139,88,137,82,138,80,144,77,145,75,143,72,144,70,146,71,148,68,151,68,151,66,152,64,155,64,157,63,156,60,154,59,152,62,146,63,144,65,140,65,140,66,136,67,132,67,132,71,130,72,133,74,131,76,132,82",
    abbr: "EST"
  },
  {
    timezone: "America/Nipigon",
    country: "CA",
    points: "128,56,128,58,126,58,126,56",
    abbr: "EST"
  },
  {
    timezone: "America/Nome",
    country: "US",
    points: "25,32,25,27,23,29,19,29,18,30,25,32",
    abbr: "AKST"
  },
  {
    timezone: "America/Nome",
    country: "US",
    points: "25,35,25,33,22,33,16,34,19,34,18,35,24,36,25,35",
    abbr: "AKST"
  },
  {
    timezone: "America/Nome",
    country: "US",
    points: "25,42,25,37,23,37,19,39,21,40,20,41,22,42,25,42",
    abbr: "AKST"
  },
  {
    timezone: "America/Noronha",
    country: "BR",
    points: "206,129,206,131,204,131,204,129",
    abbr: "FNT"
  },
  {
    timezone: "America/North_Dakota/Beulah",
    country: "US",
    points: "110,58,110,60,108,60,108,58",
    abbr: "CST"
  },
  {
    timezone: "America/North_Dakota/Center",
    country: "US",
    points: "110,59,110,61,108,61,108,59",
    abbr: "CST"
  },
  {
    timezone: "America/North_Dakota/New_Salem",
    country: "US",
    points: "110,59,110,61,108,61,108,59",
    abbr: "CST"
  },
  {
    timezone: "America/Ojinaga",
    country: "MX",
    points: "106,83,106,85,104,85,104,83",
    abbr: "MST"
  },
  {
    timezone: "America/Panama",
    country: "PA",
    points: "142,113,140,112,136,113,138,114,140,112,142,113",
    abbr: "EST"
  },
  {
    timezone: "America/Pangnirtung",
    country: "CA",
    points: "156,10,156,12,165,11,160,10,156,10",
    abbr: "EST"
  },
  {
    timezone: "America/Pangnirtung",
    country: "CA",
    points: "156,34,156,37,159,36,160,35,157,35,156,34",
    abbr: "EST"
  },
  {
    timezone: "America/Pangnirtung",
    country: "CA",
    points: "156,30,156,33,159,34,162,35,163,34,165,32,160,31,156,30",
    abbr: "EST"
  },
  {
    timezone: "America/Paramaribo",
    country: "SR",
    points: "175,118,175,117,171,117,169,119,171,122,174,122,175,118",
    abbr: "SRT"
  },
  {
    timezone: "America/Phoenix",
    country: "US",
    points: "99,80,99,76,96,76,95,74,92,74,91,75,91,80,96,81,99,81,99,80",
    abbr: "MST"
  },
  {
    timezone: "America/Port-au-Prince",
    country: "HT",
    points: "151,98,151,100,149,100,149,98",
    abbr: "EST"
  },
  {
    timezone: "America/Port_of_Spain",
    country: "TT",
    points: "166,109,166,111,164,111,164,109",
    abbr: "AST"
  },
  {
    timezone: "America/Porto_Velho",
    country: "BR",
    points: "167,142,167,140,165,140,165,137,163,136,159,138,160,142,164,144,166,144,167,142",
    abbr: "AMT"
  },
  {
    timezone: "America/Puerto_Rico",
    country: "PR",
    points: "159,98,159,100,157,100,157,98",
    abbr: "AST"
  },
  {
    timezone: "America/Rainy_River",
    country: "CA",
    points: "120,56,120,58,118,58,118,56",
    abbr: "CST"
  },
  {
    timezone: "America/Rankin_Inlet",
    country: "CA",
    points: "132,12,132,11,122,12,132,12",
    abbr: "CST"
  },
  {
    timezone: "America/Rankin_Inlet",
    country: "CA",
    points: "113,19,110,19,111,20,111,21,115,20,113,19",
    abbr: "CST"
  },
  {
    timezone: "America/Rankin_Inlet",
    country: "CA",
    points: "125,16,128,16,132,15,129,15,127,14,120,12,116,13,119,14,119,15,125,16",
    abbr: "CST"
  },
  {
    timezone: "America/Rankin_Inlet",
    country: "CA",
    points: "132,21,132,20,126,20,123,19,120,19,121,18,117,18,118,19,121,19,122,21,132,21",
    abbr: "CST"
  },
  {
    timezone: "America/Rankin_Inlet",
    country: "CA",
    points: "132,19,130,18,125,19,132,19",
    abbr: "CST"
  },
  {
    timezone: "America/Rankin_Inlet",
    country: "CA",
    points: "132,28,132,26,130,25,132,23,128,23,125,24,126,26,127,27,132,28",
    abbr: "CST"
  },
  {
    timezone: "America/Rankin_Inlet",
    country: "CA",
    points: "125,36,128,36,129,35,123,33,129,34,132,33,132,30,129,32,127,31,128,30,126,29,126,32,108,32,108,42,118,42,119,40,124,37,125,36",
    abbr: "CST"
  },
  {
    timezone: "America/Rankin_Inlet",
    country: "CA",
    points: "118,22,119,23,117,24,120,25,122,24,125,22,118,22",
    abbr: "CST"
  },
  {
    timezone: "America/Recife",
    country: "BR",
    points: "196,136,194,135,195,137,199,138,201,137,201,135,199,137,198,135,196,136",
    abbr: "BRT"
  },
  {
    timezone: "America/Regina",
    country: "CA",
    points: "104,57,109,57,109,50,108,49,108,42,97,42,97,52,97,57,104,57",
    abbr: "CST"
  },
  {
    timezone: "America/Resolute",
    country: "CA",
    points: "119,20,119,22,117,22,117,20",
    abbr: "CST"
  },
  {
    timezone: "America/Rio_Branco",
    country: "BR",
    points: "148,135,149,137,148,138,152,138,152,140,155,140,157,139,152,136,148,135",
    abbr: "ACT"
  },
  {
    timezone: "America/Santa_Isabel",
    country: "MX",
    points: "91,80,88,80,89,84,93,86,91,83,91,80",
    abbr: "PST"
  },
  {
    timezone: "America/Santarem",
    country: "BR",
    points: "176,125,176,123,174,123,174,121,172,122,168,123,168,126,172,128,169,134,171,138,177,138,177,136,178,134,177,132,178,129,176,125",
    abbr: "BRT"
  },
  {
    timezone: "America/Santiago",
    country: "CL",
    points: "152,199,153,200,155,201,155,198,152,199",
    abbr: "CLT"
  },
  {
    timezone: "America/Santiago",
    country: "CL",
    points: "148,193,149,193,150,190,151,186,150,184,150,180,152,179,151,176,153,173,152,168,153,167,153,164,155,162,155,159,156,157,154,149,152,150,153,155,152,157,152,162,151,165,151,172,148,177,148,180,147,182,149,183,148,186,149,187,147,190,146,192,148,194,147,196,148,198,151,198,151,200,152,198,155,198,150,197,150,195,148,196,148,193",
    abbr: "CLT"
  },
  {
    timezone: "America/Santo_Domingo",
    country: "DO",
    points: "151,100,155,100,155,99,150,97,151,100",
    abbr: "AST"
  },
  {
    timezone: "America/Scoresbysund",
    country: "GL",
    points: "216,25,217,27,220,27,219,25,216,25",
    abbr: "EGT"
  },
  {
    timezone: "America/Sao_Paulo",
    country: "BR",
    points: "181,166,183,160,188,157,192,157,195,152,194,149,195,147,189,145,186,146,186,143,180,142,179,146,176,149,177,151,179,152,178,155,176,157,174,161,175,162,170,167,173,168,176,172,181,166",
    abbr: "BRST"
  },
  {
    timezone: "America/Sitka",
    country: "US",
    points: "63,45,63,47,61,47,61,45",
    abbr: "AKST"
  },
  {
    timezone: "America/St_Barthelemy",
    country: "BL",
    points: "164,99,164,101,162,101,162,99",
    abbr: "AST"
  },
  {
    timezone: "America/St_Johns",
    country: "CA",
    points: "173,53,170,55,170,56,168,59,171,59,173,58,175,59,176,57,174,56,173,57,172,55,173,53",
    abbr: "NST"
  },
  {
    timezone: "America/Thule",
    country: "GL",
    points: "161,19,158,15,149,16,153,17,158,17,151,18,156,18,153,19,161,19",
    abbr: "AST"
  },
  {
    timezone: "America/St_Kitts",
    country: "KN",
    points: "164,100,164,102,162,102,162,100",
    abbr: "AST"
  },
  {
    timezone: "America/St_Lucia",
    country: "LC",
    points: "166,105,166,107,164,107,164,105",
    abbr: "AST"
  },
  {
    timezone: "America/St_Thomas",
    country: "VI",
    points: "161,99,161,101,159,101,159,99",
    abbr: "AST"
  },
  {
    timezone: "America/St_Vincent",
    country: "VC",
    points: "166,106,166,108,164,108,164,106",
    abbr: "AST"
  },
  {
    timezone: "America/Swift_Current",
    country: "CA",
    points: "101,54,101,56,99,56,99,54",
    abbr: "CST"
  },
  {
    timezone: "America/Tegucigalpa",
    country: "HN",
    points: "129,106,131,106,132,104,135,104,133,103,128,103,126,105,129,106",
    abbr: "CST"
  },
  {
    timezone: "America/Thunder_Bay",
    country: "CA",
    points: "127,57,127,59,125,59,125,57",
    abbr: "EST"
  },
  {
    timezone: "America/Tijuana",
    country: "MX",
    points: "88,79,88,81,86,81,86,79",
    abbr: "PST"
  },
  {
    timezone: "America/Toronto",
    country: "CA",
    points: "146,62,144,62,140,60,140,54,138,54,136,51,136,48,132,48,128,47,127,46,125,47,125,50,127,51,125,52,125,55,124,58,127,57,130,57,132,58,133,61,136,62,137,61,139,63,137,62,137,65,135,67,140,65,140,64,143,64,146,62",
    abbr: "EST"
  },
  {
    timezone: "America/Tortola",
    country: "VG",
    points: "161,98,161,100,159,100,159,98",
    abbr: "AST"
  },
  {
    timezone: "America/Vancouver",
    country: "CA",
    points: "72,54,72,55,79,58,76,55,72,54",
    abbr: "PST"
  },
  {
    timezone: "America/Vancouver",
    country: "CA",
    points: "63,43,69,47,69,49,71,51,72,53,75,52,73,54,75,55,78,55,79,57,88,57,88,55,85,53,86,52,79,48,78,46,83,45,83,42,57,42,59,43,62,42,63,43",
    abbr: "PST"
  },
  {
    timezone: "America/Whitehorse",
    country: "CA",
    points: "57,29,54,28,54,41,78,42,77,40,74,41,70,39,70,37,66,35,66,33,64,32,61,32,60,29,57,29",
    abbr: "PST"
  },
  {
    timezone: "America/Winnipeg",
    country: "CA",
    points: "122,58,125,56,124,53,127,51,125,50,125,47,126,46,122,45,121,43,118,43,118,42,108,42,108,48,109,50,109,57,118,57,118,56,122,58",
    abbr: "CST"
  },
  {
    timezone: "America/Yakutat",
    country: "US",
    points: "57,41,57,43,55,43,55,41",
    abbr: "AKST"
  },
  {
    timezone: "America/Yellowknife",
    country: "CA",
    points: "83,31,81,30,81,28,79,28,76,29,72,27,67,28,70,28,64,29,64,28,60,29,61,32,64,32,66,33,66,35,69,36,70,39,74,41,77,40,78,42,108,42,108,36,97,35,95,34,92,34,83,31",
    abbr: "MST"
  },
  {
    timezone: "America/Yellowknife",
    country: "CA",
    points: "88,17,79,19,83,20,86,18,86,19,89,18,88,17",
    abbr: "MST"
  },
  {
    timezone: "America/Yellowknife",
    country: "CA",
    points: "84,22,81,21,77,22,78,23,75,25,79,26,83,26,85,24,90,23,87,22,84,22",
    abbr: "MST"
  },
  {
    timezone: "America/Yellowknife",
    country: "CA",
    points: "91,19,88,20,96,20,91,21,93,22,97,21,97,20,91,19",
    abbr: "MST"
  },
  {
    timezone: "America/Yellowknife",
    country: "CA",
    points: "90,23,86,24,86,26,87,27,95,27,87,28,97,28,97,24,96,24,93,24,90,23",
    abbr: "MST"
  },
  {
    timezone: "Antarctica/Macquarie",
    country: "AU",
    points: "472,200,472,202,470,202,470,200",
    abbr: "MIST"
  },
  {
    timezone: "Arctic/Longyearbyen",
    country: "SJ",
    points: "275,14,270,14,269,15,267,14,265,15,268,16,271,16,269,17,273,18,274,19,276,16,280,16,275,14",
    abbr: "CET"
  },
  {
    timezone: "Arctic/Longyearbyen",
    country: "SJ",
    points: "285,14,281,14,277,13,277,14,283,15,288,14,285,14",
    abbr: "CET"
  },
  {
    timezone: "Asia/Aden",
    country: "YE",
    points: "313,107,324,102,322,99,318,100,314,103,314,102,310,101,309,104,310,107,313,107",
    abbr: "AST"
  },
  {
    timezone: "Asia/Almaty",
    country: "KZ",
    points: "348,66,352,65,355,66,359,65,361,66,362,63,364,62,365,59,369,60,369,58,371,56,368,56,366,54,361,55,358,51,356,50,357,49,352,51,352,50,349,50,348,48,342,49,342,51,344,52,345,55,342,57,340,57,337,60,343,61,345,64,342,66,343,68,345,68,348,66",
    abbr: "ALMT"
  },
  {
    timezone: "Asia/Amman",
    country: "JO",
    points: "302,82,301,81,305,80,304,79,299,80,299,84,302,82",
    abbr: "EET"
  },
  {
    timezone: "Asia/Anadyr",
    country: "RU",
    points: "10,32,7,32,7,31,0,29,0,35,2,34,6,34,6,35,10,36,9,35,11,34,14,33,10,32",
    abbr: "ANAT"
  },
  {
    timezone: "Asia/Anadyr",
    country: "RU",
    points: "497,35,500,35,500,29,495,28,487,28,488,29,486,30,483,28,476,28,476,30,470,30,469,31,471,32,470,33,473,35,484,36,484,37,487,39,491,38,492,39,496,38,499,39,498,36,493,35,497,35",
    abbr: "ANAT"
  },
  {
    timezone: "Asia/Aqtau",
    country: "KZ",
    points: "328,63,329,62,327,60,326,57,319,58,315,58,318,59,319,61,323,60,324,62,321,62,320,63,321,65,325,66,328,68,328,63",
    abbr: "AQTT"
  },
  {
    timezone: "Asia/Aqtobe",
    country: "KZ",
    points: "326,55,326,57,326,59,328,60,329,62,331,62,335,59,337,60,339,58,337,57,336,54,333,55,331,54,328,54,326,55",
    abbr: "AQTT"
  },
  {
    timezone: "Asia/Ashgabat",
    country: "TM",
    points: "340,74,343,72,337,70,336,68,334,68,333,66,331,66,327,68,325,66,323,67,324,70,325,73,329,72,332,73,337,76,340,75,340,74",
    abbr: "TMT"
  },
  {
    timezone: "Asia/Baghdad",
    country: "IQ",
    points: "315,83,317,83,316,80,313,78,314,75,312,73,309,73,307,74,307,77,304,79,304,80,315,85,315,83",
    abbr: "AST"
  },
  {
    timezone: "Asia/Bahrain",
    country: "BH",
    points: "321,87,321,89,319,89,319,87",
    abbr: "AST"
  },
  {
    timezone: "Asia/Bangkok",
    country: "TH",
    points: "391,116,389,112,388,112,389,107,390,107,393,109,392,106,396,105,397,103,394,100,393,100,390,101,391,98,390,97,387,98,386,97,385,99,387,102,386,104,388,106,388,109,386,113,389,116,391,116",
    abbr: "ICT"
  },
  {
    timezone: "Asia/Baku",
    country: "AZ",
    points: "314,67,313,68,317,70,318,72,319,69,317,67,316,68,314,67",
    abbr: "AZT"
  },
  {
    timezone: "Asia/Shanghai",
    country: "CN",
    points: "403,95,404,93,407,95,406,91,405,89,402,89,402,87,401,84,403,82,402,80,404,79,403,77,404,73,403,72,404,70,408,69,407,67,404,65,403,66,399,66,396,67,390,66,385,66,386,68,384,70,385,71,388,72,387,75,388,77,385,78,385,80,387,81,388,84,386,86,387,89,385,92,387,91,388,94,391,96,392,93,394,94,398,93,399,95,403,95",
    abbr: "CST"
  },
  {
    timezone: "Asia/Beirut",
    country: "LB",
    points: "300,77,300,79,298,79,298,77",
    abbr: "EET"
  },
  {
    timezone: "Asia/Bishkek",
    country: "KG",
    points: "354,69,359,68,361,66,359,65,355,66,353,65,352,66,349,66,347,67,349,68,350,67,352,68,346,70,350,71,354,69",
    abbr: "KGT"
  },
  {
    timezone: "Asia/Brunei",
    country: "BN",
    points: "411,117,411,119,409,119,409,117",
    abbr: "BNT"
  },
  {
    timezone: "Asia/Choibalsan",
    country: "MN",
    points: "412,61,415,60,415,58,411,59,410,58,412,56,409,55,406,56,407,59,405,59,406,62,408,63,412,61",
    abbr: "CHOT"
  },
  {
    timezone: "Asia/Colombo",
    country: "LK",
    points: "363,116,364,115,361,111,361,116,363,116",
    abbr: "IST"
  },
  {
    timezone: "Asia/Damascus",
    country: "SY",
    points: "302,80,307,77,307,75,309,73,304,74,301,74,301,77,299,80,302,80",
    abbr: "EET"
  },
  {
    timezone: "Asia/Dhaka",
    country: "BD",
    points: "375,94,376,93,379,95,378,90,375,90,375,89,372,89,374,90,373,91,374,95,375,94",
    abbr: "BDT"
  },
  {
    timezone: "Asia/Dili",
    country: "TL",
    points: "425,136,425,138,423,138,423,136",
    abbr: "TLT"
  },
  {
    timezone: "Asia/Dubai",
    country: "AE",
    points: "328,91,328,89,325,91,322,92,323,93,327,94,328,91",
    abbr: "GST"
  },
  {
    timezone: "Asia/Dushanbe",
    country: "TJ",
    points: "346,73,349,72,350,74,354,72,350,71,349,70,346,70,348,68,344,70,346,73",
    abbr: "TJT"
  },
  {
    timezone: "Asia/Gaza",
    country: "PS",
    points: "299,80,299,82,297,82,297,80",
    abbr: "EET"
  },
  {
    timezone: "Asia/Shanghai",
    country: "CN",
    points: "424,68,428,67,431,66,432,63,435,62,437,58,432,59,431,57,427,56,425,52,423,51,420,53,421,54,424,53,425,54,423,58,420,59,422,60,419,61,421,65,423,66,424,68",
    abbr: "CST"
  },
  {
    timezone: "Asia/Hebron",
    country: "PS",
    points: "300,80,300,82,298,82,298,80",
    abbr: "EET"
  },
  {
    timezone: "Asia/Saigon",
    country: "VN",
    points: "397,112,398,110,401,109,402,107,401,104,397,99,398,96,400,95,398,93,392,94,395,96,394,98,396,99,400,104,399,108,396,110,395,113,397,112",
    abbr: "ICT"
  },
  {
    timezone: "Asia/Hong_Kong",
    country: "HK",
    points: "410,93,410,95,408,95,408,93",
    abbr: "HKT"
  },
  {
    timezone: "Asia/Hovd",
    country: "MN",
    points: "387,63,387,61,385,60,387,59,386,58,388,57,385,56,381,56,381,55,378,54,372,57,372,58,375,59,376,62,383,63,384,66,386,66,387,63",
    abbr: "HOVT"
  },
  {
    timezone: "Asia/Irkutsk",
    country: "RU",
    points: "411,46,413,46,415,43,411,41,406,43,406,42,402,43,404,40,402,40,403,38,401,36,398,36,398,39,395,41,397,42,395,44,392,43,389,44,386,45,386,47,384,48,383,50,388,51,387,52,392,54,392,55,396,55,400,56,401,53,404,53,408,52,412,49,411,46",
    abbr: "IRKT"
  },
  {
    timezone: "Asia/Jakarta",
    country: "ID",
    points: "406,135,404,134,403,135,397,133,396,134,400,136,409,137,409,136,406,135",
    abbr: "WIB"
  },
  {
    timezone: "Asia/Jakarta",
    country: "ID",
    points: "397,131,397,129,395,129,395,126,393,124,386,119,382,117,383,119,389,125,392,131,395,133,397,131",
    abbr: "WIB"
  },
  {
    timezone: "Asia/Jayapura",
    country: "ID",
    points: "438,131,441,132,443,135,445,136,446,138,446,129,441,127,438,130,436,128,436,126,434,125,432,127,435,128,433,129,435,131,436,129,438,131",
    abbr: "WIT"
  },
  {
    timezone: "Asia/Kabul",
    country: "AF",
    points: "338,84,342,84,343,82,347,79,349,78,350,76,349,75,354,73,350,74,349,72,344,74,341,73,337,76,335,76,334,79,336,82,335,84,338,84",
    abbr: "AFT"
  },
  {
    timezone: "Asia/Jerusalem",
    country: "IL",
    points: "300,80,300,82,298,82,298,80",
    abbr: "IST"
  },
  {
    timezone: "Asia/Kamchatka",
    country: "RU",
    points: "476,45,475,44,477,42,481,42,484,41,487,42,489,40,492,39,491,38,486,38,484,36,477,35,477,38,480,38,478,40,475,41,471,44,468,45,466,47,468,54,472,50,475,49,477,47,476,45",
    abbr: "PETT"
  },
  {
    timezone: "Asia/Karachi",
    country: "PK",
    points: "348,86,350,86,354,82,355,80,353,79,353,77,358,76,355,74,350,74,350,76,348,79,346,81,343,82,342,84,335,84,338,87,336,90,342,89,343,91,346,91,349,91,347,88,348,86",
    abbr: "PKT"
  },
  {
    timezone: "Asia/Urumqi",
    country: "CN",
    points: "361,83,365,82,366,80,364,77,365,76,364,74,365,70,364,70,365,65,363,63,363,62,362,63,362,67,356,69,352,70,354,72,354,74,358,76,360,79,359,82,361,83",
    abbr: "XJT"
  },
  {
    timezone: "Asia/Katmandu",
    country: "NP",
    points: "368,86,368,85,363,83,361,85,369,88,372,88,372,86,368,86",
    abbr: "NPT"
  },
  {
    timezone: "Asia/Calcutta",
    country: "IN",
    points: "362,106,362,103,364,101,370,97,372,94,374,95,373,91,374,90,372,89,373,88,375,90,378,90,378,92,379,95,380,92,381,92,382,88,385,87,384,84,381,84,379,86,377,86,378,88,374,88,373,86,372,88,369,88,361,85,363,83,359,82,360,80,360,77,358,76,353,77,353,79,355,80,354,82,350,86,347,87,349,91,346,91,345,92,347,94,348,96,351,95,352,103,356,113,357,114,361,111,362,106",
    abbr: "IST"
  },
  {
    timezone: "Asia/Krasnoyarsk",
    country: "RU",
    points: "396,16,393,15,388,17,396,16",
    abbr: "KRAT"
  },
  {
    timezone: "Asia/Krasnoyarsk",
    country: "RU",
    points: "385,14,379,14,382,15,389,15,389,14,385,14",
    abbr: "KRAT"
  },
  {
    timezone: "Asia/Krasnoyarsk",
    country: "RU",
    points: "383,12,377,14,385,14,383,12",
    abbr: "KRAT"
  },
  {
    timezone: "Asia/Krasnoyarsk",
    country: "RU",
    points: "384,51,383,50,386,47,385,46,389,44,390,45,393,43,396,43,395,41,398,39,397,35,399,34,397,32,398,29,402,28,403,27,407,26,406,25,403,23,396,24,400,23,407,21,408,20,404,18,398,19,398,18,395,17,391,18,390,19,380,19,381,20,374,20,371,21,371,22,362,23,362,24,366,26,367,28,364,28,366,25,359,24,362,25,360,26,362,27,360,28,365,29,364,31,366,32,366,34,369,35,369,37,367,40,367,42,371,42,373,43,372,44,374,45,373,48,374,52,372,53,374,54,374,56,378,54,381,55,381,56,385,56,388,51,384,51",
    abbr: "KRAT"
  },
  {
    timezone: "Asia/Kuala_Lumpur",
    country: "MY",
    points: "394,121,393,117,392,116,390,117,389,116,391,121,394,123,394,121",
    abbr: "MYT"
  },
  {
    timezone: "Asia/Kuching",
    country: "MY",
    points: "410,118,410,118,407,121,405,121,404,123,402,122,404,124,406,123,409,123,411,119,415,119,414,117,413,115,410,118",
    abbr: "MYT"
  },
  {
    timezone: "Asia/Kuwait",
    country: "KW",
    points: "318,83,318,85,316,85,316,83",
    abbr: "AST"
  },
  {
    timezone: "Asia/Macau",
    country: "MO",
    points: "409,93,409,95,407,95,407,93",
    abbr: "CST"
  },
  {
    timezone: "Asia/Magadan",
    country: "RU",
    points: "464,42,469,39,473,39,472,40,476,39,475,37,477,35,471,34,471,32,469,31,470,30,476,30,474,29,472,28,470,26,461,27,457,25,450,25,446,28,447,29,445,32,444,35,445,38,450,39,453,39,454,40,452,41,454,43,458,42,462,43,466,43,464,42",
    abbr: "MAGT"
  },
  {
    timezone: "Asia/Makassar",
    country: "ID",
    points: "412,128,411,127,413,126,414,123,413,120,411,119,410,122,408,124,410,124,411,127,409,129,409,131,411,130,412,128",
    abbr: "WITA"
  },
  {
    timezone: "Asia/Makassar",
    country: "ID",
    points: "420,129,418,128,421,126,418,127,417,124,422,124,418,123,417,124,415,129,416,130,417,133,417,129,418,129,419,132,421,131,420,129",
    abbr: "WITA"
  },
  {
    timezone: "Asia/Manila",
    country: "PH",
    points: "423,117,426,115,424,111,422,114,423,117",
    abbr: "PHT"
  },
  {
    timezone: "Asia/Manila",
    country: "PH",
    points: "421,105,419,106,420,102,420,99,418,99,417,103,418,106,422,108,421,105",
    abbr: "PHT"
  },
  {
    timezone: "Asia/Muscat",
    country: "OM",
    points: "328,100,331,97,333,94,332,92,329,92,328,90,327,92,326,97,322,99,324,102,328,100",
    abbr: "GST"
  },
  {
    timezone: "Asia/Nicosia",
    country: "CY",
    points: "297,75,297,77,295,77,295,75",
    abbr: "EET"
  },
  {
    timezone: "Asia/Novokuznetsk",
    country: "RU",
    points: "373,46,367,47,368,49,373,53,374,52,373,49,373,46",
    abbr: "KRAT"
  },
  {
    timezone: "Asia/Novosibirsk",
    country: "RU",
    points: "367,47,373,46,374,45,372,44,373,43,371,42,368,42,366,40,364,41,357,40,354,44,356,46,354,48,356,50,358,51,362,49,365,51,368,49,367,47",
    abbr: "NOVT"
  },
  {
    timezone: "Asia/Omsk",
    country: "RU",
    points: "354,44,349,44,350,46,348,47,349,50,352,50,352,51,355,50,354,48,356,46,354,44",
    abbr: "OMST"
  },
  {
    timezone: "Asia/Omsk",
    country: "RU",
    points: "373,53,371,52,368,49,365,51,362,49,358,51,361,55,363,55,366,54,368,56,371,56,371,57,375,56,373,53",
    abbr: "OMST"
  },
  {
    timezone: "Asia/Phnom_Penh",
    country: "KH",
    points: "397,109,399,108,399,105,397,106,394,105,392,106,393,110,394,110,397,110,397,109",
    abbr: "ICT"
  },
  {
    timezone: "Asia/Pontianak",
    country: "ID",
    points: "411,127,408,123,405,124,402,122,401,123,403,129,407,129,409,130,411,127",
    abbr: "WIB"
  },
  {
    timezone: "Asia/Pyongyang",
    country: "KP",
    points: "426,72,428,72,427,70,430,68,429,67,426,67,423,69,424,70,424,73,426,72",
    abbr: "KST"
  },
  {
    timezone: "Asia/Qatar",
    country: "QA",
    points: "323,89,323,91,321,91,321,89",
    abbr: "AST"
  },
  {
    timezone: "Asia/Qyzylorda",
    country: "KZ",
    points: "344,52,342,52,342,49,335,50,333,53,336,54,339,58,342,57,345,55,344,52",
    abbr: "QYZT"
  },
  {
    timezone: "Asia/Qyzylorda",
    country: "KZ",
    points: "342,65,342,66,345,64,343,61,341,61,335,59,331,61,335,60,334,63,336,65,340,64,342,65",
    abbr: "QYZT"
  },
  {
    timezone: "Asia/Rangoon",
    country: "MM",
    points: "386,104,387,102,385,99,386,97,389,97,391,95,388,94,387,91,385,92,387,89,386,85,385,87,382,88,381,92,380,92,378,96,381,98,381,103,383,102,386,102,386,106,387,107,387,111,388,109,388,106,386,104",
    abbr: "MMT"
  },
  {
    timezone: "Asia/Riyadh",
    country: "SA",
    points: "310,101,312,101,314,103,318,100,326,97,327,93,323,93,319,89,320,88,318,87,317,85,312,84,304,80,301,81,303,83,300,84,299,86,303,92,304,96,307,98,309,102,310,101",
    abbr: "AST"
  },
  {
    timezone: "Asia/Sakhalin",
    country: "RU",
    points: "450,56,449,53,449,50,447,51,448,54,447,57,447,61,448,59,450,56",
    abbr: "SAKT"
  },
  {
    timezone: "Asia/Samarkand",
    country: "UZ",
    points: "345,71,343,69,342,65,340,64,336,65,334,63,333,64,331,62,328,63,328,68,329,67,333,66,334,68,336,68,337,70,343,72,344,73,345,71",
    abbr: "UZT"
  },
  {
    timezone: "Asia/Seoul",
    country: "KR",
    points: "429,76,430,75,428,71,426,72,426,75,425,77,429,76",
    abbr: "KST"
  },
  {
    timezone: "Asia/Shanghai",
    country: "CN",
    points: "401,84,402,85,402,89,405,89,404,90,406,92,407,94,409,93,412,93,412,92,416,90,419,86,420,83,417,83,419,81,416,76,420,74,418,72,416,73,415,71,418,68,420,69,418,71,425,68,423,66,420,64,419,61,420,59,423,58,425,54,424,53,421,54,420,53,423,51,418,51,418,53,415,55,412,56,410,58,411,59,415,58,416,61,414,60,408,63,406,62,406,64,404,65,407,67,409,66,408,69,404,70,403,72,404,73,403,77,404,79,402,79,403,82,401,84",
    abbr: "CST"
  },
  {
    timezone: "Asia/Singapore",
    country: "SG",
    points: "395,122,395,124,393,124,393,122",
    abbr: "SGT"
  },
  {
    timezone: "Asia/Taipei",
    country: "TW",
    points: "417,94,418,95,419,90,417,94",
    abbr: "CST"
  },
  {
    timezone: "Asia/Tashkent",
    country: "UZ",
    points: "345,69,348,68,348,69,352,68,350,67,349,68,347,67,345,68,343,68,344,70,345,69",
    abbr: "UZT"
  },
  {
    timezone: "Asia/Tbilisi",
    country: "GE",
    points: "309,67,310,68,315,68,313,66,310,65,306,64,309,67",
    abbr: "GET"
  },
  {
    timezone: "Asia/Tehran",
    country: "IR",
    points: "335,81,334,79,335,77,335,74,328,72,325,73,325,74,322,74,318,73,317,70,314,71,312,70,311,72,313,75,313,77,314,79,316,80,317,83,320,83,321,86,325,88,329,87,330,89,335,90,338,88,337,87,335,84,336,82,335,81",
    abbr: "IRST"
  },
  {
    timezone: "Asia/Thimphu",
    country: "BT",
    points: "378,87,377,86,373,87,375,88,378,88,378,87",
    abbr: "BTT"
  },
  {
    timezone: "Asia/Tokyo",
    country: "JP",
    points: "448,63,447,62,445,66,449,67,450,65,453,65,451,64,448,63",
    abbr: "JST"
  },
  {
    timezone: "Asia/Tokyo",
    country: "JP",
    points: "432,78,430,79,431,81,433,79,432,78",
    abbr: "JST"
  },
  {
    timezone: "Asia/Tokyo",
    country: "JP",
    points: "437,76,434,76,434,77,438,77,439,79,440,77,442,77,445,75,446,72,447,72,446,67,445,68,444,71,442,73,440,73,439,75,437,76",
    abbr: "JST"
  },
  {
    timezone: "Asia/Ulaanbaatar",
    country: "MN",
    points: "396,67,399,66,403,66,406,64,406,62,405,60,407,59,406,56,403,57,398,55,394,55,392,54,387,53,385,56,388,57,387,59,385,60,387,62,386,66,390,66,396,67",
    abbr: "ULAT"
  },
  {
    timezone: "Asia/Urumqi",
    country: "CN",
    points: "386,86,388,84,385,78,388,77,387,75,388,72,385,71,384,70,385,68,384,66,383,63,376,62,376,60,372,58,372,57,369,58,369,60,365,59,364,62,365,64,365,65,364,68,365,70,364,74,365,75,364,77,366,80,366,82,364,83,369,86,375,86,378,86,381,84,383,84,386,86",
    abbr: "XJT"
  },
  {
    timezone: "Asia/Vientiane",
    country: "LA",
    points: "398,105,399,103,396,99,394,98,396,97,393,96,391,94,390,95,389,97,391,98,390,101,393,99,397,103,396,105,398,105",
    abbr: "ICT"
  },
  {
    timezone: "Asia/Vladivostok",
    country: "RU",
    points: "433,63,433,65,435,66,441,61,445,57,445,55,447,53,444,50,441,50,438,49,448,43,454,42,452,41,454,40,453,39,448,39,444,38,445,37,444,33,446,31,446,28,449,25,455,25,446,24,443,25,444,26,436,26,434,25,433,26,435,27,434,29,435,31,431,33,434,35,433,37,439,39,437,40,436,39,433,42,433,44,432,48,435,48,431,50,433,51,437,51,435,52,432,54,433,56,432,59,437,58,435,62,433,63",
    abbr: "VLAT"
  },
  {
    timezone: "Asia/Vladivostok",
    country: "RU",
    points: "443,19,441,20,443,21,449,21,452,20,446,19,445,20,443,19",
    abbr: "VLAT"
  },
  {
    timezone: "Asia/Yakutsk",
    country: "RU",
    points: "432,48,432,46,433,43,435,40,437,40,439,39,433,37,434,35,431,33,435,31,434,29,435,27,432,27,429,26,429,24,423,22,421,24,411,23,408,23,407,22,403,23,406,26,402,28,398,29,397,32,398,34,397,35,401,36,402,37,402,39,404,40,402,43,406,42,406,43,411,41,415,42,415,44,413,44,413,46,410,46,412,49,408,51,408,52,404,53,401,53,400,56,404,57,409,55,414,56,418,53,418,51,422,51,425,52,428,56,432,57,433,56,431,55,433,53,437,51,433,51,431,50,435,48,432,48",
    abbr: "YAKT"
  },
  {
    timezone: "Asia/Yerevan",
    country: "AM",
    points: "313,68,310,68,315,71,313,68",
    abbr: "AMT"
  },
  {
    timezone: "Atlantic/Azores",
    country: "PT",
    points: "215,72,215,74,213,74,213,72",
    abbr: "AZOT"
  },
  {
    timezone: "Atlantic/Bermuda",
    country: "BM",
    points: "161,79,161,81,159,81,159,79",
    abbr: "AST"
  },
  {
    timezone: "Atlantic/Canary",
    country: "ES",
    points: "230,85,230,87,228,87,228,85",
    abbr: "WET"
  },
  {
    timezone: "Atlantic/Cape_Verde",
    country: "CV",
    points: "218,103,218,105,216,105,216,103",
    abbr: "CVT"
  },
  {
    timezone: "Atlantic/Madeira",
    country: "PT",
    points: "228,79,228,81,226,81,226,79",
    abbr: "WET"
  },
  {
    timezone: "Atlantic/Reykjavik",
    country: "IS",
    points: "221,35,221,37,219,37,219,35",
    abbr: "GMT"
  },
  {
    timezone: "Atlantic/South_Georgia",
    country: "GS",
    points: "200,199,200,201,198,201,198,199",
    abbr: "GST"
  },
  {
    timezone: "Atlantic/St_Helena",
    country: "SH",
    points: "243,146,243,148,241,148,241,146",
    abbr: "GMT"
  },
  {
    timezone: "Atlantic/Stanley",
    country: "FK",
    points: "171,196,171,198,169,198,169,196",
    abbr: "FKST"
  },
  {
    timezone: "Australia/Adelaide",
    country: "AU",
    points: "438,161,429,161,429,169,432,169,436,170,439,174,441,171,442,172,444,175,444,177,446,178,446,161,438,161",
    abbr: "ACDT"
  },
  {
    timezone: "Australia/Brisbane",
    country: "AU",
    points: "458,156,457,153,453,151,452,146,450,145,448,140,446,144,447,146,446,149,444,150,442,148,442,161,446,161,446,165,457,165,460,166,463,164,463,161,461,158,458,156",
    abbr: "AEST"
  },
  {
    timezone: "Australia/Broken_Hill",
    country: "AU",
    points: "447,168,447,170,445,170,445,168",
    abbr: "ACDT"
  },
  {
    timezone: "Australia/Currie",
    country: "AU",
    points: "451,179,451,181,449,181,449,179",
    abbr: "AEDT"
  },
  {
    timezone: "Australia/Darwin",
    country: "AU",
    points: "429,146,429,161,442,161,442,148,437,146,439,142,436,142,433,140,434,142,431,143,429,146",
    abbr: "ACST"
  },
  {
    timezone: "Australia/Eucla",
    country: "AU",
    points: "429,168,424,168,424,170,428,169,429,168",
    abbr: "ACWST"
  },
  {
    timezone: "Australia/Hobart",
    country: "AU",
    points: "456,182,454,183,451,182,454,186,454,184,456,185,456,182",
    abbr: "AEDT"
  },
  {
    timezone: "Australia/Lindeman",
    country: "AU",
    points: "458,152,458,154,456,154,456,152",
    abbr: "AEST"
  },
  {
    timezone: "Australia/Lord_Howe",
    country: "AU",
    points: "472,168,472,170,470,170,470,168",
    abbr: "LHDT"
  },
  {
    timezone: "Australia/Melbourne",
    country: "AU",
    points: "448,173,446,172,446,178,449,179,451,178,453,179,458,177,455,175,451,175,448,173",
    abbr: "AEDT"
  },
  {
    timezone: "Australia/Perth",
    country: "AU",
    points: "424,146,423,146,421,148,418,152,413,154,409,155,407,159,409,162,408,162,410,165,411,169,410,173,414,174,417,172,422,172,424,168,429,168,429,146,428,145,425,144,424,146",
    abbr: "AWST"
  },
  {
    timezone: "Australia/Sydney",
    country: "AU",
    points: "459,174,462,169,463,164,460,166,459,165,446,165,446,169,447,169,446,172,449,173,451,175,455,175,458,177,459,174",
    abbr: "AEDT"
  },
  {
    timezone: "Europe/Amsterdam",
    country: "NL",
    points: "258,53,260,52,258,51,258,53",
    abbr: "CET"
  },
  {
    timezone: "Europe/Andorra",
    country: "AD",
    points: "253,65,253,67,251,67,251,65",
    abbr: "CET"
  },
  {
    timezone: "Europe/Athens",
    country: "GR",
    points: "282,72,281,71,281,69,283,70,283,68,286,68,287,67,279,68,278,70,280,72,280,74,282,72",
    abbr: "EET"
  },
  {
    timezone: "Europe/Belgrade",
    country: "RS",
    points: "280,63,278,61,276,62,279,67,282,65,280,63",
    abbr: "CET"
  },
  {
    timezone: "Europe/Bucharest",
    country: "RO",
    points: "289,62,289,60,287,58,285,59,282,58,278,61,282,64,290,64,291,62,289,62",
    abbr: "EET"
  },
  {
    timezone: "Europe/Berlin",
    country: "DE",
    points: "260,57,261,59,268,59,269,57,267,55,271,54,270,50,267,49,265,50,264,49,260,50,258,53,260,57",
    abbr: "CET"
  },
  {
    timezone: "Europe/Budapest",
    country: "HU",
    points: "279,61,282,58,279,58,276,59,274,58,273,59,275,61,279,61",
    abbr: "CET"
  },
  {
    timezone: "Europe/Chisinau",
    country: "MD",
    points: "292,60,291,58,288,58,289,60,289,62,292,60",
    abbr: "EET"
  },
  {
    timezone: "Europe/Bratislava",
    country: "SK",
    points: "274,58,276,59,278,58,281,58,281,57,276,56,274,58",
    abbr: "CET"
  },
  {
    timezone: "Europe/Brussels",
    country: "BE",
    points: "254,54,256,56,259,55,257,53,254,54",
    abbr: "CET"
  },
  {
    timezone: "Europe/Copenhagen",
    country: "DK",
    points: "263,48,265,47,265,45,261,46,261,48,263,48",
    abbr: "CET"
  },
  {
    timezone: "Europe/Dublin",
    country: "IE",
    points: "241,50,239,49,236,51,238,52,237,54,241,53,242,50,241,50",
    abbr: "GMT"
  },
  {
    timezone: "Europe/Gibraltar",
    country: "GI",
    points: "244,74,244,76,242,76,242,74",
    abbr: "CET"
  },
  {
    timezone: "Europe/Guernsey",
    country: "GG",
    points: "247,55,247,57,245,57,245,55",
    abbr: "GMT"
  },
  {
    timezone: "Europe/Helsinki",
    country: "FI",
    points: "287,41,289,41,294,38,292,36,292,34,290,32,292,31,290,30,291,28,287,28,285,30,281,30,283,31,285,35,282,36,279,38,282,42,287,41",
    abbr: "EET"
  },
  {
    timezone: "Europe/Isle_of_Man",
    country: "IM",
    points: "245,49,245,51,243,51,243,49",
    abbr: "GMT"
  },
  {
    timezone: "Europe/Istanbul",
    country: "TR",
    points: "301,74,304,74,309,73,312,74,311,72,312,70,309,67,303,68,299,67,295,67,293,68,286,69,288,72,288,74,291,75,293,74,296,75,301,74",
    abbr: "EET"
  },
  {
    timezone: "Europe/Jersey",
    country: "JE",
    points: "248,56,248,58,246,58,246,56",
    abbr: "GMT"
  },
  {
    timezone: "Europe/Kaliningrad",
    country: "RU",
    points: "279,48,279,50,277,50,277,48",
    abbr: "EET"
  },
  {
    timezone: "Europe/Kiev",
    country: "UA",
    points: "304,59,305,59,306,56,303,56,302,55,299,55,297,52,293,53,292,54,284,53,283,55,281,56,285,59,288,58,291,58,292,61,290,60,289,62,291,61,294,60,295,61,299,61,298,58,301,59,304,59",
    abbr: "EET"
  },
  {
    timezone: "Europe/Lisbon",
    country: "PT",
    points: "240,73,241,67,238,67,237,71,238,74,240,73",
    abbr: "WET"
  },
  {
    timezone: "Europe/Ljubljana",
    country: "SI",
    points: "272,60,269,60,271,62,272,60",
    abbr: "CET"
  },
  {
    timezone: "Europe/London",
    country: "GB",
    points: "246,53,246,54,242,55,245,55,251,54,252,53,250,52,248,49,247,47,245,47,247,45,244,45,246,44,243,44,243,45,242,47,243,49,246,49,246,50,245,52,243,53,245,54,246,53",
    abbr: "GMT"
  },
  {
    timezone: "Europe/Luxembourg",
    country: "LU",
    points: "260,55,260,57,258,57,258,55",
    abbr: "CET"
  },
  {
    timezone: "Europe/Madrid",
    country: "ES",
    points: "249,72,251,68,255,66,249,66,248,65,239,64,237,65,239,66,240,68,240,72,242,75,244,74,247,74,249,72",
    abbr: "CET"
  },
  {
    timezone: "Europe/Malta",
    country: "MT",
    points: "271,74,271,76,269,76,269,74",
    abbr: "CET"
  },
  {
    timezone: "Europe/Mariehamn",
    country: "AX",
    points: "279,41,279,43,277,43,277,41",
    abbr: "EET"
  },
  {
    timezone: "Europe/Minsk",
    country: "BY",
    points: "292,53,294,51,296,51,293,49,292,47,289,47,287,48,286,50,283,50,283,53,292,53",
    abbr: "MSK"
  },
  {
    timezone: "Europe/Monaco",
    country: "MC",
    points: "261,63,261,65,259,65,259,63",
    abbr: "CET"
  },
  {
    timezone: "Europe/Moscow",
    country: "RU",
    points: "326,23,321,25,325,26,324,27,330,27,327,25,329,23,326,23",
    abbr: "MSK"
  },
  {
    timezone: "Europe/Moscow",
    country: "RU",
    points: "333,20,328,21,324,23,329,23,329,22,332,22,332,21,335,20,345,19,344,18,333,20",
    abbr: "MSK"
  },
  {
    timezone: "Europe/Moscow",
    country: "RU",
    points: "315,63,316,60,312,58,312,59,308,58,309,56,307,54,310,54,310,52,317,52,317,51,320,49,324,50,325,49,324,46,321,47,318,45,315,46,314,44,316,43,314,41,316,40,319,42,323,41,322,40,329,40,332,39,333,35,342,31,340,29,335,28,335,29,333,30,332,29,323,30,317,31,316,32,312,32,315,31,314,30,310,30,312,31,311,33,305,34,306,35,301,35,303,36,298,35,298,33,294,32,304,33,307,32,307,31,300,29,296,29,295,28,289,29,292,31,290,32,292,34,291,35,294,38,289,41,292,42,289,42,288,44,289,47,293,48,293,49,296,51,293,51,294,53,297,52,299,55,302,55,303,56,306,56,306,58,302,60,303,61,301,62,306,65,310,65,313,66,316,68,317,67,315,63",
    abbr: "MSK"
  },
  {
    timezone: "Europe/Oslo",
    country: "NO",
    points: "261,44,263,43,266,43,268,40,267,37,269,36,272,33,273,31,275,31,278,29,281,30,285,30,286,28,290,29,293,28,293,27,288,27,285,28,284,27,281,28,278,28,275,30,272,30,272,31,268,33,266,36,260,37,259,38,257,40,257,41,259,42,258,44,261,44",
    abbr: "CET"
  },
  {
    timezone: "Europe/Paris",
    country: "FR",
    points: "256,65,259,65,260,64,258,61,261,57,256,56,254,54,252,55,246,57,243,58,244,59,247,59,249,63,248,65,254,66,256,65",
    abbr: "CET"
  },
  {
    timezone: "Europe/Podgorica",
    country: "ME",
    points: "278,65,278,67,276,67,276,65",
    abbr: "CET"
  },
  {
    timezone: "Europe/Prague",
    country: "CZ",
    points: "271,57,274,57,276,56,275,55,271,54,267,55,271,57",
    abbr: "CET"
  },
  {
    timezone: "Europe/Riga",
    country: "LV",
    points: "281,45,279,47,285,47,287,48,289,47,288,45,285,44,283,46,281,45",
    abbr: "EET"
  },
  {
    timezone: "Europe/Rome",
    country: "IT",
    points: "273,69,276,69,272,67,270,67,267,63,269,62,269,60,264,61,262,60,259,61,260,64,262,63,264,64,265,66,272,69,274,71,273,69",
    abbr: "CET"
  },
  {
    timezone: "Europe/Samara",
    country: "RU",
    points: "320,49,317,52,321,53,323,49,320,49",
    abbr: "SAMT"
  },
  {
    timezone: "Europe/Samara",
    country: "RU",
    points: "325,47,325,44,322,44,321,47,325,47",
    abbr: "SAMT"
  },
  {
    timezone: "Europe/San_Marino",
    country: "SM",
    points: "268,63,268,65,266,65,266,63",
    abbr: "CET"
  },
  {
    timezone: "Europe/Sarajevo",
    country: "BA",
    points: "272,63,276,66,277,63,272,63",
    abbr: "CET"
  },
  {
    timezone: "Europe/Simferopol",
    country: "RU",
    points: "298,61,295,62,297,63,301,62,298,61",
    abbr: "MSK"
  },
  {
    timezone: "Europe/Skopje",
    country: "MK",
    points: "281,66,279,68,282,68,281,66",
    abbr: "CET"
  },
  {
    timezone: "Europe/Sofia",
    country: "BG",
    points: "289,66,290,64,282,64,281,66,282,68,286,68,289,66",
    abbr: "EET"
  },
  {
    timezone: "Europe/Stockholm",
    country: "SE",
    points: "267,47,268,48,272,47,274,43,274,41,275,38,279,36,280,34,284,34,283,31,278,29,278,30,274,30,272,31,273,32,270,33,270,36,267,37,268,41,266,42,267,44,267,47",
    abbr: "CET"
  },
  {
    timezone: "Europe/Tallinn",
    country: "EE",
    points: "283,43,285,44,289,45,289,43,286,42,283,43",
    abbr: "EET"
  },
  {
    timezone: "Europe/Tirane",
    country: "AL",
    points: "278,70,278,68,279,66,277,66,278,70",
    abbr: "CET"
  },
  {
    timezone: "Europe/Uzhgorod",
    country: "UA",
    points: "282,56,282,58,280,58,280,56",
    abbr: "EET"
  },
  {
    timezone: "Europe/Vaduz",
    country: "LI",
    points: "264,59,264,61,262,61,262,59",
    abbr: "CET"
  },
  {
    timezone: "Europe/Vatican",
    country: "VA",
    points: "268,66,268,68,266,68,266,66",
    abbr: "CET"
  },
  {
    timezone: "Europe/Vienna",
    country: "AT",
    points: "263,59,264,60,267,60,270,61,273,60,273,57,268,58,268,59,263,59",
    abbr: "CET"
  },
  {
    timezone: "Europe/Vilnius",
    country: "LT",
    points: "279,47,283,50,286,50,287,48,285,47,279,47",
    abbr: "EET"
  },
  {
    timezone: "Europe/Volgograd",
    country: "RU",
    points: "315,57,317,55,320,54,320,53,317,52,310,52,310,54,307,54,309,56,308,58,311,59,313,58,315,61,317,62,316,59,315,57",
    abbr: "MSK"
  },
  {
    timezone: "Europe/Volgograd",
    country: "RU",
    points: "317,40,314,41,315,42,314,44,316,45,315,46,318,45,321,47,322,44,325,44,324,41,321,42,317,42,317,40",
    abbr: "MSK"
  },
  {
    timezone: "Europe/Warsaw",
    country: "PL",
    points: "283,55,284,54,282,52,283,51,282,49,277,50,277,49,270,50,271,54,276,56,280,56,282,57,283,55",
    abbr: "CET"
  },
  {
    timezone: "Europe/Zagreb",
    country: "HR",
    points: "277,63,277,62,273,60,270,62,272,65,274,65,272,62,277,63",
    abbr: "CET"
  },
  {
    timezone: "Europe/Zaporozhye",
    country: "UA",
    points: "298,59,299,61,302,59,299,58,298,59",
    abbr: "EET"
  },
  {
    timezone: "Europe/Zurich",
    country: "CH",
    points: "259,61,262,60,263,61,265,60,263,59,260,59,259,61",
    abbr: "CET"
  },
  {
    timezone: "Indian/Antananarivo",
    country: "MG",
    points: "317,142,311,148,312,152,309,157,311,159,315,160,317,153,320,146",
    abbr: "EAT"
  },
  {
    timezone: "Indian/Chagos",
    country: "IO",
    points: "352,134,352,136,350,136,350,134",
    abbr: "IOT"
  },
  {
    timezone: "Indian/Christmas",
    country: "CX",
    points: "398,138,398,140,396,140,396,138",
    abbr: "CXT"
  },
  {
    timezone: "Indian/Cocos",
    country: "CC",
    points: "386,141,386,143,384,143,384,141",
    abbr: "CCT"
  },
  {
    timezone: "Indian/Comoro",
    country: "KM",
    points: "311,140,311,142,309,142,309,140",
    abbr: "EAT"
  },
  {
    timezone: "Indian/Kerguelen",
    country: "TF",
    points: "349,193,349,195,347,195,347,193",
    abbr: "TFT"
  },
  {
    timezone: "Indian/Mahe",
    country: "SC",
    points: "328,130,328,132,326,132,326,130",
    abbr: "SCT"
  },
  {
    timezone: "Indian/Maldives",
    country: "MV",
    points: "353,118,353,120,351,120,351,118",
    abbr: "MVT"
  },
  {
    timezone: "Indian/Mauritius",
    country: "MU",
    points: "331,152,331,154,329,154,329,152",
    abbr: "MUT"
  },
  {
    timezone: "Indian/Mayotte",
    country: "YT",
    points: "314,142,314,144,312,144,312,142",
    abbr: "EAT"
  },
  {
    timezone: "Indian/Reunion",
    country: "RE",
    points: "328,153,328,155,326,155,326,153",
    abbr: "RET"
  },
  {
    timezone: "Pacific/Apia",
    country: "WS",
    points: "12,143,12,145,10,145,10,143",
    abbr: "WSDT"
  },
  {
    timezone: "Pacific/Auckland",
    country: "NZ",
    points: "485,190,487,189,488,187,490,186,492,183,490,181,487,185,484,186,481,189,485,190",
    abbr: "NZDT"
  },
  {
    timezone: "Pacific/Auckland",
    country: "NZ",
    points: "495,181,498,177,495,178,492,174,490,173,493,178,491,180,493,181,494,183,495,181",
    abbr: "NZDT"
  },
  {
    timezone: "Pacific/Chatham",
    country: "NZ",
    points: "6,185,6,187,4,187,4,185",
    abbr: "CHADT"
  },
  {
    timezone: "Pacific/Easter",
    country: "CL",
    points: "99,162,99,164,97,164,97,162",
    abbr: "EAST"
  },
  {
    timezone: "Pacific/Enderbury",
    country: "KI",
    points: "13,128,13,130,11,130,11,128",
    abbr: "PHOT"
  },
  {
    timezone: "Pacific/Fakaofo",
    country: "TK",
    points: "13,137,13,139,11,139,11,137",
    abbr: "TKT"
  },
  {
    timezone: "Pacific/Efate",
    country: "VU",
    points: "485,149,485,151,483,151,483,149",
    abbr: "VUT"
  },
  {
    timezone: "Pacific/Fiji",
    country: "FJ",
    points: "499,149,499,151,497,151,497,149",
    abbr: "FJST"
  },
  {
    timezone: "Pacific/Funafuti",
    country: "TV",
    points: "500,136,500,138,498,138,498,136",
    abbr: "TVT"
  },
  {
    timezone: "Pacific/Galapagos",
    country: "EC",
    points: "127,125,127,127,125,127,125,125",
    abbr: "GALT"
  },
  {
    timezone: "Pacific/Gambier",
    country: "PF",
    points: "64,156,64,158,62,158,62,156",
    abbr: "GAMT"
  },
  {
    timezone: "Pacific/Kwajalein",
    country: "MH",
    points: "483,111,483,113,481,113,481,111",
    abbr: "MHT"
  },
  {
    timezone: "Pacific/Guadalcanal",
    country: "SB",
    points: "474,137,474,139,472,139,472,137",
    abbr: "SBT"
  },
  {
    timezone: "Pacific/Guam",
    country: "GU",
    points: "452,105,452,107,450,107,450,105",
    abbr: "ChST"
  },
  {
    timezone: "Pacific/Honolulu",
    country: "US",
    points: "32,94,32,96,30,96,30,94",
    abbr: "HST"
  },
  {
    timezone: "Pacific/Johnston",
    country: "UM",
    points: "16,101,16,103,14,103,14,101",
    abbr: "HST"
  },
  {
    timezone: "Pacific/Kiritimati",
    country: "KI",
    points: "32,121,32,123,30,123,30,121",
    abbr: "LINT"
  },
  {
    timezone: "Pacific/Kosrae",
    country: "FM",
    points: "477,117,477,119,475,119,475,117",
    abbr: "KOST"
  },
  {
    timezone: "Pacific/Majuro",
    country: "MH",
    points: "489,114,489,116,487,116,487,114",
    abbr: "MHT"
  },
  {
    timezone: "Pacific/Midway",
    country: "UM",
    points: "5,85,5,87,3,87,3,85",
    abbr: "SST"
  },
  {
    timezone: "Pacific/Marquesas",
    country: "PF",
    points: "57,137,57,139,55,139,55,137",
    abbr: "MART"
  },
  {
    timezone: "Pacific/Nauru",
    country: "NR",
    points: "483,125,483,127,481,127,481,125",
    abbr: "NRT"
  },
  {
    timezone: "Pacific/Niue",
    country: "NU",
    points: "15,150,15,152,13,152,13,150",
    abbr: "NUT"
  },
  {
    timezone: "Pacific/Norfolk",
    country: "NF",
    points: "484,164,484,166,482,166,482,164",
    abbr: "NFT"
  },
  {
    timezone: "Pacific/Noumea",
    country: "NC",
    points: "482,155,482,157,480,157,480,155",
    abbr: "NCT"
  },
  {
    timezone: "Pacific/Pago_Pago",
    country: "AS",
    points: "14,144,14,146,12,146,12,144",
    abbr: "SST"
  },
  {
    timezone: "Pacific/Palau",
    country: "PW",
    points: "438,114,438,116,436,116,436,114",
    abbr: "PWT"
  },
  {
    timezone: "Pacific/Pitcairn",
    country: "PN",
    points: "70,159,70,161,68,161,68,159",
    abbr: "PST"
  },
  {
    timezone: "Pacific/Port_Moresby",
    country: "PG",
    points: "446,129,451,131,455,134,453,135,458,139,453,140,451,136,449,138,446,138",
    abbr: "PGT"
  },
  {
    timezone: "Pacific/Rarotonga",
    country: "CK",
    points: "29,153,29,155,27,155,27,153",
    abbr: "CKT"
  },
  {
    timezone: "Pacific/Saipan",
    country: "MP",
    points: "453,103,453,105,451,105,451,103",
    abbr: "ChST"
  },
  {
    timezone: "Pacific/Tahiti",
    country: "PF",
    points: "43,148,43,150,41,150,41,148",
    abbr: "TAHT"
  },
  {
    timezone: "Pacific/Tarawa",
    country: "KI",
    points: "491,122,491,124,489,124,489,122",
    abbr: "GILT"
  },
  {
    timezone: "Pacific/Tongatapu",
    country: "TO",
    points: "8,153,8,155,6,155,6,153",
    abbr: "TOT"
  },
  {
    timezone: "Pacific/Wake",
    country: "UM",
    points: "482,97,482,99,480,99,480,97",
    abbr: "WAKT"
  },
  {
    timezone: "Pacific/Wallis",
    country: "WF",
    points: "6,142,6,144,4,144,4,142",
    abbr: "WFT"
  }
].map(rg => {
  const region = zoneFromRegion(rg)
  if (region === undefined) {
    console.warn('missing timezone data for', rg)
  }
  return region !== undefined ? {
    ...rg,
    offset: region.offset
  } : undefined
}).filter(region => region !== undefined) as Region[]
