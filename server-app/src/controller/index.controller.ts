import { Request } from 'express';
import { inject } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';
import TYPES from '../constant/types';
import { IndexService } from '../service/index.service';
import { IIndex } from '../../../common/IIndex';

@controller('/')
export class IndexController {

    constructor(@inject(TYPES.IndexService) private indexService: IndexService) { }

    @httpGet('/')
    getIndex(request: Request) : IIndex {
        return this.indexService.getIndex();
    }
}