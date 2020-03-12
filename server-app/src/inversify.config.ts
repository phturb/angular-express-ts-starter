import { Container } from 'inversify';
// import { IndexController } from './controller/index.controller';
import { IndexService } from './service/index.service';
import TYPES from './constant/types';

const container: Container = new Container();

container.bind(TYPES.IndexService).to(IndexService);
// container.bind(TYPES.IndexController).to(IndexController);

export { container };