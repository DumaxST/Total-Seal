import { ParsedString } from "../lib/definitions";

  
 export  function parseString(input: string): ParsedString {
    const [id, number, hash] = input.split('|');
    return {
      id,
      number,
      hash
    };
  }