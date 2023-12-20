import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactoryDetail } from './factory-detail.entity';
import { FactoryDetailsService } from './factory-details.service';
import { FactoryDetailsController } from './factory-details.controller';
import { FactoriesModule } from 'src/factories/factories.module';

@Module({
    imports: [TypeOrmModule.forFeature([FactoryDetail]), FactoriesModule],
    providers: [FactoryDetailsService],
    controllers: [FactoryDetailsController],
})
export class FactoryDetailsModule {}
