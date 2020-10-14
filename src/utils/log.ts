export const Log = {
   ok: (log: any, status: string = 'OK') => console.log('\x1b[32m%s\x1b[0m %s',`[${status}]`, log),
   error: (log: any, status: string = 'ERROR') => console.log('\x1b[31m%s\x1b[0m %s',`[${status}]`, log),
};
