import parser from 'xml2json';

export const xml2json = (xml: string) => {
  return parser.toJson(xml);
};
