import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FactoryDetail } from './factory-detail.entity';
import { FactoryDetailDto } from './dto/factory-detail-dto';
import { Factory } from 'src/factories/factory.entity';

@Injectable()
export class FactoryDetailsService {
    constructor(
        @InjectRepository(FactoryDetail)
        private readonly factoryDetailsRepository: Repository<FactoryDetail>,
    ) {}

    create(
        factoryDto: FactoryDetailDto,
        factory: Factory,
    ): Promise<FactoryDetail> {
        const factoryDetail = new FactoryDetail();

        factoryDetail.departmant = factoryDto.departmant;
        factoryDetail.start = factoryDto.start;
        factoryDetail.end = factoryDto.end;
        factoryDetail.cost = factoryDto.cost;
        factoryDetail.discount = factoryDto.discount;
        factoryDetail.factory = factory;

        return this.factoryDetailsRepository.save(factoryDetail);
    }

    findAll(): Promise<FactoryDetail[]> {
        return this.factoryDetailsRepository.find();
    }

    async findOne(id: number): Promise<FactoryDetail> {
        const factoryDetail = await this.factoryDetailsRepository.findOneBy({
            id,
        });
        if (!factoryDetail) {
            throw new NotFoundException(
                `Factory detail with identifier ${id} not found`,
            );
        }
        return factoryDetail;
    }

    async remove(id: number): Promise<void> {
        const factoryDetail = await this.factoryDetailsRepository.findOneBy({
            id,
        });
        if (!factoryDetail) {
            throw new NotFoundException(
                `Factory detail with identifier ${id} not found`,
            );
        }
        await this.factoryDetailsRepository.remove(factoryDetail);
    }
}
