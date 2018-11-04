import { IOptions, Options } from '../src/IOptions';
import { expand } from '../src/mixins';

const opt = expand(new Options(), {nugetPath: 'NUGET'} as IOptions);
console.log(opt.yo() + opt.nugetPath);
