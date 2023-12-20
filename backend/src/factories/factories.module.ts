import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factory } from './factory.entity';
import { FactoriesService } from './factories.service';
import { FactoriesController } from './factories.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Factory])],
    providers: [FactoriesService],
    controllers: [FactoriesController],
    exports: [FactoriesService],
})
export class FactoriesModule {}

