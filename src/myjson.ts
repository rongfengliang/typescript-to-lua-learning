export declare module json {
    function decode(input: string): object;
    function encode(
       input: object,
       params?: {
           indent?: boolean,
           level?: number,
       }
   ): string;
 }

 export {
     json as mydemojson
 }