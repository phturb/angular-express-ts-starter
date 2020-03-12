import { injectable } from 'inversify';
import { IIndex } from '../../../common/IIndex';

@injectable()
export class IndexService {

    getIndex() : IIndex {
        return { hack:'IT\'S HACKING TIME', date: Date.now() };
    }

}