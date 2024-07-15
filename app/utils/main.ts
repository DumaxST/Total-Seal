import { ParsedString } from "../lib/definitions";

  
 export  function parseString(input: string): ParsedString {
    const [typeMessage, imei, idConnection] = input.split('|');
    return {
      typeMessage,
      imei,
      idConnection
    };
  }